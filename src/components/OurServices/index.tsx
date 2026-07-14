import Link from "next/link";

const productCategories = [
  {
    title: "Engine Oil",
    description: "High-performance engine oils for passenger cars, diesel engines, heavy-duty trucks, and NGV vehicles from Valvoline and PETRONAS.",
    href: "/products/engine-oil",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Hydraulic Oil",
    description: "Premium hydraulic oils for presses, excavators, injection molding machines, and factory hydraulic systems. Available in multiple viscosity grades.",
    href: "/products/hydraulic-oil",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: "Gear Oil",
    description: "Heavy-duty gear oils for industrial gearboxes, differentials, and heavy machinery. Extreme pressure protection from Valvoline and PETRONAS.",
    href: "/products/gear-oil",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Grease",
    description: "Multipurpose and specialty greases for bearings, construction equipment, and industrial machinery. Excellent adhesion and water resistance.",
    href: "/products/grease",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Compressor Oil",
    description: "High-performance compressor oils for air and industrial compressors. Minimizes deposit formation and extends service intervals.",
    href: "/products/compressor-oil",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <path d="M10 22v-4H6.5a2.5 2.5 0 0 1 0-5H10" />
        <path d="M14 22v-4h3.5a2.5 2.5 0 0 0 0-5H14" />
        <path d="M12 7v6" />
      </svg>
    ),
  },
  {
    title: "Metal Working Fluid",
    description: "Straight oils for CNC machining, grinding, cutting, milling, and drilling. Improve tool life and surface finish with Monroe products.",
    href: "/products/metal-working-fluid",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const OurServices = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-[700px] text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Product Categories
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Our Product Range
          </h2>
          <p className="text-lg text-gray-600">
            Browse our comprehensive range of automotive and industrial lubricants from trusted brands Valvoline, PETRONAS, and Monroe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, i) => (
            <div
              key={i}
              className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                {category.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {category.title}
              </h3>
              <p className="mb-4 text-base leading-relaxed text-gray-600">
                {category.description}
              </p>
              <Link
                href={category.href}
                className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                View Products
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products/engine-oil"
            className="inline-flex items-center justify-center border border-primary px-6 py-3 text-base font-bold text-primary transition duration-300 hover:bg-primary hover:text-white"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
