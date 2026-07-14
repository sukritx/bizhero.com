import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Plumbing Services | A-1 Total Service Plumbing - Los Angeles & Orange County",
  description:
    "A-1 Total Service Plumbing offers drain cleaning, hydro jetting, leak detection, sewer line repair, trenchless pipe relining, repiping, water heater installation, gas line services, and 24/7 emergency plumbing in Los Angeles and Orange County.",
  keywords:
    "drain cleaning Los Angeles, hydro jetting Orange County, leak detection, sewer line repair, trenchless pipe relining, water heater installation, emergency plumber, gas line service",
};

const services = [
  {
    id: "drain-cleaning",
    title: "Drain Cleaning",
    description:
      "Professional drain clearing and cleaning for kitchen sinks, bathroom drains, floor drains, and main sewer lines. We use the latest tools and techniques to remove clogs caused by grease, hair, soap buildup, and debris, restoring full flow to your plumbing system.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    id: "hydro-jetting",
    title: "Hydro Jetting",
    description:
      "High-pressure water jetting (up to 4,000 PSI) for the most stubborn blockages including tree roots, hardened grease, mineral deposits, and scale buildup. Hydro jetting thoroughly cleans pipe walls, restoring them to near-original capacity. Safe for most pipe types and environmentally friendly.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6M12 18v4M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M18 12h4M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
      </svg>
    ),
  },
  {
    id: "leak-detection",
    title: "Leak Detection",
    description:
      "Advanced electronic leak detection to pinpoint the exact location of hidden leaks without unnecessary destruction to your property. Our state-of-the-art equipment detects leaks behind walls, under slabs, and in underground pipes, saving you time and money on repairs.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "sewer-line-repair",
    title: "Sewer Line Repair",
    description:
      "Complete sewer line repair and replacement services. Whether your sewer line has cracked, collapsed, or been invaded by tree roots, our team can diagnose and fix the problem efficiently. We offer both traditional excavation and trenchless repair options depending on your situation.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a4 4 0 0 0-8 0v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    id: "repiping",
    title: "Repiping",
    description:
      "Whole-home and commercial repiping services to replace old, corroded, or damaged pipes. We use high-quality copper and PEX piping materials. Whether you're dealing with low water pressure, discolored water, or frequent leaks, repiping can restore your plumbing system to peak performance.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: "water-heater",
    title: "Water Heater Installation & Repair",
    description:
      "Expert installation, repair, and maintenance for both traditional tank and modern tankless water heaters. We service all major brands and help you choose the most energy-efficient option for your home or business. Same-day service available for water heater emergencies.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
  },
  {
    id: "trenchless",
    title: "Trenchless Pipe Relining (CIPP)",
    description:
      "Our specialty! Cured-In-Place Pipe (CIPP) lining rehabilitates damaged underground pipes from 2\"–48\" diameter with minimal excavation. This no-dig technology saves your landscape, driveway, and property from disruptive digging. We insert a resin-saturated liner that cures to form a seamless new pipe within the old one. Available nationwide for industrial projects.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    id: "camera-inspection",
    title: "Sewer Camera Inspection",
    description:
      "High-definition video inspection of your sewer and drain lines. Our waterproof cameras navigate through pipes to identify cracks, blockages, root intrusion, bellied pipes, and other issues — all without any digging. You'll see exactly what we see on a monitor in real-time.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    id: "gas-line",
    title: "Gas Line Services",
    description:
      "Safe and professional gas line installation, repair, and leak detection services. Our licensed technicians handle gas line work for kitchens, fireplaces, outdoor grills, and more. We follow all safety codes and perform thorough pressure testing to ensure your gas lines are secure.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z" />
      </svg>
    ),
  },
  {
    id: "emergency",
    title: "24/7 Emergency Plumbing",
    description:
      "Plumbing emergencies don't follow a schedule, and neither do we. Our emergency plumbing team is available 24 hours a day, 7 days a week for burst pipes, sewer backups, gas leaks, overflowing toilets, and any other urgent plumbing issue. Fast response times across all of LA and Orange County.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: "municipal",
    title: "Municipal & Commercial Plumbing",
    description:
      "Comprehensive plumbing solutions for commercial properties and municipal infrastructure. From large-scale sewer rehabilitation to commercial grease trap maintenance, our team has the expertise and equipment to handle projects of any size. We understand the unique requirements of commercial and municipal plumbing systems.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
      </svg>
    ),
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Our Plumbing Services
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  From simple drain cleaning to complex trenchless pipe relining, A-1 Total Service Plumbing provides comprehensive plumbing solutions for residential, commercial, and municipal clients across Southern California.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {services.map((service, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3" id={service.id}>
                <div className="wow fadeInUp group mb-10 rounded-xl border border-stroke bg-white p-8 shadow-1 transition duration-300 hover:shadow-xl dark:border-dark-3 dark:bg-dark-2" data-wow-delay=".15s">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                    {service.icon}
                  </div>
                  <h2 className="mb-4 text-xl font-bold text-dark dark:text-white sm:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-body-color dark:text-dark-6">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-base font-bold text-primary hover:opacity-80"
                  >
                    Request Estimate
                    <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 12l4-4-4-4" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-1 py-20 dark:bg-dark-2 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="mb-6 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
              Not Sure What Service You Need?
            </h2>
            <p className="mb-8 text-lg text-body-color dark:text-dark-6">
              Our licensed technicians will diagnose the problem and recommend the best solution. Free estimates available for most services.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:3234102068"
                className="inline-flex items-center justify-center bg-primary px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
              >
                Call (323) 410-2068
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-stroke bg-white px-7 py-3 text-base font-bold text-dark transition duration-300 hover:border-primary hover:text-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:border-primary dark:hover:text-primary"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServicesPage;
