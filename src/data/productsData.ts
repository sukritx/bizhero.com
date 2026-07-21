export interface ProductCategory {
  slug: string;
  title: { th: string; en: string };
  description: { th: string; en: string };
  applications: { th: string; en: string }[];
  icon: string;
  brands: { name: string; items: string[] }[];
}

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((p) => p.slug === slug);
}

export const productCategories: ProductCategory[] = [
  {
    slug: "engine-oil",
    title: { th: "น้ำมันเครื่อง", en: "Engine Oil" },
    description: {
      th: "น้ำมันเครื่องสมรรถนะสูงสำหรับรถยนต์นั่ง เครื่องยนต์ดีเซล รถบรรทุกหนัก และรถ NGV ออกแบบมาเพื่อป้องกันการสึกหรอ คราบเขม่า และการเสื่อมสภาพจากความร้อนในทุกสภาวะการทำงาน",
      en: "High-performance engine oils for passenger cars, diesel engines, heavy-duty trucks, and NGV vehicles. Formulated to protect against wear, deposits, and thermal breakdown across all operating conditions.",
    },
    applications: [
      { th: "รถยนต์นั่ง", en: "Passenger cars" },
      { th: "รถกระบะดีเซล", en: "Diesel pickup" },
      { th: "รถบรรทุก", en: "Trucks" },
      { th: "ฟลีทเชิงพาณิชย์", en: "Commercial fleets" },
      { th: "รถ NGV", en: "NGV vehicles" },
      { th: "ดีเซลงานหนัก", en: "Heavy-duty diesel" },
    ],
    icon: "engine",
    brands: [
      { name: "PETRONAS", items: ["Urania 3000 LS 15W-40", "Urania 3000X 15W-40", "Urania 3000 15W-40", "Urania 1000E 15W-40", "Urania 1000EHM 20W-50", "Urania 3000 NGV 10W-40"] },
      { name: "Valvoline", items: ["Power Max Series 7", "Power Max Series 6", "Power Max Series 5 Plus", "Power Max Series 3 Plus", "Power Commonrail 10W-30", "All Fleet HD 15W-40", "GEO Ultra (NGV / CNG)"] },
    ],
  },
  {
    slug: "hydraulic-oil",
    title: { th: "น้ำมันไฮดรอลิก", en: "Hydraulic Oil" },
    description: {
      th: "น้ำมันไฮดรอลิกคุณภาพสูงสำหรับระบบไฮดรอลิกในอุตสาหกรรมและเครื่องจักรเคลื่อนที่ ให้การป้องกันการสึกหรอดีเยี่ยม เสถียรภาพทางความร้อน และการแยกตัวของน้ำ สำหรับเครื่องอัดไฮดรอลิก รถขุด เครื่องฉีดพลาสติก และเครื่องจักรในโรงงาน",
      en: "Premium hydraulic oils designed for industrial and mobile hydraulic systems. Provides excellent wear protection, thermal stability, and water separation for hydraulic presses, excavators, injection molding machines, and factory machinery.",
    },
    applications: [
      { th: "เครื่องอัดไฮดรอลิก", en: "Hydraulic press" },
      { th: "รถขุด", en: "Excavators" },
      { th: "เครื่องฉีดพลาสติก", en: "Injection molding" },
      { th: "ปั๊มไฮดรอลิก", en: "Hydraulic pumps" },
      { th: "เครื่องจักรในโรงงาน", en: "Factory machinery" },
    ],
    icon: "hydraulic",
    brands: [
      { name: "PETRONAS", items: ["Hydraulic AW", "Hydraulic EP", "Hydraulic Series", "Hydraulic High VI", "Hydraulic High VI Zinc Free"] },
      { name: "Valvoline", items: ["Ultramax HLP", "HVLP Hydraulic Oil", "HLP Conventional Hydraulic Oil"] },
    ],
  },
  {
    slug: "gear-oil",
    title: { th: "น้ำมันเกียร์", en: "Gear Oil" },
    description: {
      th: "น้ำมันเกียร์สำหรับงานหนัก สำหรับเกียร์อุตสาหกรรม เฟืองท้าย และเครื่องจักรกลหนัก ออกแบบมาให้ทนทานต่อแรงดันสูง ลดแรงเสียดทาน และยืดอายุเกียร์ในงานที่ต้องการสมรรถนะสูง",
      en: "Heavy-duty gear oils for industrial gearboxes, differentials, and heavy machinery. Engineered to withstand extreme pressure, reduce friction, and extend gear life in demanding applications.",
    },
    applications: [
      { th: "เกียร์อุตสาหกรรม", en: "Industrial gearbox" },
      { th: "เฟืองท้าย", en: "Differential" },
      { th: "เครื่องจักรกลหนัก", en: "Heavy machinery" },
    ],
    icon: "gear",
    brands: [
      { name: "PETRONAS", items: ["GL4 Multigrade", "GL5 Multigrade", "GL5 Monograde", "Gear MEP"] },
      { name: "Valvoline", items: ["Drivetrain Transmission Oil", "GL5 Multigrade", "Industrial Gear Oil"] },
    ],
  },
  {
    slug: "transmission-fluid",
    title: { th: "น้ำมันเกียร์อัตโนมัติ", en: "Transmission Fluid" },
    description: {
      th: "น้ำมันเกียร์ชนิดพิเศษสำหรับเกียร์อัตโนมัติและเกียร์ธรรมดา ออกแบบมาเพื่อการเปลี่ยนเกียร์ที่นุ่มนวล ลดการสึกหรอ และรักษาประสิทธิภาพตลอดช่วงอุณหภูมิที่กว้าง",
      en: "Specialized transmission fluids for automatic and manual transmissions. Formulated to deliver smooth shifting, reduce wear, and maintain performance across a wide temperature range.",
    },
    applications: [
      { th: "เกียร์อัตโนมัติ", en: "Automatic transmission" },
      { th: "เกียร์ธรรมดา", en: "Manual transmission" },
    ],
    icon: "transmission",
    brands: [
      { name: "Valvoline", items: ["Drivetrain Transmission Oil", "GL5 Multigrade", "ATF Dexron III / Mercon"] },
    ],
  },
  {
    slug: "brake-fluid",
    title: { th: "น้ำมันเบรก", en: "Brake Fluid" },
    description: {
      th: "น้ำมันเบรก DOT3 และ DOT4 คุณภาพสูงเพื่อประสิทธิภาพการเบรกที่เชื่อถือได้ ตรงตามหรือเกินกว่าข้อกำหนดอุตสาหกรรมด้านจุดเดือดและการป้องกันการกัดกร่อน",
      en: "High-quality DOT3 and DOT4 brake fluids for reliable braking performance. Meets or exceeds industry specifications for boiling point and corrosion protection.",
    },
    applications: [
      { th: "ระบบเบรก", en: "Brake systems" },
    ],
    icon: "brake",
    brands: [
      { name: "PETRONAS", items: ["Tutela DOT3"] },
      { name: "Valvoline", items: ["DOT3", "DOT4"] },
    ],
  },
  {
    slug: "coolant",
    title: { th: "น้ำยาหล่อเย็น", en: "Coolant" },
    description: {
      th: "น้ำยาหล่อเย็นสำหรับเครื่องยนต์และอุตสาหกรรมที่ให้การถ่ายเทความร้อนดีเยี่ยม ป้องกันการกัดกร่อน และป้องกันการแข็งตัว เหมาะสำหรับเครื่องยนต์และระบบหล่อเย็นอุตสาหกรรมหลากหลายประเภท",
      en: "Engine and industrial coolants that provide superior heat transfer, corrosion protection, and freeze protection. Suitable for a wide range of engines and industrial cooling systems.",
    },
    applications: [
      { th: "ระบบหล่อเย็นเครื่องยนต์", en: "Engine cooling" },
      { th: "ระบบหล่อเย็นอุตสาหกรรม", en: "Industrial cooling" },
      { th: "ป้องกันหม้อน้ำ", en: "Radiator protection" },
    ],
    icon: "coolant",
    brands: [
      { name: "PETRONAS", items: ["Tutela Coolant"] },
      { name: "Valvoline", items: ["Engine Coolant"] },
    ],
  },
  {
    slug: "grease",
    title: { th: "จาระบี", en: "Grease" },
    description: {
      th: "จาระบีอเนกประสงค์และชนิดพิเศษสำหรับตลับลูกปืน อุปกรณ์ก่อสร้าง และเครื่องจักรอุตสาหกรรม ให้การยึดเกาะดีเยี่ยม ทนน้ำ และป้องกันแรงดันสูง",
      en: "Multipurpose and specialty greases for bearings, construction equipment, and industrial machinery. Provides excellent adhesion, water resistance, and extreme pressure protection.",
    },
    applications: [
      { th: "ตลับลูกปืน", en: "Bearings" },
      { th: "อุปกรณ์ก่อสร้าง", en: "Construction equipment" },
      { th: "เครื่องจักรอุตสาหกรรม", en: "Industrial machinery" },
      { th: "อุปกรณ์หนัก", en: "Heavy equipment" },
    ],
    icon: "grease",
    brands: [
      { name: "PETRONAS", items: ["Grease LiX MEP", "Grease Li PT"] },
      { name: "Valvoline", items: ["Supreme Grease EP2", "Extreme EP2 Grease", "Amber Grease EP3"] },
    ],
  },
  {
    slug: "compressor-oil",
    title: { th: "น้ำมันคอมเพรสเซอร์", en: "Compressor Oil" },
    description: {
      th: "น้ำมันคอมเพรสเซอร์สมรรถนะสูงสำหรับคอมเพรสเซอร์อากาศและอุตสาหกรรม ลดการเกิดคราบ ลดต้นทุนการบำรุงรักษา และยืดอายุการใช้งานของอุปกรณ์",
      en: "High-performance compressor oils for air compressors and industrial compressors. Minimizes deposit formation, reduces maintenance costs, and extends equipment service life.",
    },
    applications: [
      { th: "คอมเพรสเซอร์อากาศ", en: "Air compressors" },
      { th: "คอมเพรสเซอร์อุตสาหกรรม", en: "Industrial compressors" },
    ],
    icon: "compressor",
    brands: [
      { name: "PETRONAS", items: ["Compressor Oil"] },
    ],
  },
  {
    slug: "heat-transfer-oil",
    title: { th: "น้ำมันถ่ายเทความร้อน", en: "Heat Transfer Oil" },
    description: {
      th: "น้ำมันเทอร์มอลสำหรับระบบทำความร้อนอุตสาหกรรม หม้อไอน้ำ และเครื่องแลกเปลี่ยนความร้อน ให้การถ่ายเทความร้อนที่มีประสิทธิภาพและเสถียรภาพทางความร้อนดีเยี่ยมที่อุณหภูมิการทำงานสูง",
      en: "Thermal oils for industrial heating systems, boilers, and heat exchangers. Provides efficient heat transfer and excellent thermal stability at elevated operating temperatures.",
    },
    applications: [
      { th: "ระบบทำความร้อนอุตสาหกรรม", en: "Industrial heating systems" },
      { th: "หม้อไอน้ำ", en: "Boilers" },
      { th: "เครื่องแลกเปลี่ยนความร้อน", en: "Heat exchangers" },
    ],
    icon: "heat",
    brands: [
      { name: "PETRONAS", items: ["Heat Transfer Oil"] },
    ],
  },
  {
    slug: "metal-working-fluid",
    title: { th: "น้ำมันงานโลหะ", en: "Metal Working Fluid" },
    description: {
      th: "น้ำมันสำหรับงานกลึง CNC เจียร ตัด กัด และเจาะ ออกแบบมาเพื่อเพิ่มอายุเครื่องมือ คุณภาพผิวงาน และประสิทธิภาพการกลึง",
      en: "Straight oils and metal working fluids for CNC machining, grinding, cutting, milling, and drilling operations. Designed to improve tool life, surface finish, and machining efficiency.",
    },
    applications: [
      { th: "กลึง CNC", en: "CNC" },
      { th: "เจียร", en: "Grinding" },
      { th: "ตัด", en: "Cutting" },
      { th: "กัด", en: "Milling" },
      { th: "เจาะ", en: "Drilling" },
      { th: "กระบวนการโลหะ", en: "Metal processing" },
    ],
    icon: "metal",
    brands: [
      { name: "Cresco Asia", items: ["Straight Oils for Metalworking"] },
    ],
  },
  {
    slug: "agricultural-oil",
    title: { th: "น้ำมันเพื่อการเกษตร", en: "Agricultural Oil" },
    description: {
      th: "น้ำมันหล่อลื่นสำหรับเครื่องจักรกลการเกษตร รถแทรกเตอร์ รถเกี่ยวนวดข้าว และอุปกรณ์การเกษตรอื่นๆ ให้การปกป้องที่ดีเยี่ยมในสภาวะการทำงานหนักและฝุ่นละออง",
      en: "Lubricants for agricultural machinery, tractors, harvesters, and farm equipment. Provides excellent protection under heavy loads and dusty operating conditions.",
    },
    applications: [
      { th: "รถแทรกเตอร์", en: "Tractors" },
      { th: "รถเกี่ยวนวดข้าว", en: "Harvesters" },
      { th: "อุปกรณ์การเกษตร", en: "Farm equipment" },
    ],
    icon: "agriculture",
    brands: [
      { name: "PETRONAS", items: ["Tutela Multi UTTO 500 10W-30"] },
    ],
  },
  {
    slug: "turbine-oil",
    title: { th: "น้ำมันเทอร์ไบน์", en: "Turbine Oil" },
    description: {
      th: "น้ำมันหล่อลื่นสำหรับกังหันก๊าซ กังหันไอน้ำ และเครื่องยนต์ก๊าซชีวภาพ ให้เสถียรภาพทางความร้อนและการป้องกันการสึกหรอที่ยอดเยี่ยมสำหรับการผลิตไฟฟ้า",
      en: "Lubricants for gas turbines, steam turbines, and biogas engines. Provides excellent thermal stability and wear protection for power generation applications.",
    },
    applications: [
      { th: "กังหันก๊าซ", en: "Gas turbines" },
      { th: "กังหันไอน้ำ", en: "Steam turbines" },
      { th: "เครื่องยนต์ก๊าซชีวภาพ", en: "Biogas engines" },
    ],
    icon: "turbine",
    brands: [
      { name: "PETRONAS", items: ["GEO BLG Series", "Jenteram G Series"] },
    ],
  },
  {
    slug: "industrial-circulation-oil",
    title: { th: "น้ำมันหมุนเวียนอุตสาหกรรม", en: "Industrial Circulation Oil" },
    description: {
      th: "น้ำมันหล่อลื่นสำหรับระบบหมุนเวียนในอุตสาหกรรม ให้การหล่อลื่นและการระบายความร้อนที่มีประสิทธิภาพสำหรับระบบไหลเวียนน้ำมันในเครื่องจักรโรงงาน",
      en: "Lubricants for industrial circulation systems. Provides effective lubrication and cooling for oil circulation systems in plant machinery.",
    },
    applications: [
      { th: "ระบบหมุนเวียนน้ำมัน", en: "Oil circulation systems" },
      { th: "เครื่องจักรโรงงาน", en: "Plant machinery" },
    ],
    icon: "circulation",
    brands: [
      { name: "PETRONAS", items: ["Circula Series"] },
    ],
  },
  {
    slug: "slideway-oil",
    title: { th: "น้ำมันสไลด์เวย์", en: "Slideway Oil" },
    description: {
      th: "น้ำมันหล่อลื่นสำหรับรางเลื่อนของเครื่องจักรกล ให้การยึดเกาะและการหล่อลื่นที่ดีเยี่ยมสำหรับรางนำทางในเครื่องกลึง CNC และเครื่องจักรความแม่นยำสูง",
      en: "Lubricants for machine tool slideways. Provides excellent adhesion and lubrication for guideways in CNC lathes and high-precision machinery.",
    },
    applications: [
      { th: "รางเลื่อนเครื่องจักร", en: "Machine slideways" },
      { th: "เครื่องกลึง CNC", en: "CNC lathes" },
    ],
    icon: "slideway",
    brands: [
      { name: "PETRONAS", items: ["Slideway Series"] },
    ],
  },
];
