import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "24/7 Emergency Plumbing",
    paragraph:
      "Plumbing emergencies don't wait, and neither do we. Our team is available around the clock for burst pipes, sewer backups, gas leaks, and more.",
    btn: "Learn More",
    btnLink: "/services#emergency",
  },
  {
    id: 2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "Trenchless Pipe Relining",
    paragraph:
      "Rehabilitate underground pipes from 2\"–48\" diameter with minimal excavation. Our CIPP lining technology saves time, money, and your landscape.",
    btn: "Learn More",
    btnLink: "/services#trenchless",
  },
  {
    id: 3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Drain Cleaning & Hydro Jetting",
    paragraph:
      "From simple clogs to severe blockages, our drain cleaning and hydro jetting services restore full flow to your pipes quickly and effectively.",
    btn: "Learn More",
    btnLink: "/services#drain-cleaning",
  },
  {
    id: 4,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Sewer Camera Inspection",
    paragraph:
      "See exactly what's going on inside your sewer lines with our advanced video inspection technology. Accurate diagnosis, no guesswork.",
    btn: "Learn More",
    btnLink: "/services#camera-inspection",
  },
  {
    id: 5,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
    title: "Water Heater Services",
    paragraph:
      "Installation, repair, and maintenance for tank and tankless water heaters. Stay comfortable year-round with reliable hot water.",
    btn: "Learn More",
    btnLink: "/services#water-heater",
  },
  {
    id: 6,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Serving All of SoCal",
    paragraph:
      "Proudly serving Los Angeles County, Orange County, South Bay, East LA, Anaheim, and La Habra. Nationwide trenchless support available.",
    btn: "View Service Areas",
    btnLink: "/service-areas",
  },
];
export default featuresData;
