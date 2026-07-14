import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.REVIEW_REQUEST_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Review request webhook URL not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name || "",
        phone: body.phone || "",
        email: body.email || "",
        source: "review-request",
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
