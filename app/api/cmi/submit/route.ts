import { CMISubmitPayload } from "@/lib/cmi/api-types";
import { generateUniqueCode } from "@/lib/cmi/generate-code";
import { supabaseAdmin } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

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

        // Ensure supabaseAdmin is available (Server-side check)
        if (!supabaseAdmin) {
            console.error("Supabase Admin client not initialized");
            return NextResponse.json(
                { message: "Internal Server Error" },
                { status: 500 }
            )
        }

        // 2. Generate a unique code
        // TO_DO: In a production environment with millions of rows, create a loop to check for collisions.
        // For now, we rely on the high entropy of the 6-char code and database unique constraints.
        const code = generateUniqueCode();

        // 3. Prepare data for storage
        // Mapping camelCase TypeScript properties to snake_case database columns
        const dbPayload = {
            code,
            email,
            subscribe: subscribe || false,
            locale: locale || 'en',
            answers,       // stored as JSONB
            trait_scores: traitScores, // stored as JSONB, mapped from traitScores
            result,        // stored as JSONB
            // created_at will be handled by default value in DB or we can set it here
        };

        // 4. Insert into Supabase
        const { error } = await supabaseAdmin
            .from('cmi_results')
            .insert(dbPayload);
        
        if (error) {
            console.error("Supabase insertion error", error);
            // Handle potential duplicate code error specifically if needed, 
            // though 'nanoid' collision probability is extremely low.
            return NextResponse.json(
                { message: 'Failed to save results' },
                { status: 500 }
            );
        }

        // 5. Return the code
        return NextResponse.json({
            code,
            message: "Result saved successfully"
        });
    } catch (error) {
        console.error("Unexpected error in submit API: ", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}