export interface Industry {
  slug: string;
  title: string;
  description: string;
  image: string;
  products: string[];
  applications: string[];
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Comprehensive lubrication solutions for manufacturing plants, CNC machining, plastic injection, food processing, steel production, and packaging operations. Our products keep your production lines running efficiently with minimal downtime.",
    image: "/images/industries/manufacturing.jpg",
    products: ["Hydraulic Oil", "Gear Oil", "Compressor Oil", "Metal Working Fluid"],
    applications: ["CNC machining", "Plastic injection molding", "Food processing", "Steel manufacturing", "Packaging lines"]
  },
  {
    slug: "transportation",
    title: "Transportation",
    description: "Complete range of lubricants for truck companies, logistics providers, and commercial transportation fleets. Our engine oils, gear oils, and brake fluids keep your fleet on the road and operating at peak efficiency.",
    image: "/images/industries/transportation.jpg",
    products: ["Engine Oil", "Gear Oil", "Brake Fluid"],
    applications: ["Truck fleets", "Commercial vehicles", "Logistics operations", "Passenger cars", "Diesel vehicles"]
  },
  {
    slug: "construction",
    title: "Construction",
    description: "Heavy-duty lubricants engineered for construction equipment including excavators, bulldozers, cranes, and other heavy machinery. Keep your construction equipment performing reliably in demanding conditions.",
    image: "/images/industries/construction.jpg",
    products: ["Hydraulic Oil", "Grease", "Gear Oil"],
    applications: ["Excavators", "Bulldozers", "Cranes", "Construction equipment"]
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    description: "Reliable lubricants for agricultural machinery including tractors, harvesters, and farming equipment. Our products protect against the harsh operating conditions common in agricultural applications.",
    image: "/images/industries/agriculture.jpg",
    products: ["Engine Oil (Diesel)", "Hydraulic Oil", "Grease"],
    applications: ["Tractors", "Harvesters", "Agricultural equipment", "Farm machinery"]
  },
  {
    slug: "heavy-equipment",
    title: "Heavy Equipment",
    description: "High-performance lubricants for heavy equipment used in mining, earthmoving, and large-scale construction. Formulated to handle extreme loads, temperatures, and contamination.",
    image: "/images/industries/heavy-equipment.jpg",
    products: ["Hydraulic Oil", "Grease", "Industrial Gear Oil"],
    applications: ["Excavators", "Bulldozers", "Cranes", "Mining equipment", "Earthmoving machinery"]
  },
  {
    slug: "logistics",
    title: "Logistics",
    description: "Fleet lubrication solutions for logistics companies managing delivery trucks, cargo vehicles, and distribution fleets. Maximize vehicle uptime and reduce maintenance costs with our comprehensive range of fleet lubricants.",
    image: "/images/industries/logistics.jpg",
    products: ["Fleet Engine Oil", "Transmission Oil"],
    applications: ["Delivery fleets", "Distribution centers", "Cargo vehicles", "Transportation hubs"]
  }
];
