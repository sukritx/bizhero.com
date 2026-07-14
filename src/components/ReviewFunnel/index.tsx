"use client";

import Image from "next/image";
import { useState, FormEvent, useEffect } from "react";
import submitReviewForm from "@/utils/submitReviewForm";

type Mood = "sad" | "neutral" | "happy" | null;

const MoodSelector = ({
  selected,
  onSelect,
}: {
  selected: Mood;
  onSelect: (mood: Mood) => void;
}) => (
  <div className="flex items-center justify-center gap-8">
    {([
      { mood: "sad" as Mood, label: "Unhappy", emoji: "😞" },
      { mood: "neutral" as Mood, label: "Okay", emoji: "😐" },
      { mood: "happy" as Mood, label: "Happy", emoji: "😊" },
    ]).map(({ mood, label, emoji }) => (
      <button
        key={mood}
        onClick={() => onSelect(mood)}
        className={`flex flex-col items-center gap-2 rounded-xl border-2 p-6 transition hover:scale-105 ${
          selected === mood
            ? "border-primary bg-primary/5 shadow-md"
            : "border-gray-200 bg-white hover:border-gray-300"
        }`}
      >
        <span className="text-5xl">{emoji}</span>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </button>
    ))}
  </div>
);

const FeedbackForm = ({ mood }: { mood: Mood }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      firstName: (form.firstName as HTMLInputElement).value,
      lastName: (form.lastName as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      feedback: (form.feedback as HTMLTextAreaElement).value,
      mood: mood || "",
    };

    try {
      await submitReviewForm(data);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg text-center">
        <span className="mb-4 inline-block text-5xl">✅</span>
        <h3 className="mb-2 text-xl font-bold text-gray-900">Thank you for your feedback!</h3>
        <p className="text-gray-600">We appreciate you taking the time to share your thoughts. We&apos;ll do our best to improve.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-8 text-center">
        <span className="mb-3 inline-block text-4xl">😔</span>
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          Sorry to hear that you&apos;re not satisfied.
        </h3>
        <p className="text-gray-600">
          Please provide us with your feedback and we&apos;ll do our best to improve.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-gray-700">
              First Name <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-gray-700">
              Last Name <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              placeholder="Doe"
            />
          </div>
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

        <div>
          <label htmlFor="feedback" className="mb-1.5 block text-sm font-medium text-gray-700">
            Your Feedback <span className="text-gray-500">(Please let us know what we can do to improve?)</span>
          </label>
          <textarea
            id="feedback"
            name="feedback"
            required
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            placeholder="Tell us about your experience..."
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

const HappyReview = ({ onBack }: { onBack: () => void }) => {
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    const redirect = async () => {
      try {
        const res = await fetch("/api/review/google-link");
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url;
          return;
        }
      } catch {}
      setRedirecting(false);
    };
    redirect();
  }, []);

  return (
    <div className="text-center">
      <span className="mb-4 inline-block text-6xl">🎉</span>
      <h3 className="mb-2 text-2xl font-bold text-gray-900">
        We&apos;re so glad you had a great experience!
      </h3>
      <p className="mb-4 text-gray-600">
        {redirecting ? "Redirecting..." : "Something went wrong. Please try again."}
      </p>
      {!redirecting && (
        <button
          onClick={onBack}
          className="text-sm text-gray-500 underline hover:text-gray-700 transition"
        >
          Go back
        </button>
      )}
    </div>
  );
};

const ReviewFunnel = ({ contactId }: { contactId?: string | null }) => {
  const [mood, setMood] = useState<Mood>(null);

  useEffect(() => {
    if (contactId) {
      fetch("/api/review/notify-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactId }),
      }).catch(() => {});
    }
  }, [contactId]);

  return (
    <section className="min-h-[70vh] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/brands/bizhero-logo.jpg"
              alt="BizHero"
              width={120}
              height={60}
              className="h-auto w-[120px] object-contain"
            />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            How was your experience?
          </h1>
          <p className="text-gray-600">Your feedback helps us improve our services.</p>
        </div>

        {!mood && <MoodSelector selected={mood} onSelect={setMood} />}

        {mood === "happy" && <HappyReview onBack={() => setMood(null)} />}

        {(mood === "sad" || mood === "neutral") && (
          <div>
            <FeedbackForm mood={mood} />
            <div className="mt-6 text-center">
              <button
                onClick={() => setMood(null)}
                className="text-sm text-gray-500 underline hover:text-gray-700 transition"
              >
                Go back
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewFunnel;
