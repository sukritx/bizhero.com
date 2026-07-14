import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | A-1 Total Service Plumbing - Licensed Southern California Plumber",
  description:
    "A-1 Total Service Plumbing has been serving Southern California since 2004. Licensed (CA #1135475), bonded, and insured. Specializing in residential, commercial, municipal, and trenchless plumbing services.",
};

const AboutPage = () => {
  return (
    <main>
      <About />
      <Team />
      <CallToAction />
    </main>
  );
};

export default AboutPage;
