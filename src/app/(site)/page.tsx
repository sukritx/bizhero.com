import AboutUs from "@/components/AboutUs";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import HomeServices from "@/components/HomeServices";
import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BizHero Lubricants | Industrial & Automotive Lubricant Supplier",
  description:
    "BizHero supplies premium Valvoline, PETRONAS, and Monroe lubricants for automotive, commercial, and industrial applications. We offer maintenance services, technical support, and used oil analysis to reduce equipment downtime.",
  keywords:
    "industrial lubricants, automotive lubricants, Valvoline distributor, PETRONAS lubricants, Monroe metal working fluid, engine oil, hydraulic oil, gear oil, grease, used oil analysis, lubricant supplier",
  openGraph: {
    title: "BizHero Lubricants | Industrial & Automotive Lubricant Supplier",
    description:
      "Authorized distributor of Valvoline, PETRONAS, and Monroe lubricants. Maintenance services, technical support, and used oil analysis.",
    type: "website",
    locale: "en_US",
    siteName: "BizHero Lubricants",
  },
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <Hero />
      <AboutUs />
      <OurServices />
      <HomeServices />
      <HomeBlogSection posts={posts} />
      <Faq />
      <CallToAction />
    </main>
  );
}
