import Link from "next/link";

const serviceAreas = [
  {
    region: "Los Angeles County",
    areas: [
      "Los Angeles",
      "Long Beach",
      "Santa Clarita",
      "Glendale",
      "Lancaster",
      "Palmdale",
      "Pomona",
      "Torrance",
      "Pasadena",
      "El Monte",
      "Downey",
      "Carson",
      "Inglewood",
      "Norwalk",
      "West Covina",
    ],
  },
  {
    region: "Orange County",
    areas: [
      "Anaheim",
      "Santa Ana",
      "Irvine",
      "Huntington Beach",
      "Garden Grove",
      "Orange",
      "Fullerton",
      "Costa Mesa",
      "Mission Viejo",
      "La Habra",
      "Buena Park",
      "Newport Beach",
      "Tustin",
      "Westminster",
      "Yorba Linda",
    ],
  },
];

const ServiceAreas = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-[700px] text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Coverage
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Proudly Serving These Areas
          </h2>
          <p className="text-lg text-gray-600">
            Licensed plumbing services across Los Angeles County, Orange County, and surrounding communities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <iframe
              title="Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.4258970275!2d-118.39416375!3d33.9177639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[350px] w-full"
            />
          </div>

          <div>
            {serviceAreas.map((region, i) => (
              <div key={i} className={i > 0 ? "mt-8" : ""}>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {region.region}
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                  {region.areas.map((area, j) => (
                    <Link
                      key={j}
                      href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group flex items-center gap-2 text-sm text-gray-600 transition hover:text-primary"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-primary/60 transition group-hover:text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      {area}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h4 className="mb-2 text-base font-semibold text-gray-900">
                Don&apos;t see your area?
              </h4>
              <p className="mb-4 text-sm text-gray-600">
                We may still serve your location. Contact us to find out if we can help with your plumbing needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary/90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
