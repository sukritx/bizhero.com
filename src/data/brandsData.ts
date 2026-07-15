export interface Brand {
  slug: string;
  name: string;
  description: string;
  logo: string;
  products: {
    name: string;
    items: string[];
  }[];
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export const brands: Brand[] = [
  {
    slug: "valvoline",
    name: "Valvoline",
    description: "One of the oldest and most trusted lubricant brands in the world. BizHero is an authorized distributor of Valvoline automotive and industrial lubricants, offering a complete range of engine oils, transmission fluids, gear oils, greases, brake fluids, coolants, hydraulic oils, and industrial gear oils.",
    logo: "/images/brands/valvoline.svg",
    products: [
      {
        name: "Engine Oil",
        items: ["Power Max Series 7", "Power Max Series 6", "Power Max Series 5 Plus", "Power Max Series 3 Plus", "Power Commonrail 10W-30", "All Fleet HD 15W-40", "GEO Ultra (NGV / CNG)"]
      },
      {
        name: "Transmission & Gear Oil",
        items: ["Drivetrain Transmission Oil", "GL5 Multigrade", "ATF Dexron III / Mercon"]
      },
      {
        name: "Grease",
        items: ["Supreme Grease EP2", "Extreme EP2 Grease", "Amber Grease EP3"]
      },
      {
        name: "Brake Fluid",
        items: ["DOT3", "DOT4"]
      },
      {
        name: "Coolant",
        items: ["Engine Coolant"]
      },
      {
        name: "Hydraulic Oil",
        items: ["Ultramax HLP", "HVLP Hydraulic Oil", "HLP Conventional Hydraulic Oil"]
      },
      {
        name: "Industrial Gear Oil",
        items: ["Industrial Gear Oil"]
      }
    ]
  },
  {
    slug: "petronas",
    name: "PETRONAS",
    description: "PETRONAS provides world-class industrial and commercial lubricant solutions. BizHero distributes PETRONAS products for heavy-duty diesel engines, industrial hydraulic systems, compressors, and specialized industrial applications.",
    logo: "/images/brands/petronas.svg",
    products: [
      {
        name: "Engine Oil",
        items: ["Urania 3000 LS 15W-40", "Urania 3000X 15W-40", "Urania 3000 15W-40", "Urania 1000E 15W-40", "Urania 1000EHM 20W-50", "Urania 3000 NGV 10W-40"]
      },
      {
        name: "Gear Oil",
        items: ["GL4 Multigrade", "GL5 Multigrade", "GL5 Monograde"]
      },
      {
        name: "Grease",
        items: ["Grease LiX MEP", "Grease Li PT"]
      },
      {
        name: "Brake Fluid",
        items: ["Tutela DOT3"]
      },
      {
        name: "Coolant",
        items: ["Tutela Coolant"]
      },
      {
        name: "Hydraulic Oil",
        items: ["Hydraulic AW", "Hydraulic EP", "Hydraulic Series", "Hydraulic High VI", "Hydraulic High VI Zinc Free"]
      },
      {
        name: "Industrial Gear Oil",
        items: ["Gear MEP"]
      },
      {
        name: "Compressor Oil",
        items: ["Compressor Oil"]
      },
      {
        name: "Heat Transfer Oil",
        items: ["Heat Transfer Oil"]
      }
    ]
  },
  {
    slug: "monroe",
    name: "Monroe",
    description: "Monroe specializes in metal working fluids for industrial manufacturing applications. BizHero distributes Monroe products to support CNC machining, grinding, cutting, milling, drilling, and metal processing operations.",
    logo: "/images/brands/monroe.png",
    products: [
      {
        name: "Metal Working Fluid",
        items: ["Straight Oils for Metalworking"]
      }
    ]
  }
];
