import AboutUs from "@/components/AboutUs";
import Badges from "@/components/Badges";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import GoogleReviews from "@/components/GoogleReviews";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import OurWork from "@/components/OurWork";
import Process from "@/components/Process";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A-1 Total Service Plumbing | Licensed Plumber in Los Angeles & Orange County",
  description:
    "A-1 Total Service Plumbing provides licensed, bonded, and insured plumbing services across Los Angeles County and Orange County. 24/7 emergency plumbing, drain cleaning, hydro jetting, trenchless pipe relining, water heater installation, and more. Call (323) 410-2068.",
  keywords:
    "plumber Los Angeles, plumber Orange County, drain cleaning, hydro jetting, leak detection, sewer line repair, trenchless pipe relining, repiping, water heater installation, emergency plumber, A-1 Total Service Plumbing",
  openGraph: {
    title: "A-1 Total Service Plumbing | Licensed Plumber in Los Angeles & Orange County",
    description:
      "Licensed, bonded, and insured plumbing services across LA and OC. 24/7 emergency plumbing. Call (323) 410-2068.",
    type: "website",
    locale: "en_US",
    url: "https://a1totalserviceplumbing.com",
    siteName: "A-1 Total Service Plumbing",
  },
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <Hero />
      <Badges />
      <AboutUs />
      <OurServices />
      <OurWork />
      <GoogleReviews />
      <Faq />
      <ServiceAreas />
      <CallToAction />
    </main>
  );
}
