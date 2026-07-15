import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/call-to-action/gear.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-dark/85" />
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
              href="https://share-na2.hsforms.com/283IRhHVgQLuB-uFLk7V9cQ40ae96"
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
