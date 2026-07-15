export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
  applications: string[];
  icon: string;
  brands: { name: string; items: string[] }[];
}

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((p) => p.slug === slug);
}

export const productCategories: ProductCategory[] = [
  {
    slug: "engine-oil",
    title: "Engine Oil",
    description: "High-performance engine oils for passenger cars, diesel engines, heavy-duty trucks, and NGV vehicles. Formulated to protect against wear, deposits, and thermal breakdown across all operating conditions.",
    applications: ["Passenger cars", "Diesel pickup", "Trucks", "Commercial fleets", "NGV vehicles", "Heavy-duty diesel"],
    icon: "engine",
    brands: [
      { name: "PETRONAS", items: ["Urania 3000 LS 15W-40", "Urania 3000X 15W-40", "Urania 3000 15W-40", "Urania 1000E 15W-40", "Urania 1000EHM 20W-50", "Urania 3000 NGV 10W-40"] },
      { name: "Valvoline", items: ["Power Max Series 7", "Power Max Series 6", "Power Max Series 5 Plus", "Power Max Series 3 Plus", "Power Commonrail 10W-30", "All Fleet HD 15W-40", "GEO Ultra (NGV / CNG)"] }
    ]
  },
  {
    slug: "hydraulic-oil",
    title: "Hydraulic Oil",
    description: "Premium hydraulic oils designed for industrial and mobile hydraulic systems. Provides excellent wear protection, thermal stability, and water separation for hydraulic presses, excavators, injection molding machines, and factory machinery.",
    applications: ["Hydraulic press", "Excavators", "Injection molding", "Hydraulic pumps", "Factory machinery"],
    icon: "hydraulic",
    brands: [
      { name: "PETRONAS", items: ["Hydraulic AW", "Hydraulic EP", "Hydraulic Series", "Hydraulic High VI", "Hydraulic High VI Zinc Free"] },
      { name: "Valvoline", items: ["Ultramax HLP", "HVLP Hydraulic Oil", "HLP Conventional Hydraulic Oil"] }
    ]
  },
  {
    slug: "gear-oil",
    title: "Gear Oil",
    description: "Heavy-duty gear oils for industrial gearboxes, differentials, and heavy machinery. Engineered to withstand extreme pressure, reduce friction, and extend gear life in demanding applications.",
    applications: ["Industrial gearbox", "Differential", "Heavy machinery"],
    icon: "gear",
    brands: [
      { name: "PETRONAS", items: ["GL4 Multigrade", "GL5 Multigrade", "GL5 Monograde", "Gear MEP"] },
      { name: "Valvoline", items: ["Drivetrain Transmission Oil", "GL5 Multigrade", "Industrial Gear Oil"] }
    ]
  },
  {
    slug: "transmission-fluid",
    title: "Transmission Fluid",
    description: "Specialized transmission fluids for automatic and manual transmissions. Formulated to deliver smooth shifting, reduce wear, and maintain performance across a wide temperature range.",
    applications: ["Automatic transmission", "Manual transmission"],
    icon: "transmission",
    brands: [
      { name: "Valvoline", items: ["Drivetrain Transmission Oil", "GL5 Multigrade", "ATF Dexron III / Mercon"] }
    ]
  },
  {
    slug: "brake-fluid",
    title: "Brake Fluid",
    description: "High-quality DOT3 and DOT4 brake fluids for reliable braking performance. Meets or exceeds industry specifications for boiling point and corrosion protection.",
    applications: ["Brake systems"],
    icon: "brake",
    brands: [
      { name: "PETRONAS", items: ["Tutela DOT3"] },
      { name: "Valvoline", items: ["DOT3", "DOT4"] }
    ]
  },
  {
    slug: "coolant",
    title: "Coolant",
    description: "Engine and industrial coolants that provide superior heat transfer, corrosion protection, and freeze protection. Suitable for a wide range of engines and industrial cooling systems.",
    applications: ["Engine cooling", "Industrial cooling", "Radiator protection"],
    icon: "coolant",
    brands: [
      { name: "PETRONAS", items: ["Tutela Coolant"] },
      { name: "Valvoline", items: ["Engine Coolant"] }
    ]
  },
  {
    slug: "grease",
    title: "Grease",
    description: "Multipurpose and specialty greases for bearings, construction equipment, and industrial machinery. Provides excellent adhesion, water resistance, and extreme pressure protection.",
    applications: ["Bearings", "Construction equipment", "Industrial machinery", "Heavy equipment"],
    icon: "grease",
    brands: [
      { name: "PETRONAS", items: ["Grease LiX MEP", "Grease Li PT"] },
      { name: "Valvoline", items: ["Supreme Grease EP2", "Extreme EP2 Grease", "Amber Grease EP3"] }
    ]
  },
  {
    slug: "compressor-oil",
    title: "Compressor Oil",
    description: "High-performance compressor oils for air compressors and industrial compressors. Minimizes deposit formation, reduces maintenance costs, and extends equipment service life.",
    applications: ["Air compressors", "Industrial compressors"],
    icon: "compressor",
    brands: [
      { name: "PETRONAS", items: ["Compressor Oil"] }
    ]
  },
  {
    slug: "heat-transfer-oil",
    title: "Heat Transfer Oil",
    description: "Thermal oils for industrial heating systems, boilers, and heat exchangers. Provides efficient heat transfer and excellent thermal stability at elevated operating temperatures.",
    applications: ["Industrial heating systems", "Boilers", "Heat exchangers"],
    icon: "heat",
    brands: [
      { name: "PETRONAS", items: ["Heat Transfer Oil"] }
    ]
  },
  {
    slug: "metal-working-fluid",
    title: "Metal Working Fluid",
    description: "Straight oils and metal working fluids for CNC machining, grinding, cutting, milling, and drilling operations. Designed to improve tool life, surface finish, and machining efficiency.",
    applications: ["CNC", "Grinding", "Cutting", "Milling", "Drilling", "Metal processing"],
    icon: "metal",
    brands: [
      { name: "Monroe", items: ["Straight Oils for Metalworking"] }
    ]
  }
];
