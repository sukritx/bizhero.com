import { getDictionary, Locale } from "@/i18n/i18n";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industriesData";
import { t as tl } from "@/data/locale";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: `${dict.nav.industries} | ${dict.site.name}`, description: dict.businessSolutions.subtitle, alternates: { canonical: `https://bizhero.com/${locale}/industries`, languages: { th: "https://bizhero.com/th/industries", en: "https://bizhero.com/en/industries" } } };
}

export default async function IndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container"><div className="mx-auto max-w-[780px] text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{dict.nav.industries}</h1>
          <p className="text-lg text-white/80">{dict.businessSolutions.subtitle}</p>
        </div></div>
      </section>
      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/${locale}/industries/${ind.slug}`} className="group rounded-xl border border-stroke bg-white p-8 shadow-sm transition hover:shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-dark group-hover:text-primary">{tl(ind.title, locale)}</h3>
                <p className="mb-4 text-base text-body-color line-clamp-3">{tl(ind.description, locale)}</p>
                <span className="text-sm font-semibold text-primary">{dict.nav.learnMore} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CallToAction dict={dict} locale={locale} />
    </>
  );
}
