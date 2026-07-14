import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services & Pricing | A-1 Total Service Plumbing",
  description:
    "Explore our plumbing service options and pricing. Free estimates for residential, commercial, and municipal plumbing services in Los Angeles and Orange County.",
};

const PricingPage = () => {
  return (
    <>
      <Pricing />
      <Process />
      <Faq />
      <CallToAction />
    </>
  );
};

export default PricingPage;
