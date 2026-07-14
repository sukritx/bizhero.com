async function submitReviewForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  feedback: string;
  mood: string;
}) {
  const response = await fetch("/api/review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit review");
  }

  return response.json();
}

export default submitReviewForm;
