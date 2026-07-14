import ReviewRequest from "@/components/ReviewRequest";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Review | A-1 Total Service Plumbing",
  description:
    "Request a review link from A-1 Total Service Plumbing. Share your experience with our plumbing services.",
};

const ReviewRequestPage = () => {
  return <ReviewRequest />;
};

export default ReviewRequestPage;
