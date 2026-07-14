"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import pricingData from "@/data/pricingData";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-28 dark:bg-dark lg:pb-[90px] lg:pt-[150px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle=""
            title="Our Pricing"
            paragraph=""
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}     
        </div>
      </div>
    </section>
  );
};

export default Pricing;
