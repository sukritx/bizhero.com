const steps = [
  {
    number: "01",
    title: "Call or Request Online",
    subtitle: "We respond fast",
    description:
      "Call us at (323) 410-2068 or fill out our online form. We'll gather the details about your plumbing issue and schedule a visit at a time that works for you — including same-day emergency service.",
  },
  {
    number: "02",
    title: "Inspection & Diagnosis",
    subtitle: "Upfront pricing",
    description:
      "Our licensed technician will inspect the issue — using advanced tools like sewer cameras and leak detection equipment when needed. You'll receive a clear explanation of the problem and an upfront quote before any work begins.",
  },
  {
    number: "03",
    title: "Expert Repair & Cleanup",
    subtitle: "Quality guaranteed",
    description:
      "We complete the repair efficiently using professional-grade materials and proven techniques. Whether it's a simple fix or a full trenchless pipe relining, we clean up after ourselves and make sure everything works perfectly before we leave.",
  },
];

const Process = () => {
  return (
    <section className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="wow fadeInUp mx-auto mb-16 max-w-[700px] text-center" data-wow-delay=".1s">
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            How Our Plumbing Service Works
          </h2>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {steps.map((step, i) => (
            <div key={i} className="w-full px-4 md:w-1/3">
              <div className="wow fadeInUp relative mb-12" data-wow-delay=".15s">
                <div className="mb-6 text-6xl font-black text-primary/10">
                  {step.number}
                </div>
                <h3 className="mb-1 text-xl font-bold text-dark dark:text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mb-4 text-sm font-semibold text-primary">
                  {step.subtitle}
                </p>
                <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-[2px] w-8 bg-primary/20 md:block lg:w-12" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
