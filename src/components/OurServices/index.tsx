import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Emergency Plumbing",
    description:
      "Plumbing emergencies don't wait, and neither do we. Our team is available 24/7 for burst pipes, sewer backups, gas leaks, and more.",
    image: "/images/about/about-image-01.jpg",
    href: "/services#emergency",
  },
  {
    title: "Trenchless Pipe Relining",
    description:
      "Rehabilitate underground pipes with minimal excavation using our advanced CIPP lining technology. Save time, money, and your landscape.",
    image: "/images/about/about-image-02.jpg",
    href: "/services#trenchless",
  },
  {
    title: "Drain Cleaning & Hydro Jetting",
    description:
      "From simple clogs to severe blockages, our drain cleaning and hydro jetting services restore full flow to your pipes quickly.",
    image: "/images/blog/blog-01.jpg",
    href: "/services#drain-cleaning",
  },
  {
    title: "Sewer Camera Inspection",
    description:
      "See exactly what's going on inside your sewer lines with advanced video inspection technology. Accurate diagnosis, no guesswork.",
    image: "/images/blog/blog-02.jpg",
    href: "/services#camera-inspection",
  },
  {
    title: "Water Heater Services",
    description:
      "Installation, repair, and maintenance for tank and tankless water heaters. Stay comfortable year-round with reliable hot water.",
    image: "/images/blog/blog-03.jpg",
    href: "/services#water-heater",
  },
  {
    title: "Leak Detection & Repair",
    description:
      "Advanced leak detection technology finds hidden leaks without destructive searching. Fast, accurate, and non-invasive solutions.",
    image: "/images/hero/hero-image.jpg",
    href: "/services#leak-detection",
  },
];

const OurServices = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-[700px] text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            What We Offer
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive plumbing solutions delivered by licensed professionals you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
