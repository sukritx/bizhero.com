import Link from "next/link";

const services = [
  {
    title: "Oil Change Service",
    description:
      "Professional oil change for fleet trucks, commercial vehicles, and industrial machinery using premium Valvoline and PETRONAS lubricants.",
    href: "/services/oil-change",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.4 16 10 16 10s-1.3-1.4-2.2-2.2c-.5-.4-1.2-.4-1.7 0C10.3 8.6 9 10 9 10s-2.7.4-4.5 1.1C3.7 11.3 3 12.1 3 13v3c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    title: "Sump Tank Cleaning",
    description:
      "Industrial cleaning for hydraulic tanks, oil storage tanks, and lubrication systems to remove sludge and contaminants.",
    href: "/services/sump-tank-cleaning",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Used Oil Analysis",
    description:
      "Comprehensive oil testing to assess metal wear, contamination, and oil condition for predictive maintenance and early fault detection.",
    href: "/services/used-oil-analysis",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

const HomeServices = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-[700px] text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Beyond Lubricant Supply
          </h2>
          <p className="text-lg text-gray-600">
            We provide maintenance services that help businesses reduce downtime
            and extend equipment life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-4 text-base leading-relaxed text-gray-600">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                Learn More
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
