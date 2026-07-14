import Link from "next/link";

const GoogleLogo = () => (
  <svg className="h-10 w-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" fill="#EA4335" />
    <path d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.51h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-18.14z" fill="#4285F4" />
    <path d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.9 23.9 0 000 24c0 3.77.9 7.34 2.44 10.51l8.09-5.92z" fill="#FBBC05" />
    <path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" fill="#34A853" />
  </svg>
);

const reviews = [
  {
    name: "Maria G.",
    rating: 5,
    text: "Responded within an hour when we had a burst pipe at 2 AM. Professional, explained everything clearly, and had the repair done quickly. Fair pricing with no surprises!",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Their trenchless pipe relining saved us from having to dig up our parking lot. Professional team, transparent pricing, and they always show up on time.",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "Best plumbing experience I've ever had. They did a sewer camera inspection first so I could see the problem, then walked me through all my options. No pressure, no upselling.",
  },
  {
    name: "James L.",
    rating: 5,
    text: "Called for a water heater replacement and they were out the same day. Quality work at a fair price. Will definitely use them again for any plumbing needs.",
  },
  {
    name: "Patricia M.",
    rating: 4,
    text: "Very professional and thorough. They explained the issue with our sewer line clearly and the hydro jetting service resolved it completely. Highly recommend.",
  },
  {
    name: "Robert T.",
    rating: 5,
    text: "Excellent service from start to finish. The crew was on time, respectful of our home, and left everything spotless. Top-notch plumbing company.",
  },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const GoogleReviews = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-[700px] text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Google Reviews
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Discover what our customers have to say about us.
          </h2>
        </div>

        <div className="mb-10 text-center">
          <Link
            href="/review"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
          >
            Leave a Review
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} filled={j < review.rating} />
                ))}
              </div>
              <p className="mb-4 text-base leading-relaxed text-gray-600">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <GoogleLogo />
                <p className="text-sm font-semibold text-gray-900">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
