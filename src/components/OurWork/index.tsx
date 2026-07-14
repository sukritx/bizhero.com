import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Trenchless Pipe Relining",
    category: "Commercial",
    image: "/images/about/about-image-01.jpg",
  },
  {
    title: "Emergency Burst Pipe Repair",
    category: "Residential",
    image: "/images/about/about-image-02.jpg",
  },
  {
    title: "Hydro Jetting Service",
    category: "Residential",
    image: "/images/blog/blog-01.jpg",
  },
  {
    title: "Water Heater Installation",
    category: "Residential",
    image: "/images/blog/blog-02.jpg",
  },
  {
    title: "Sewer Line Replacement",
    category: "Municipal",
    image: "/images/blog/blog-03.jpg",
  },
  {
    title: "Drain Cleaning & Clearing",
    category: "Residential",
    image: "/images/hero/hero-image.jpg",
  },
];

const OurWork = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-[700px] text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Work
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            See Why Our Customers Love Us
          </h2>
          <p className="text-lg text-gray-600">
            See our work — real projects, real results. Quality craftsmanship on every job.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative h-72 lg:h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-primary px-8 py-3.5 text-base font-bold text-white transition hover:bg-primary/90"
          >
            View All Our Work
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
