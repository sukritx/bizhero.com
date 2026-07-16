import { getDictionary, Locale } from "@/i18n/i18n";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ContactWidget from "@/components/Contact/ContactWidget";
import ScrollUp from "@/components/Common/ScrollUp";
import LocaleLangSetter from "@/components/LocaleLangSetter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    metadataBase: new URL("https://bizhero.com"),
    alternates: {
      canonical: `https://bizhero.com/${locale}`,
      languages: {
        th: "https://bizhero.com/th",
        en: "https://bizhero.com/en",
      },
    },
    openGraph: {
      siteName: dict.site.name,
      locale: locale === "th" ? "th_TH" : "en_US",
      type: "website" as const,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: dict.jsonLd.name,
    image: "https://bizhero.com/images/hero/bizhero-hero-compressed.png",
    "@id": "https://bizhero.com",
    url: `https://bizhero.com/${locale}`,
    telephone: "082-936-5416",
    email: "info@biz-hero.com",
    description: dict.jsonLd.description,
    priceRange: dict.jsonLd.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saphan Sung",
      addressRegion: "Bangkok",
      addressCountry: "TH",
      streetAddress: "52/6 Ramkhamheang 90",
      postalCode: "10240",
    },
    areaServed: dict.jsonLd.areaServed.map((a: { name: string }) => ({
      "@type": "Place",
      name: a.name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.nav.products,
      itemListElement: dict.jsonLd.services.map((s: { name: string }) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name },
      })),
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
    ],
  };

  return (
    <>
      <LocaleLangSetter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      {children}
      <Footer dict={dict} />
      <ContactWidget />
      <ScrollToTop />
      <ScrollUp />
    </>
  );
}
