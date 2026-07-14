import { Price } from "@/types/price";

const pricingData: Price[] = [
  {
    id: "residential",
    unit_amount: 0,
    nickname: "Residential Services",
    offers: [
      "Drain Cleaning & Unclogging",
      "Hydro Jetting",
      "Leak Detection & Repair",
      "Water Heater Installation & Repair",
      "Repiping (Whole Home)",
      "Sewer Camera Inspection",
      "Gas Line Services",
      "Preventative Maintenance",
    ],
  },
  {
    id: "commercial",
    unit_amount: 0,
    nickname: "Commercial & Municipal",
    offers: [
      "Commercial Drain & Sewer",
      "Trenchless Pipe Relining (2\"–48\")",
      "CIPP Cured-In-Place Pipe Lining",
      "Municipal Infrastructure Plumbing",
      "Sewer Line Repair & Replacement",
      "Backflow Prevention",
      "Grease Trap Services",
      "Nationwide Trenchless Support",
    ],
  },
];
export default pricingData;
