export interface ServiceCategory {
  slug: string;
  title: { th: string; en: string };
  tagline: { th: string; en: string };
  description: { th: string; en: string };
  benefits: { th: string; en: string }[];
  suitableFor: { th: string; en: string }[];
  image: string;
}

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return services.find((s) => s.slug === slug);
}

export const services: ServiceCategory[] = [
  {
    slug: "oil-change",
    title: { th: "บริการเปลี่ยนถ่ายน้ำมันเครื่อง", en: "Oil Change Service" },
    tagline: {
      th: "เปลี่ยนถ่ายน้ำมันเครื่องระดับมืออาชีพสำหรับรถบรรทุกฟลีท รถเพื่อการพาณิชย์ และเครื่องจักรอุตสาหกรรม",
      en: "Professional oil change for fleet trucks, commercial vehicles, and industrial machinery.",
    },
    description: {
      th: "บิซฮีโร่ให้บริการเปลี่ยนถ่ายน้ำมันเครื่องระดับมืออาชีพสำหรับรถบรรทุกฟลีท รถเพื่อการพาณิชย์ และเครื่องจักรอุตสาหกรรม ช่างเทคนิคที่ผ่านการฝึกอบรมของเราใช้น้ำมันหล่อลื่นคุณภาพสูงจาก Valvoline และ PETRONAS เพื่อให้อุปกรณ์ของคุณทำงานได้อย่างราบรื่นและมีประสิทธิภาพ การเปลี่ยนถ่ายน้ำมันเครื่องเป็นประจำช่วยลดการสึกหรอของเครื่องยนต์ เพิ่มประสิทธิภาพการใช้น้ำมัน และยืดอายุการใช้งานของเครื่องจักร",
      en: "BizHero provides professional oil change services for fleet trucks, commercial vehicles, and industrial machinery. Our trained technicians use high-quality lubricants from Valvoline and PETRONAS to ensure your equipment runs smoothly and efficiently. Regular oil changes reduce engine wear, improve fuel efficiency, and extend the service life of your machinery.",
    },
    benefits: [
      { th: "ลดการสึกหรอของเครื่องยนต์", en: "Reduced engine wear" },
      { th: "เพิ่มประสิทธิภาพการใช้น้ำมัน", en: "Improved fuel efficiency" },
      { th: "ยืดอายุอุปกรณ์", en: "Extended equipment life" },
      { th: "บริการระดับมืออาชีพโดยช่างที่ผ่านการฝึกอบรม", en: "Professional service by trained technicians" },
      { th: "น้ำมันหล่อลื่นแบรนด์คุณภาพสูง", en: "High-quality branded lubricants" },
    ],
    suitableFor: [
      { th: "รถบรรทุกฟลีท", en: "Fleet trucks" },
      { th: "รถเพื่อการพาณิชย์", en: "Commercial vehicles" },
      { th: "เครื่องจักรอุตสาหกรรม", en: "Industrial machinery" },
      { th: "รถยนต์นั่ง", en: "Passenger cars" },
      { th: "รถดีเซล", en: "Diesel vehicles" },
    ],
    image: "/images/services/oil-change.jpeg",
  },
  {
    slug: "sump-tank-cleaning",
    title: { th: "ทำความสะอาดถังพักน้ำมัน", en: "Sump Tank Cleaning" },
    tagline: {
      th: "บริการทำความสะอาดอุตสาหกรรมสำหรับถังไฮดรอลิก ถังเก็บน้ำมัน และระบบหล่อลื่น",
      en: "Industrial cleaning service for hydraulic tanks, oil storage tanks, and lubrication systems.",
    },
    description: {
      th: "บริการทำความสะอาดถังพักของเราช่วยขจัดตะกอน สิ่งปนเปื้อน และคราบน้ำมันที่เสื่อมสภาพออกจากถังไฮดรอลิก ถังเก็บน้ำมัน และระบบหล่อลื่นอุตสาหกรรม บริการบำรุงรักษาที่จำเป็นนี้ช่วยเพิ่มอายุน้ำมันหล่อลื่น ลดการสึกหรอของอุปกรณ์ และทำให้ระบบของคุณทำงานที่ประสิทธิภาพสูงสุด",
      en: "Our sump tank cleaning service removes sludge, contaminants, and degraded oil residues from hydraulic tanks, oil storage tanks, and industrial lubrication systems. This essential maintenance service improves lubricant life, reduces equipment wear, and ensures your systems operate at peak efficiency.",
    },
    benefits: [
      { th: "ขจัดตะกอนและสิ่งปนเปื้อน", en: "Removes sludge and contaminants" },
      { th: "เพิ่มอายุน้ำมันหล่อลื่น", en: "Improves lubricant life" },
      { th: "ลดการสึกหรอของอุปกรณ์", en: "Reduces equipment wear" },
      { th: "ป้องกันการปนเปื้อนของระบบ", en: "Prevents system contamination" },
      { th: "เพิ่มประสิทธิภาพการทำงาน", en: "Increases operational efficiency" },
    ],
    suitableFor: [
      { th: "ถังไฮดรอลิก", en: "Hydraulic tanks" },
      { th: "ถังเก็บน้ำมัน", en: "Oil storage tanks" },
      { th: "ระบบหล่อลื่นอุตสาหกรรม", en: "Industrial lubrication systems" },
    ],
    image: "/images/services/tank-cleaning.jpeg",
  },
  {
    slug: "used-oil-analysis",
    title: { th: "วิเคราะห์น้ำมันใช้แล้ว", en: "Used Oil Analysis" },
    tagline: {
      th: "การบำรุงรักษาเชิงพยากรณ์ผ่านการทดสอบและวิเคราะห์น้ำมันใช้แล้วอย่างครอบคลุม",
      en: "Predictive maintenance through comprehensive used oil testing and analysis.",
    },
    description: {
      th: "การวิเคราะห์น้ำมันใช้แล้วเป็นหนึ่งในบริการที่มีคุณค่าที่สุดที่เรามีให้สำหรับลูกค้าอุตสาหกรรม การวิเคราะห์ของเราประเมินน้ำมันหล่อลื่นที่ใช้แล้วเพื่อประเมินอนุภาคโลหะจากการสึกหรอ ระดับการปนเปื้อน ปริมาณน้ำ การเจือจางของน้ำมันเชื้อเพลิง การออกซิเดชัน และสภาพน้ำมันโดยรวม ข้อมูลนี้ช่วยให้การบำรุงรักษาเชิงพยากรณ์ การตรวจจับความผิดปกติล่วงหน้า ลดต้นทุนการบำรุงรักษา และลดเวลาหยุดทำงานที่ไม่ได้วางแผน",
      en: "Used oil analysis is one of the most valuable services we offer for industrial customers. Our analysis evaluates used lubricants to assess metal wear particles, contamination levels, water content, fuel dilution, oxidation, and overall oil condition. This data enables predictive maintenance, early fault detection, lower maintenance costs, and reduced unplanned downtime.",
    },
    benefits: [
      { th: "การบำรุงรักษาเชิงพยากรณ์", en: "Predictive maintenance" },
      { th: "ตรวจจับความผิดปกติล่วงหน้า", en: "Early fault detection" },
      { th: "ลดต้นทุนการบำรุงรักษา", en: "Lower maintenance cost" },
      { th: "ยืดอายุอุปกรณ์", en: "Extended equipment life" },
      { th: "ลดเวลาหยุดทำงาน", en: "Reduced downtime" },
      { th: "ตัดสินใจบำรุงรักษาจากข้อมูล", en: "Data-driven maintenance decisions" },
    ],
    suitableFor: [
      { th: "เครื่องจักรอุตสาหกรรม", en: "Industrial machinery" },
      { th: "โรงงานผลิต", en: "Manufacturing plants" },
      { th: "อุปกรณ์ก่อสร้าง", en: "Construction equipment" },
      { th: "รถฟลีท", en: "Fleet vehicles" },
      { th: "อุปกรณ์การเกษตร", en: "Agricultural equipment" },
    ],
    image: "/images/services/oil-analysis.jpeg",
  },
];
