async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  source?: string;
}) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }

  return response.json();
}

export default submitContactForm;
