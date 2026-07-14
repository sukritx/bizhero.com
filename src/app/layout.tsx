import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "A-1 Total Service Plumbing",
    image: "https://a1totalserviceplumbing.com/images/hero/hero-image.jpg",
    "@id": "https://a1totalserviceplumbing.com",
    url: "https://a1totalserviceplumbing.com",
    telephone: "(323) 410-2068",
    email: "a1totalserviceplumbing@gmail.com",
    description: "Licensed, bonded, and insured plumbing company specializing in residential, commercial, municipal, and trenchless plumbing services across Southern California.",
    license: "California State License #1135475",
    foundingDate: "2004",
    priceRange: "$$",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Commerce",
        addressRegion: "CA",
        addressCountry: "US",
        areaServed: "Los Angeles County",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Anaheim",
        addressRegion: "CA",
        addressCountry: "US",
        areaServed: "Orange County",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Los Angeles County" },
      { "@type": "Place", name: "Orange County" },
      { "@type": "Place", name: "South Bay" },
      { "@type": "Place", name: "East Los Angeles" },
      { "@type": "Place", name: "Anaheim" },
      { "@type": "Place", name: "La Habra" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "06:00",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1400",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hydro Jetting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Detection" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Line Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Repiping" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Installation & Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trenchless Pipe Relining" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Camera Inspections" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas Line Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing" } },
      ],
    },
    sameAs: [
      "https://www.facebook.com/a1totalserviceplumbing",
      "https://www.instagram.com/a1totalserviceplumbing",
      "https://www.yelp.com/biz/a-1-total-service-plumbing",
    ],
  };

  return (
    <html suppressHydrationWarning className="!scroll-smooth" lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <div className="isolate">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
