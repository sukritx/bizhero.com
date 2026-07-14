import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.FORM_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Webhook URL not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        email: body.email,
        message: body.message,
        source: body.source || "website",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Webhook request failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
