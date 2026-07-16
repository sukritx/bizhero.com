import { getDictionary, Locale } from "@/i18n/i18n";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { industries, getIndustryBySlug } from "@/data/industriesData";
import { t as tl, tArr } from "@/data/locale";

interface Props { params: Promise<{ slug: string; locale: string }>; }

export async function generateStaticParams() { return industries.map((i) => ({ slug: i.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Not Found" };
  return { title: `${tl(industry.title, locale)} | ${dict.site.name}`, description: tl(industry.description, locale) };
}

export default async function IndustryPage({ params }: Props) {
  const { slug, locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-gray-900 pt-[160px] pb-32 md:pt-[200px] md:pb-40 lg:pt-[240px] lg:pb-48">
        <Image
          src={industry.image}
          alt=""
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="container relative z-10"><div className="mx-auto max-w-[780px] text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{tl(industry.title, locale)}</h1>
          <p className="text-lg text-white/80">{tl(industry.description, locale)}</p>
        </div></div>
      </section>
      <section className="py-20 lg:py-[120px]">
        <div className="container"><div className="mx-auto max-w-[900px]">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-stroke bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-dark">{locale === "th" ? "ผลิตภัณฑ์" : "Products"}</h3>
              <ul className="space-y-2">{tArr(industry.products, locale).map((p, i) => (<li key={i} className="flex items-center gap-2 text-body-color"><span className="text-primary">•</span>{p}</li>))}</ul>
            </div>
            <div className="rounded-xl border border-stroke bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-dark">{locale === "th" ? "การใช้งาน" : "Applications"}</h3>
              <ul className="space-y-2">{tArr(industry.applications, locale).map((a, i) => (<li key={i} className="flex items-center gap-2 text-body-color"><span className="text-primary">•</span>{a}</li>))}</ul>
            </div>
          </div>
        </div></div>
      </section>
      <CallToAction dict={dict} />
    </>
  );
}
