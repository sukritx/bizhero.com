import { getDictionary, Locale } from "@/i18n/i18n";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.ourWork.title,
    description: dict.metadata.ourWork.description,
    alternates: { canonical: `https://bizhero.com/${locale}/service-areas`, languages: { th: "https://bizhero.com/th/service-areas", en: "https://bizhero.com/en/service-areas" } },
  };
}

export default async function ServiceAreasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container"><div className="-mx-4 flex flex-wrap"><div className="w-full px-4"><div className="mx-auto max-w-[780px] text-center">
          <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">{dict.metadata.ourWork.title}</h1>
          <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">{dict.metadata.ourWork.description}</p>
        </div></div></div></div>
      </section>
      <section className="py-20 lg:py-[120px]">
        <div className="container"><div className="mx-auto max-w-[780px] text-center">
          <p className="text-lg text-body-color">{dict.contact.locationDesc}</p>
        </div></div>
      </section>
      <CallToAction dict={dict} locale={locale} />
    </>
  );
}
