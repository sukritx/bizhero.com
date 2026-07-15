import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-900 pt-44 pb-12 sm:pt-48 sm:pb-16 lg:pt-52">
      <Image
        src="/images/hero/bizhero-hero-compressed.png"
        alt=""
        fill
        className="object-cover object-center opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            <div className="text-center lg:text-left">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Authorized Lubricant Distributor
              </span>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl">
                Premium Lubricants &amp; Maintenance Services
              </h1>
              <p className="mt-2 text-lg text-gray-200 sm:mt-8">
                Authorized distributor of Valvoline, PETRONAS, and Monroe — plus maintenance, technical support, and oil analysis to keep your equipment running.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
                <Image
                  src="/images/brands/valvoline.svg"
                  alt="Valvoline"
                  width={100}
                  height={40}
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
                <Image
                  src="/images/brands/petronas.svg"
                  alt="PETRONAS"
                  width={100}
                  height={40}
                  className="h-7 w-auto object-contain brightness-0 invert"
                />
                <Image
                  src="/images/brands/monroe.png"
                  alt="Monroe"
                  width={100}
                  height={40}
                  className="h-7 w-auto object-contain brightness-0 invert"
                />
              </div>
              <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
                <Link
                  href="/products/engine-oil"
                  className="inline-flex bg-primary px-6 py-3 text-base font-bold text-white transition-all duration-200 hover:bg-primary/80"
                >
                  Explore Products
                </Link>
                <Link
                  href="/services/oil-change"
                  className="inline-flex border border-white px-6 py-3 text-base font-bold text-white transition-all duration-200 hover:bg-white hover:text-dark"
                >
                  Our Services
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
                <div>
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-sm text-gray-400">Trusted Brands</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">Product Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-sm text-gray-400">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-xl bg-white/10 backdrop-blur-sm p-8 sm:p-10">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Why Choose BizHero?
              </h3>
              <ul className="space-y-4">
                {[
                  "Authorized distributor of top global brands",
                  "Automotive, commercial & industrial lubricants",
                  "Maintenance & technical support services",
                  "Predictive maintenance via oil analysis",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block w-full bg-primary px-6 py-3 text-center text-base font-bold text-white transition duration-300 ease-in-out hover:bg-primary/80"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
