import { getDictionary, Locale } from "@/i18n/i18n";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.blogs.title,
    description: dict.metadata.blogs.description,
    alternates: { canonical: `https://bizhero.com/${locale}/contact`, languages: { th: "https://bizhero.com/th/contact", en: "https://bizhero.com/en/contact" } },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  return <Contact />;
}
