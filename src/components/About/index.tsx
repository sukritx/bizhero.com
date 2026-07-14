import Image from "next/image";

const About = () => {
  return (
    <section className="pb-20 pt-28 lg:pb-[120px] lg:pt-[150px]">
      <div className="container">
        <div className="mb-20">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-dark dark:text-white sm:text-5xl md:text-6xl">
                  Your Trusted Southern California Plumber Since 2004
                </h1>
                <p className="mb-4 text-lg leading-relaxed text-body-color dark:text-dark-6">
                  A-1 Total Service Plumbing is a licensed, bonded, and insured plumbing company specializing in residential, commercial, municipal, and trenchless plumbing services across Southern California. With California State License #1135475, we&apos;ve built our reputation on fast response times, professional technicians, transparent pricing, and quality workmanship.
                </p>
                <p className="text-lg leading-relaxed text-body-color dark:text-dark-6">
                  We are particularly known for our trenchless pipe repair and cured-in-place pipe (CIPP) lining, allowing underground pipe rehabilitation with minimal excavation. Our trenchless systems support pipes from 2&quot;–48&quot; diameter, and we can support industrial trenchless projects nationwide. Whether it&apos;s a simple drain cleaning or a complex sewer line replacement, A-1 Total Service Plumbing delivers reliable results every time.
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="/images/about/about-image-01.jpg"
                  alt="A-1 Total Service Plumbing professional technicians at work"
                  fill
                  className="h-full w-full object-cover object-center rounded-lg shadow-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-dark dark:text-white sm:text-4xl">
            Why Choose A-1 Total Service Plumbing?
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-body-color dark:text-dark-6">
            With over 20 years of experience and 1,400+ five-star reviews, we&apos;re the plumber Southern California trusts.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Licensed &amp; Insured
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                California State License #1135475. Licensed, bonded, and insured for your protection and peace of mind.
              </p>
            </div>

            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                24/7 Emergency Service
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                Plumbing emergencies don&apos;t wait — and neither do we. Available 24 hours a day, 7 days a week for urgent plumbing needs.
              </p>
            </div>

            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                4.9★ Rated (1,400+ Reviews)
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                Our customers consistently praise our fast response times, professional technicians, and transparent pricing.
              </p>
            </div>

            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Transparent Pricing
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                No hidden fees, no surprise charges. We provide upfront estimates so you know exactly what to expect before work begins.
              </p>
            </div>

            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Financing Available
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                We offer flexible financing options and military discounts to make quality plumbing accessible to everyone.
              </p>
            </div>

            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Nationwide Trenchless Support
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                While we serve all of Southern California, our trenchless lining capabilities are available for industrial projects nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
