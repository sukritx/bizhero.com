import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="wow fadeInUp mx-auto mb-12 max-w-[700px] text-center lg:mb-20" data-wow-delay=".1s">
          <h2 className="mb-3 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl md:text-[48px] md:leading-[1.15]">
            Professional Plumbing Services You Can Trust
          </h2>
          <p className="text-lg font-medium text-body-color dark:text-dark-6 sm:text-xl">
            Licensed, bonded &amp; insured — serving Southern California since 2004
          </p>
        </div>

        <div className="-mx-4 mt-12 flex flex-wrap justify-center lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
