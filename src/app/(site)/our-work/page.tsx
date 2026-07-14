import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | A-1 Total Service Plumbing - Los Angeles & Orange County",
  description:
    "A-1 Total Service Plumbing serves Los Angeles County, Orange County, South Bay, East LA, Anaheim, La Habra, and beyond. Nationwide trenchless pipe relining support available.",
};

const projects = [
  {
    title: "Trenchless Sewer Relining",
    category: "Residential",
    description: "Rehabilitated 150ft of 6\" clay sewer line in a Los Angeles residential neighborhood without excavation, saving the homeowner's mature landscaping and driveway.",
    image: "/images/hero/hero-image.jpg",
  },
  {
    title: "Commercial Hydro Jetting",
    category: "Commercial",
    description: "Complete hydro jetting of a restaurant's grease trap and drain lines in Orange County, restoring full flow and passing health inspection.",
    image: "/images/hero/hero-image.jpg",
  },
  {
    title: "Municipal Sewer Repair",
    category: "Municipal",
    description: "CIPP lining of 500ft of 24\" municipal sewer main under a busy street, completed with zero traffic disruption using trenchless technology.",
    image: "/images/hero/hero-image.jpg",
  },
  {
    title: "Whole-Home Repiping",
    category: "Residential",
    description: "Complete repiping of a 1960s home in Anaheim, replacing galvanized steel with copper and PEX. Restored water pressure and eliminated discolored water.",
    image: "/images/hero/hero-image.jpg",
  },
  {
    title: "Emergency Burst Pipe Repair",
    category: "Emergency",
    description: "2 AM emergency call for a burst pipe in Commerce. Our team arrived within 45 minutes, stopped the flooding, and completed the repair the same night.",
    image: "/images/hero/hero-image.jpg",
  },
  {
    title: "Water Heater Replacement",
    category: "Residential",
    description: "Upgraded an old 40-gallon tank water heater to an energy-efficient tankless system for a family in La Habra, reducing their energy bills by 30%.",
    image: "/images/hero/hero-image.jpg",
  },
];

const OurWork = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Our Recent Projects
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Real plumbing projects completed by A-1 Total Service Plumbing across Los Angeles and Orange County. See the quality of our work firsthand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {projects.map((project, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mb-10" data-wow-delay=".15s">
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={`A-1 Total Service Plumbing - ${project.title}`}
                      width={370}
                      height={240}
                      className="w-full transition duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <span className="mb-2 inline-block rounded bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.category}
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-dark dark:text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-base font-medium text-body-color dark:text-dark-6">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default OurWork;
