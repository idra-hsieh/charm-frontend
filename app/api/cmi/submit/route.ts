import { CMISubmitPayload } from "@/lib/cmi/api-types";
import { generateUniqueCode } from "@/lib/cmi/generate-code";
import { supabaseAdmin } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

const MAX_RETRIES = 5;

export async function POST(req: NextRequest) {
    try {
        // 1. Validate the request body
        const body: CMISubmitPayload = await req.json();
        const { email, answers, traitScores, result, subscribe, locale } = body;

        if (!email || !answers || !traitScores || !result) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        // 2. Ensure supabaseAdmin is available (Server-side check)
        if (!supabaseAdmin) {
            console.error("Supabase Admin client not initialized");
            return NextResponse.json(
                { message: "Internal Server Error" },
                { status: 500 }
            )
        }

        // 3. Attempt to generate and insert a unique 6-character code
        // Notes:
        // - We rely on high entropy from nanoid to avoid collisions.
        // - The database PRIMARY KEY constraint guarantees uniqueness.
        // - If a rare collision occurs (Postgres error 23505),
        //   we regenerate a new code and retry up to MAX_RETRIES times.

        let finalCode: string | null = null;
        let lastError: unknown = null;

        interface SupabaseError {
            code?: string;
            message?: string;
            details?: string;
            hint?: string;
        }

        function isSupabaseError(err: unknown): err is SupabaseError {
            return typeof err === "object" && err !== null && "code" in err;
        }

        for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
            const code = generateUniqueCode();

            const dbPayload = {
                code,
                email,
                subscribe: subscribe || false,
                locale: locale || "en",
                answers, // JSONB
                trait_scores: traitScores, // JSONB
                result, // JSONB
                // created_at handled by DB default
            };

            const { error } = await supabaseAdmin
                .from("cmi_results")
                .insert(dbPayload);

            if (!error) {
                // Successfully inserted — store the final code and break
                finalCode = code;
                lastError = null;
                break;
            }

            // Duplicate key error (code collision) → regenerate and retry
            if (isSupabaseError(error) && error.code === "23505") {
                console.warn(`Duplicate code detected (${code}). Retrying...`);
                lastError = error;
                continue;
            }

            // Some other DB error occurred — abort immediately
            console.error("Supabase insertion error", error);
            return NextResponse.json(
                { message: "Failed to save results" },
                { status: 500 }
            );
        }


        // 4. If all retries failed due to repeated collisions (rare)
        if (!finalCode) {
            console.error("Failed to generate a unique code after multiple retries:", lastError);
            return NextResponse.json(
                { message: "Failed to generate unique code" },
                { status: 500 }
            );
        }

        // 5. Return the successfully generated unique result code
        return NextResponse.json({
            code: finalCode,
            message: "Result saved successfully",
        });

    } catch (error) {
        console.error("Unexpected error in submit API:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}