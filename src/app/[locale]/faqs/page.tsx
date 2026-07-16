import { getDictionary, Locale } from "@/i18n/i18n";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.blogs.title,
    description: dict.metadata.blogs.description,
    alternates: { canonical: `https://bizhero.com/${locale}/faqs`, languages: { th: "https://bizhero.com/th/faqs", en: "https://bizhero.com/en/faqs" } },
  };
}

export default async function FaqsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container"><div className="-mx-4 flex flex-wrap"><div className="w-full px-4"><div className="mx-auto max-w-[780px] text-center">
          <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">{dict.faq.title}</h1>
          <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">{dict.faq.subtitle}</p>
        </div></div></div></div>
      </section>
      <Faq dict={dict} />
      <CallToAction dict={dict} />
    </>
  );
}
