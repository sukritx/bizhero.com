export interface ServiceCategory {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  suitableFor: string[];
  image: string;
}

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return services.find((s) => s.slug === slug);
}

export const services: ServiceCategory[] = [
  {
    slug: "oil-change",
    title: "Oil Change Service",
    tagline: "Professional oil change for fleet trucks, commercial vehicles, and industrial machinery.",
    description: "BizHero provides professional oil change services for fleet trucks, commercial vehicles, and industrial machinery. Our trained technicians use high-quality lubricants from Valvoline and PETRONAS to ensure your equipment runs smoothly and efficiently. Regular oil changes reduce engine wear, improve fuel efficiency, and extend the service life of your machinery.",
    benefits: ["Reduced engine wear", "Improved fuel efficiency", "Extended equipment life", "Professional service by trained technicians", "High-quality branded lubricants"],
    suitableFor: ["Fleet trucks", "Commercial vehicles", "Industrial machinery", "Passenger cars", "Diesel vehicles"],
    image: "/images/services/oil-change.jpg"
  },
  {
    slug: "sump-tank-cleaning",
    title: "Sump Tank Cleaning",
    tagline: "Industrial cleaning service for hydraulic tanks, oil storage tanks, and lubrication systems.",
    description: "Our sump tank cleaning service removes sludge, contaminants, and degraded oil residues from hydraulic tanks, oil storage tanks, and industrial lubrication systems. This essential maintenance service improves lubricant life, reduces equipment wear, and ensures your systems operate at peak efficiency.",
    benefits: ["Removes sludge and contaminants", "Improves lubricant life", "Reduces equipment wear", "Prevents system contamination", "Increases operational efficiency"],
    suitableFor: ["Hydraulic tanks", "Oil storage tanks", "Industrial lubrication systems"],
    image: "/images/services/sump-tank.jpg"
  },
  {
    slug: "used-oil-analysis",
    title: "Used Oil Analysis",
    tagline: "Predictive maintenance through comprehensive used oil testing and analysis.",
    description: "Used oil analysis is one of the most valuable services we offer for industrial customers. Our analysis evaluates used lubricants to assess metal wear particles, contamination levels, water content, fuel dilution, oxidation, and overall oil condition. This data enables predictive maintenance, early fault detection, lower maintenance costs, and reduced unplanned downtime.",
    benefits: ["Predictive maintenance", "Early fault detection", "Lower maintenance cost", "Extended equipment life", "Reduced downtime", "Data-driven maintenance decisions"],
    suitableFor: ["Industrial machinery", "Manufacturing plants", "Construction equipment", "Fleet vehicles", "Agricultural equipment"],
    image: "/images/services/oil-analysis.jpg"
  }
];
