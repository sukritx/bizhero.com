import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <div className="absolute right-0 top-0 -mt-12 -mr-12 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="10" />
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="10" />
          <circle cx="100" cy="100" r="25" stroke="white" strokeWidth="10" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="10" />
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="10" />
          <circle cx="100" cy="100" r="25" stroke="white" strokeWidth="10" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Ready to Optimize Your Equipment Performance?
          </h2>
          <p className="mb-10 text-lg text-white/80">
            Get expert advice on lubricant selection, maintenance services, and used oil analysis. Our team is ready to help you reduce downtime and extend equipment life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white px-8 py-4 text-base font-bold text-dark transition duration-300 hover:bg-white/90"
            >
              Request a Quote
            </Link>
            <Link
              href="/products/engine-oil"
              className="inline-flex items-center justify-center border border-white px-8 py-4 text-base font-bold text-white transition duration-300 hover:bg-white hover:text-dark"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
