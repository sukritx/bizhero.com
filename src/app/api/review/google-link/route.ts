import { NextResponse } from "next/server";

export async function GET() {
  const googleReviewLink = process.env.GOOGLE_REVIEW_LINK;

  if (!googleReviewLink) {
    return NextResponse.json(
      { error: "Google review link not configured" },
      { status: 500 }
    );
  }

  return NextResponse.json({ url: googleReviewLink });
}
