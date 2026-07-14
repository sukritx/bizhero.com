import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.N8N_CONTACT_NOTIFY_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Contact notify webhook URL not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { contactId } = body;

    if (!contactId) {
      return NextResponse.json(
        { error: "contactId is required" },
        { status: 400 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contactId,
        event: "review-page-visited",
        visitedAt: new Date().toISOString(),
        source: "review-page",
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
