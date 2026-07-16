import { getDictionary, Locale } from "@/i18n/i18n";
import AboutUs from "@/components/AboutUs";
import BusinessSolutions from "@/components/BusinessSolutions";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import HomeServices from "@/components/HomeServices";
import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
    keywords: dict.metadata.home.keywords,
    alternates: {
      canonical: `https://bizhero.com/${locale}`,
      languages: {
        th: "https://bizhero.com/th",
        en: "https://bizhero.com/en",
      },
    },
    openGraph: {
      title: dict.metadata.home.ogTitle,
      description: dict.metadata.home.ogDescription,
      type: "website",
      locale: locale === "th" ? "th_TH" : "en_US",
      siteName: dict.site.name,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"], locale);

  return (
    <main>
      <Hero dict={dict} />
      <AboutUs dict={dict} />
      <BusinessSolutions />
      <OurServices />
      <HomeServices />
      <HomeBlogSection posts={posts} dict={dict} locale={locale} />
      <Faq dict={dict} />
      <CallToAction dict={dict} />
    </main>
  );
}
