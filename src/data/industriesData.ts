export interface Industry {
  slug: string;
  title: { th: string; en: string };
  description: { th: string; en: string };
  image: string;
  products: { th: string; en: string }[];
  applications: { th: string; en: string }[];
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    title: { th: "การผลิต", en: "Manufacturing" },
    description: {
      th: "โซลูชั่นการหล่อลื่นครบวงจรสำหรับโรงงานผลิต กลึง CNC ฉีดพลาสติก แปรรูปอาหาร ผลิตเหล็ก และบรรจุภัณฑ์ ผลิตภัณฑ์ของเราช่วยให้สายการผลิตของคุณทำงานได้อย่างมีประสิทธิภาพโดยมีเวลาหยุดทำงานน้อยที่สุด",
      en: "Comprehensive lubrication solutions for manufacturing plants, CNC machining, plastic injection, food processing, steel production, and packaging operations. Our products keep your production lines running efficiently with minimal downtime.",
    },
    image: "/images/industries/manufacturing.jpeg",
    products: [
      { th: "น้ำมันไฮดรอลิก", en: "Hydraulic Oil" },
      { th: "น้ำมันเกียร์", en: "Gear Oil" },
      { th: "น้ำมันคอมเพรสเซอร์", en: "Compressor Oil" },
      { th: "น้ำมันงานโลหะ", en: "Metal Working Fluid" },
    ],
    applications: [
      { th: "กลึง CNC", en: "CNC machining" },
      { th: "ฉีดพลาสติก", en: "Plastic injection molding" },
      { th: "แปรรูปอาหาร", en: "Food processing" },
      { th: "ผลิตเหล็ก", en: "Steel manufacturing" },
      { th: "สายการบรรจุภัณฑ์", en: "Packaging lines" },
    ],
  },
  {
    slug: "transportation",
    title: { th: "การขนส่ง", en: "Transportation" },
    description: {
      th: "น้ำมันหล่อลื่นครบวงจรสำหรับบริษัทรถบรรทุก ผู้ให้บริการโลจิสติกส์ และฟลีทขนส่งเชิงพาณิชย์ น้ำมันเครื่อง น้ำมันเกียร์ และน้ำมันเบรกของเราช่วยให้ฟลีทของคุณอยู่บนท้องถนนและทำงานเต็มประสิทธิภาพ",
      en: "Complete range of lubricants for truck companies, logistics providers, and commercial transportation fleets. Our engine oils, gear oils, and brake fluids keep your fleet on the road and operating at peak efficiency.",
    },
    image: "/images/industries/transportation.jpeg",
    products: [
      { th: "น้ำมันเครื่อง", en: "Engine Oil" },
      { th: "น้ำมันเกียร์", en: "Gear Oil" },
      { th: "น้ำมันเบรก", en: "Brake Fluid" },
    ],
    applications: [
      { th: "ฟลีทรถบรรทุก", en: "Truck fleets" },
      { th: "รถเพื่อการพาณิชย์", en: "Commercial vehicles" },
      { th: "โลจิสติกส์", en: "Logistics operations" },
      { th: "รถยนต์นั่ง", en: "Passenger cars" },
      { th: "รถดีเซล", en: "Diesel vehicles" },
    ],
  },
  {
    slug: "construction",
    title: { th: "การก่อสร้าง", en: "Construction" },
    description: {
      th: "น้ำมันหล่อลื่นสำหรับงานหนักออกแบบมาสำหรับอุปกรณ์ก่อสร้าง รวมถึงรถขุด รถดันดิน ปั้นจั่น และเครื่องจักรกลหนักอื่นๆ ช่วยให้อุปกรณ์ก่อสร้างของคุณทำงานได้อย่างน่าเชื่อถือในสภาวะที่ท้าทาย",
      en: "Heavy-duty lubricants engineered for construction equipment including excavators, bulldozers, cranes, and other heavy machinery. Keep your construction equipment performing reliably in demanding conditions.",
    },
    image: "/images/industries/construction.jpeg",
    products: [
      { th: "น้ำมันไฮดรอลิก", en: "Hydraulic Oil" },
      { th: "จาระบี", en: "Grease" },
      { th: "น้ำมันเกียร์", en: "Gear Oil" },
    ],
    applications: [
      { th: "รถขุด", en: "Excavators" },
      { th: "รถดันดิน", en: "Bulldozers" },
      { th: "ปั้นจั่น", en: "Cranes" },
      { th: "อุปกรณ์ก่อสร้าง", en: "Construction equipment" },
    ],
  },
  {
    slug: "agriculture",
    title: { th: "การเกษตร", en: "Agriculture" },
    description: {
      th: "น้ำมันหล่อลื่นที่เชื่อถือได้สำหรับเครื่องจักรกลการเกษตร รวมถึงรถแทรกเตอร์ รถเกี่ยว และอุปกรณ์ฟาร์ม ผลิตภัณฑ์ของเราป้องกันสภาวะการทำงานที่รุนแรงซึ่งพบได้ทั่วไปในงานเกษตร",
      en: "Reliable lubricants for agricultural machinery including tractors, harvesters, and farming equipment. Our products protect against the harsh operating conditions common in agricultural applications.",
    },
    image: "/images/industries/agriculture.jpeg",
    products: [
      { th: "น้ำมันเครื่อง (ดีเซล)", en: "Engine Oil (Diesel)" },
      { th: "น้ำมันไฮดรอลิก", en: "Hydraulic Oil" },
      { th: "จาระบี", en: "Grease" },
    ],
    applications: [
      { th: "รถแทรกเตอร์", en: "Tractors" },
      { th: "รถเกี่ยว", en: "Harvesters" },
      { th: "อุปกรณ์การเกษตร", en: "Agricultural equipment" },
      { th: "เครื่องจักรฟาร์ม", en: "Farm machinery" },
    ],
  },
  {
    slug: "heavy-equipment",
    title: { th: "อุปกรณ์หนัก", en: "Heavy Equipment" },
    description: {
      th: "น้ำมันหล่อลื่นสมรรถนะสูงสำหรับอุปกรณ์หนักที่ใช้ในเหมืองแร่ งานดิน และการก่อสร้างขนาดใหญ่ ออกแบบมาเพื่อรับมือกับโหลดสูง อุณหภูมิสูง และการปนเปื้อน",
      en: "High-performance lubricants for heavy equipment used in mining, earthmoving, and large-scale construction. Formulated to handle extreme loads, temperatures, and contamination.",
    },
    image: "/images/industries/heavy-industry.jpeg",
    products: [
      { th: "น้ำมันไฮดรอลิก", en: "Hydraulic Oil" },
      { th: "จาระบี", en: "Grease" },
      { th: "น้ำมันเกียร์อุตสาหกรรม", en: "Industrial Gear Oil" },
    ],
    applications: [
      { th: "รถขุด", en: "Excavators" },
      { th: "รถดันดิน", en: "Bulldozers" },
      { th: "ปั้นจั่น", en: "Cranes" },
      { th: "อุปกรณ์เหมืองแร่", en: "Mining equipment" },
      { th: "เครื่องจักรงานดิน", en: "Earthmoving machinery" },
    ],
  },
  {
    slug: "logistics",
    title: { th: "โลจิสติกส์", en: "Logistics" },
    description: {
      th: "โซลูชั่นการหล่อลื่นฟลีทสำหรับบริษัทโลจิสติกส์ที่จัดการรถส่งของ รถขนส่งสินค้า และฟลีทจัดจำหน่าย เพิ่มเวลาทำงานของยานพาหนะสูงสุดและลดต้นทุนการบำรุงรักษาด้วยน้ำมันหล่อลื่นฟลีทครบวงจรของเรา",
      en: "Fleet lubrication solutions for logistics companies managing delivery trucks, cargo vehicles, and distribution fleets. Maximize vehicle uptime and reduce maintenance costs with our comprehensive range of fleet lubricants.",
    },
    image: "/images/industries/logistics.jpeg",
    products: [
      { th: "น้ำมันเครื่องฟลีท", en: "Fleet Engine Oil" },
      { th: "น้ำมันเกียร์", en: "Transmission Oil" },
    ],
    applications: [
      { th: "ฟลีทส่งของ", en: "Delivery fleets" },
      { th: "ศูนย์กระจายสินค้า", en: "Distribution centers" },
      { th: "รถขนส่งสินค้า", en: "Cargo vehicles" },
      { th: "ศูนย์กลางการขนส่ง", en: "Transportation hubs" },
    ],
  },
];
