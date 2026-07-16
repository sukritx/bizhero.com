import { getDictionary, Locale } from "@/i18n/i18n";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.ourWork.title,
    description: dict.metadata.ourWork.description,
    alternates: { canonical: `https://bizhero.com/${locale}/our-work`, languages: { th: "https://bizhero.com/th/our-work", en: "https://bizhero.com/en/our-work" } },
  };
}

export default async function OurWorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container"><div className="mx-auto max-w-[780px] text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{dict.metadata.ourWork.title}</h1>
          <p className="text-lg text-white/80">{dict.metadata.ourWork.description}</p>
        </div></div>
      </section>
      <section className="py-20 lg:py-[120px]"><div className="container"><p className="text-center text-body-color">{dict.contact.locationDesc}</p></div></section>
      <CallToAction dict={dict} locale={locale} />
    </>
  );
}
