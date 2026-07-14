import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Products",
    path: undefined,
    newTab: false,
    submenu: [
      { id: 1, title: "Engine Oil", path: "/products/engine-oil", newTab: false, description: "Passenger cars, diesel, heavy-duty" },
      { id: 2, title: "Hydraulic Oil", path: "/products/hydraulic-oil", newTab: false, description: "Hydraulic press, excavator, injection molding" },
      { id: 3, title: "Gear Oil", path: "/products/gear-oil", newTab: false, description: "Industrial gearbox, differential" },
      { id: 4, title: "Transmission Fluid", path: "/products/transmission-fluid", newTab: false, description: "Automatic & manual transmission" },
      { id: 5, title: "Brake Fluid", path: "/products/brake-fluid", newTab: false, description: "DOT3 & DOT4 brake fluids" },
      { id: 6, title: "Coolant", path: "/products/coolant", newTab: false, description: "Engine & industrial cooling" },
      { id: 7, title: "Grease", path: "/products/grease", newTab: false, description: "Bearings, construction, industrial" },
      { id: 8, title: "Compressor Oil", path: "/products/compressor-oil", newTab: false, description: "Air & industrial compressors" },
      { id: 9, title: "Heat Transfer Oil", path: "/products/heat-transfer-oil", newTab: false, description: "Heating systems, boilers" },
      { id: 10, title: "Metal Working Fluid", path: "/products/metal-working-fluid", newTab: false, description: "CNC, grinding, cutting, milling" },
    ],
  },
  {
    id: 3,
    title: "Industries",
    path: undefined,
    newTab: false,
    submenu: [
      { id: 1, title: "Manufacturing", path: "/industries/manufacturing", newTab: false, description: "Factories, CNC, packaging" },
      { id: 2, title: "Construction", path: "/industries/construction", newTab: false, description: "Excavators, bulldozers, cranes" },
      { id: 3, title: "Transportation", path: "/industries/transportation", newTab: false, description: "Trucks, fleets, logistics" },
      { id: 4, title: "Agriculture", path: "/industries/agriculture", newTab: false, description: "Tractors, harvesters" },
      { id: 5, title: "Heavy Equipment", path: "/industries/heavy-equipment", newTab: false, description: "Mining, earthmoving" },
      { id: 6, title: "Logistics", path: "/industries/logistics", newTab: false, description: "Distribution fleets" },
    ],
  },
  {
    id: 4,
    title: "Services",
    path: undefined,
    newTab: false,
    submenu: [
      { id: 1, title: "Oil Change", path: "/services/oil-change", newTab: false, description: "Fleets, commercial vehicles, industrial" },
      { id: 2, title: "Sump Tank Cleaning", path: "/services/sump-tank-cleaning", newTab: false, description: "Hydraulic tanks, oil storage" },
      { id: 3, title: "Used Oil Analysis", path: "/services/used-oil-analysis", newTab: false, description: "Predictive maintenance & fault detection" },
    ],
  },
  {
    id: 5,
    title: "About",
    path: undefined,
    newTab: false,
    submenu: [
      { id: 1, title: "About Us", path: "/about", newTab: false, description: "Our story and team" },
      { id: 2, title: "Our Brands", path: "/brands", newTab: false, description: "Valvoline, PETRONAS, Monroe" },
      { id: 3, title: "Blog", path: "/blogs", newTab: false, description: "Articles & maintenance tips" },
      { id: 4, title: "FAQs", path: "/faqs", newTab: false, description: "Frequently asked questions" },
      { id: 5, title: "Contact Us", path: "/contact", newTab: false, description: "Get in touch with our team" },
    ],
  },
];
export default menuData;
