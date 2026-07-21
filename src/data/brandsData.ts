export interface Brand {
  slug: string;
  name: string;
  description: { th: string; en: string };
  logo: string;
  products: {
    name: { th: string; en: string };
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
    description: {
      th: "หนึ่งในแบรนด์น้ำมันหล่อลื่นที่เก่าแก่และน่าเชื่อถือที่สุดในโลก บิซฮีโร่เป็นตัวแทนจำหน่ายน้ำมันหล่อลื่น Valvoline สำหรับยานยนต์และอุตสาหกรรมที่ได้รับอนุญาต โดยมีผลิตภัณฑ์ครบวงจรทั้งน้ำมันเครื่อง น้ำมันเกียร์ น้ำมันเกียร์อัตโนมัติ จาระบี น้ำมันเบรก น้ำยาหล่อเย็น น้ำมันไฮดรอลิก และน้ำมันเกียร์อุตสาหกรรม",
      en: "One of the oldest and most trusted lubricant brands in the world. BizHero is an authorized distributor of Valvoline automotive and industrial lubricants, offering a complete range of engine oils, transmission fluids, gear oils, greases, brake fluids, coolants, hydraulic oils, and industrial gear oils.",
    },
    logo: "/images/brands/valvoline.svg",
    products: [
      { name: { th: "น้ำมันเครื่อง", en: "Engine Oil" }, items: ["Power Max Series 7", "Power Max Series 6", "Power Max Series 5 Plus", "Power Max Series 3 Plus", "Power Commonrail 10W-30", "All Fleet HD 15W-40", "GEO Ultra (NGV / CNG)"] },
      { name: { th: "น้ำมันเกียร์และเกียร์อัตโนมัติ", en: "Transmission & Gear Oil" }, items: ["Drivetrain Transmission Oil", "GL5 Multigrade", "ATF Dexron III / Mercon"] },
      { name: { th: "จาระบี", en: "Grease" }, items: ["Supreme Grease EP2", "Extreme EP2 Grease", "Amber Grease EP3"] },
      { name: { th: "น้ำมันเบรก", en: "Brake Fluid" }, items: ["DOT3", "DOT4"] },
      { name: { th: "น้ำยาหล่อเย็น", en: "Coolant" }, items: ["Engine Coolant"] },
      { name: { th: "น้ำมันไฮดรอลิก", en: "Hydraulic Oil" }, items: ["Ultramax HLP", "HVLP Hydraulic Oil", "HLP Conventional Hydraulic Oil"] },
      { name: { th: "น้ำมันเกียร์อุตสาหกรรม", en: "Industrial Gear Oil" }, items: ["Industrial Gear Oil"] },
    ],
  },
  {
    slug: "petronas",
    name: "PETRONAS",
    description: {
      th: "PETRONAS นำเสนอโซลูชั่นน้ำมันหล่อลื่นระดับโลกสำหรับอุตสาหกรรมและเชิงพาณิชย์ บิซฮีโร่จัดจำหน่ายผลิตภัณฑ์ PETRONAS สำหรับเครื่องยนต์ดีเซลงานหนัก ระบบไฮดรอลิกอุตสาหกรรม คอมเพรสเซอร์ และงานอุตสาหกรรมเฉพาะทาง",
      en: "PETRONAS provides world-class industrial and commercial lubricant solutions. BizHero distributes PETRONAS products for heavy-duty diesel engines, industrial hydraulic systems, compressors, and specialized industrial applications.",
    },
    logo: "/images/brands/petronas.svg",
    products: [
      { name: { th: "น้ำมันเครื่อง", en: "Engine Oil" }, items: ["Urania 3000 LS 15W-40", "Urania 3000X 15W-40", "Urania 3000 15W-40", "Urania 1000E 15W-40", "Urania 1000EHM 20W-50", "Urania 3000 NGV 10W-40"] },
      { name: { th: "น้ำมันเกียร์", en: "Gear Oil" }, items: ["GL4 Multigrade", "GL5 Multigrade", "GL5 Monograde"] },
      { name: { th: "จาระบี", en: "Grease" }, items: ["Grease LiX MEP", "Grease Li PT"] },
      { name: { th: "น้ำมันเบรก", en: "Brake Fluid" }, items: ["Tutela DOT3"] },
      { name: { th: "น้ำยาหล่อเย็น", en: "Coolant" }, items: ["Tutela Coolant"] },
      { name: { th: "น้ำมันไฮดรอลิก", en: "Hydraulic Oil" }, items: ["Hydraulic AW", "Hydraulic EP", "Hydraulic Series", "Hydraulic High VI", "Hydraulic High VI Zinc Free"] },
      { name: { th: "น้ำมันเกียร์อุตสาหกรรม", en: "Industrial Gear Oil" }, items: ["Gear MEP"] },
      { name: { th: "น้ำมันคอมเพรสเซอร์", en: "Compressor Oil" }, items: ["Compressor Oil"] },
      { name: { th: "น้ำมันถ่ายเทความร้อน", en: "Heat Transfer Oil" }, items: ["Heat Transfer Oil"] },
    ],
  },
  {
    slug: "cresco-asia",
    name: "Cresco Asia",
    description: {
      th: "Cresco Asia เชี่ยวชาญด้านน้ำมันงานโลหะสำหรับการผลิตในอุตสาหกรรม บิซฮีโร่จัดจำหน่ายผลิตภัณฑ์ Cresco Asia เพื่อรองรับงานกลึง CNC เจียร ตัด กัด เจาะ และกระบวนการโลหะ",
      en: "Cresco Asia specializes in metal working fluids for industrial manufacturing applications. BizHero distributes Cresco Asia products to support CNC machining, grinding, cutting, milling, drilling, and metal processing operations.",
    },
    logo: "/images/brands/cresco-asia.jpg",
    products: [
      { name: { th: "น้ำมันงานโลหะ", en: "Metal Working Fluid" }, items: ["Straight Oils for Metalworking"] },
    ],
  },
];
