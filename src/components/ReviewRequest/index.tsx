"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const ReviewRequest = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.fullName as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
    };

    try {
      const response = await fetch("/api/review-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-[70vh] py-20 lg:py-28">
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/brands/bizhero-logo.jpg"
              alt="BizHero"
              width={160}
              height={60}
              className="h-auto w-[160px] object-contain"
              priority
            />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Request a Review
          </h1>
          <p className="text-gray-600">
            Please provide your details and we&apos;ll send you a link to leave us a review.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-lg bg-green-50 p-8 text-center">
            <span className="mb-4 inline-block text-5xl">🎉</span>
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Request Sent!
            </h3>
            <p className="text-gray-600">
              We&apos;ll send you a review link shortly. Thank you!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="(323) 555-1234"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                Email <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ReviewRequest;
