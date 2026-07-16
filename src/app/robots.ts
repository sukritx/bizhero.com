import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://bizhero.com";

  return {
    rules: {
      userAgent: "*",
      allow: ["/th/", "/en/"],
      disallow: ["/api/", "/review/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
