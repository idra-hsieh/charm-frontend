import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import CMIResultEmail from "@/components/emails/CMIResultEmail";
import { buildResultEmailContent } from "@/lib/cmi/email";
import { TraitScoresByTrait, getResult } from "@/lib/cmi/content";

type SendResultPayload = {
  email: string;
  locale?: string;
  code: string;
  result: ReturnType<typeof getResult>;
  traitScores?: TraitScoresByTrait;
  createdAt?: string | number;
};

export async function POST(request: Request) {
  try {
    const body: SendResultPayload = await request.json();
    const {
      email,
      locale = "en",
      code,
      result,
      traitScores,
      createdAt,
    } = body;

    if (!email || !code || !result) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const templateData = await buildResultEmailContent({
      locale,
      code,
      result,
      traitScores,
      createdAt,
      baseUrl: request.headers.get("origin") || undefined,
    });

    const emailHtml = await render(<CMIResultEmail {...templateData} />);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Charm" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `${templateData.labels.title}: ${templateData.values.code}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
