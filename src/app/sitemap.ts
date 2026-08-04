import { MetadataRoute } from "next";

const BASE_URL = "https://bizhero.com";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/oil-change",
  "/services/sump-tank-cleaning",
  "/services/used-oil-analysis",
  "/products",
  "/products/engine-oil",
  "/products/hydraulic-oil",
  "/products/gear-oil",
  "/products/transmission-fluid",
  "/products/brake-fluid",
  "/products/coolant",
  "/products/grease",
  "/products/compressor-oil",
  "/products/heat-transfer-oil",
  "/products/metal-working-fluid",
  "/industries",
  "/industries/manufacturing",
  "/industries/construction",
  "/industries/transportation",
  "/industries/agriculture",
  "/industries/heavy-equipment",
  "/industries/logistics",
  "/brands",
  "/brands/valvoline",
  "/brands/petronas",
  "/brands/cresco-asia",
  "/blogs",
  "/faqs",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of ["th", "en"]) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            th: `${BASE_URL}/th${route}`,
            en: `${BASE_URL}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
