import { getDictionary, Locale } from "@/i18n/i18n";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { services } from "@/data/servicesData";
import { Metadata } from "next";
import { t as tl } from "@/data/locale";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.services.title,
    description: dict.metadata.services.description,
    alternates: { canonical: `https://bizhero.com/${locale}/services`, languages: { th: "https://bizhero.com/th/services", en: "https://bizhero.com/en/services" } },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.servicesPage;

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container"><div className="-mx-4 flex flex-wrap"><div className="w-full px-4"><div className="mx-auto max-w-[780px] text-center">
          <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">{t.title}</h1>
          <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">{t.subtitle}</p>
        </div></div></div></div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => {
              const title = tl(service.title, locale);
              const tagline = tl(service.tagline, locale);
              const description = tl(service.description, locale);
              return (
                <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="group rounded-xl border border-stroke bg-white p-8 shadow-1 transition duration-300 hover:shadow-xl">
                  <div className="relative mb-5 h-48 w-full overflow-hidden rounded-lg">
                    <Image src={service.image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-dark group-hover:text-primary">{title}</h2>
                  <p className="mb-4 text-sm font-medium text-primary">{tagline}</p>
                  <p className="mb-6 text-base leading-relaxed text-body-color line-clamp-3">{description}</p>
                  <div className="flex items-center text-sm font-semibold text-primary">{dict.nav.learnMore}<svg className="ml-1 h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 lg:py-[120px]">
        <div className="container"><div className="mx-auto max-w-[700px] text-center">
          <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl">{t.notSure}</h2>
          <p className="mb-8 text-lg text-body-color">{t.notSureDesc}</p>
          <Link href="https://share-na2.hsforms.com/283IRhHVgQLuB-uFLk7V9cQ40ae96" className="inline-flex items-center justify-center bg-primary px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90">{t.contactUs}</Link>
        </div></div>
      </section>

      <CallToAction dict={dict} locale={locale} />
    </>
  );
}
