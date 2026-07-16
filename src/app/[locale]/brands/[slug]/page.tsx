import { getDictionary, Locale } from "@/i18n/i18n";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { brands, getBrandBySlug } from "@/data/brandsData";
import { t as tl } from "@/data/locale";

interface Props { params: Promise<{ slug: string; locale: string }>; }

export async function generateStaticParams() { return brands.map((b) => ({ slug: b.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const brand = getBrandBySlug(slug);
  if (!brand) return { title: "Not Found" };
  return { title: `${brand.name} | ${dict.site.name}`, description: tl(brand.description, locale) };
}

export default async function BrandPage({ params }: Props) {
  const { slug, locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container"><div className="mx-auto max-w-[780px] text-center">
          <img src={brand.logo} alt={brand.name} className="h-16 mx-auto mb-4 object-contain brightness-0 invert" />
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{brand.name}</h1>
          <p className="text-lg text-white/80">{tl(brand.description, locale)}</p>
        </div></div>
      </section>
      <section className="py-20 lg:py-[120px]">
        <div className="container"><div className="mx-auto max-w-[900px]">
          <div className="space-y-6">
            {(brand.products || []).map((prod, i) => (
              <div key={i} className="rounded-xl border border-stroke bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-dark">{tl(prod.name, locale)}</h3>
                <div className="flex flex-wrap gap-2">{prod.items.map((item, j) => (<span key={j} className="rounded bg-gray-100 px-3 py-1 text-sm text-body-color">{item}</span>))}</div>
              </div>
            ))}
          </div>
        </div></div>
      </section>
      <CallToAction dict={dict} />
    </>
  );
}
