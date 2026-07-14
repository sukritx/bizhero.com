import Breadcrumb from "@/components/Common/Breadcrumb";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications & Affiliations | A-1 Total Service Plumbing",
  description:
    "A-1 Total Service Plumbing is a licensed (CA #1135475), bonded, and insured plumbing company with industry certifications and affiliations.",
};

const PartnersPage = () => {
  return (
    <main>
      <section className="pb-20 pt-28 lg:pb-[120px] lg:pt-[150px]">
        <div className="container max-w-4xl">
          <h1 className="mb-10 text-4xl font-bold text-dark dark:text-white sm:text-5xl">
            Certifications &amp; Affiliations
          </h1>
          <div className="space-y-8">
            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <h2 className="mb-3 text-xl font-bold text-dark dark:text-white">
                California State License #1135475
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                A-1 Total Service Plumbing holds an active California Contractor&apos;s License, ensuring we meet all state requirements for plumbing work. Our license is current and in good standing.
              </p>
            </div>
            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <h2 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Licensed, Bonded &amp; Insured
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                We carry full general liability insurance and workers&apos; compensation insurance, protecting both our team and our customers during all service operations. Our bonding provides additional financial protection for our clients.
              </p>
            </div>
            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <h2 className="mb-3 text-xl font-bold text-dark dark:text-white">
                ProvenExpert Certified — 4.7/5 Rating
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Independently verified customer satisfaction rating of 4.7/5 from over 150 reviews on ProvenExpert.
              </p>
            </div>
            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <h2 className="mb-3 text-xl font-bold text-dark dark:text-white">
                ServiceAtlas — 4.9/5 Rating (1,400+ Reviews)
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Recognized as a top-rated plumber on ServiceAtlas with a 4.9/5 rating from over 1,400 verified customer reviews.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
};

export default PartnersPage;
