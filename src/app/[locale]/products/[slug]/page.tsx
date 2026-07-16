import { getDictionary, Locale } from "@/i18n/i18n";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { productCategories, getProductBySlug } from "@/data/productsData";
import { t as tl, tArr } from "@/data/locale";

interface Props { params: Promise<{ slug: string; locale: string }>; }

export async function generateStaticParams() { return productCategories.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const product = getProductBySlug(slug);
  if (!product) return { title: "Not Found" };
  return { title: `${tl(product.title, locale)} | ${dict.site.name}`, description: tl(product.description, locale) };
}

export default async function ProductPage({ params }: Props) {
  const { slug, locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container"><div className="mx-auto max-w-[780px] text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{tl(product.title, locale)}</h1>
          <p className="text-lg text-white/80">{tl(product.description, locale)}</p>
        </div></div>
      </section>
      <section className="py-20 lg:py-[120px]">
        <div className="container"><div className="mx-auto max-w-[900px]">
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-dark">{locale === "th" ? "การใช้งาน" : "Applications"}</h2>
            <div className="flex flex-wrap gap-2">{tArr(product.applications, locale).map((app, i) => (<span key={i} className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">{app}</span>))}</div>
          </div>
          <div className="space-y-8">
            {(product.brands || []).map((brand, i) => (
              <div key={i} className="rounded-xl border border-stroke bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-dark">{brand.name}</h3>
                <div className="flex flex-wrap gap-2">{brand.items.map((item, j) => (<span key={j} className="rounded bg-gray-100 px-3 py-1 text-sm text-body-color">{item}</span>))}</div>
              </div>
            ))}
          </div>
        </div></div>
      </section>
      <CallToAction dict={dict} />
    </>
  );
}
