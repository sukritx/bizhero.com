import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Services",
    path: undefined,
    newTab: false,
    submenu: [
      { id: 1, title: "Plumbing Services", path: undefined, newTab: false, isTitle: true },
      { id: 2, title: "Drain Cleaning", path: "/services#drain-cleaning", newTab: false, description: "Professional drain clearing and cleaning" },
      { id: 3, title: "Hydro Jetting", path: "/services#hydro-jetting", newTab: false, description: "High-pressure water jetting for tough clogs" },
      { id: 4, title: "Leak Detection", path: "/services#leak-detection", newTab: false, description: "Advanced electronic leak detection" },
      { id: 5, title: "Sewer Line Repair", path: "/services#sewer-line-repair", newTab: false, description: "Sewer repair and replacement" },
      { id: 6, title: "Repiping", path: "/services#repiping", newTab: false, description: "Whole-home and commercial repiping" },
      { id: 7, title: "Water Heater Services", path: "/services#water-heater", newTab: false, description: "Installation, repair & maintenance" },
      { id: 8, title: "Trenchless Pipe Relining", path: "/services#trenchless", newTab: false, description: "No-dig pipe rehabilitation (2\"–48\")" },
      { id: 9, title: "Sewer Camera Inspection", path: "/services#camera-inspection", newTab: false, description: "Video inspection of sewer lines" },
      { id: 10, title: "Gas Line Services", path: "/services#gas-line", newTab: false, description: "Gas line installation and repair" },
      { id: 11, title: "Specialty", path: undefined, newTab: false, isTitle: true },
      { id: 12, title: "Emergency Plumbing", path: "/services#emergency", newTab: false, description: "24/7 emergency plumbing service" },
      { id: 13, title: "Municipal & Commercial", path: "/services#municipal", newTab: false, description: "Infrastructure plumbing solutions" },
    ],
  },
  {
    id: 2,
    title: "Service Areas",
    path: undefined,
    newTab: false,
    submenu: [
      { id: 1, title: "Los Angeles County", path: "/service-areas#los-angeles-county", newTab: false, description: "Commerce, Vernon, Monterey Park & more" },
      { id: 2, title: "Orange County", path: "/service-areas#orange-county", newTab: false, description: "Anaheim, La Habra & surrounding areas" },
      { id: 3, title: "South Bay", path: "/service-areas#south-bay", newTab: false, description: "South Bay region cities" },
      { id: 4, title: "East Los Angeles", path: "/service-areas#east-la", newTab: false, description: "East LA and surrounding communities" },
    ],
  },
  {
    id: 3,
    title: "About",
    path: undefined,
    newTab: false,
    submenu: [
      { id: 1, title: "About Us", path: "/about", newTab: false, description: "Licensed, bonded & insured since 2004" },
      { id: 2, title: "Contact Us", path: "/contact", newTab: false, description: "Get in touch — we're here 24/7" },
    ],
  },
];
export default menuData;
