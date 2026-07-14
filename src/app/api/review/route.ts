import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.BAD_REVIEW_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Bad review webhook URL not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: body.firstName || "",
        lastName: body.lastName || "",
        email: body.email || "",
        feedback: body.feedback || "",
        mood: body.mood || "",
        source: "review-funnel",
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
