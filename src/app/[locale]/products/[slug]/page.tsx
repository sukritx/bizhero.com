import { getDictionary, Locale } from "@/i18n/i18n";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productCategories, getProductBySlug } from "@/data/productsData";
import { getProductsByCategory } from "@/data/productSpecDiscovery";
import { t as tl, tArr } from "@/data/locale";

const brandImages: Record<string, string> = {
  PETRONAS: "/images/brands/petronas.svg",
  Valvoline: "/images/brands/valvoline.svg",
  "Cresco Asia": "/images/brands/cresco-asia.jpg",
};

interface Props { params: Promise<{ slug: string; locale: string }> }

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

  const discoveredProducts = getProductsByCategory(slug);
  const hasDiscovered = discoveredProducts.length > 0;

  const groupedByBrand: Record<string, typeof discoveredProducts> = {};
  if (hasDiscovered) {
    for (const p of discoveredProducts) {
      if (!groupedByBrand[p.brand]) groupedByBrand[p.brand] = [];
      groupedByBrand[p.brand].push(p);
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gray-900 pt-[160px] pb-32 md:pt-[200px] md:pb-40 lg:pt-[240px] lg:pb-48">
        <Image
          src="/images/products/gear2.jpeg"
          alt=""
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="container relative z-10"><div className="mx-auto max-w-[780px] text-center">
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
            {hasDiscovered
              ? (Object.entries(groupedByBrand) as [string, typeof discoveredProducts][]).map(([brand, products]) => (
                  <div key={brand} className="rounded-xl border border-stroke bg-white p-6 shadow-sm">
                    <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-dark">
                      {brandImages[brand] && (
                        <Image
                          src={brandImages[brand]}
                          alt={`${brand} logo`}
                          width={80}
                          height={32}
                          className="h-8 w-auto object-contain"
                        />
                      )}
                      {brand}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {products.map((p) => (
                        <Link
                          key={p.productSlug}
                          href={`/${locale}/products/${slug}/${p.productSlug}`}
                          className="rounded bg-gray-100 px-3 py-1 text-sm text-body-color transition hover:bg-primary hover:text-white"
                        >
                          {p.matchedItemName || p.productName}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))
              : (product.brands || []).map((brand, i) => (
                  <div key={i} className="rounded-xl border border-stroke bg-white p-6 shadow-sm">
                    <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-dark">
                      {brandImages[brand.name] && (
                        <Image
                          src={brandImages[brand.name]}
                          alt={`${brand.name} logo`}
                          width={80}
                          height={32}
                          className="h-8 w-auto object-contain"
                        />
                      )}
                      {brand.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">{brand.items.map((item, j) => (<span key={j} className="rounded bg-gray-100 px-3 py-1 text-sm text-body-color">{item}</span>))}</div>
                  </div>
                ))}
          </div>
        </div></div>
      </section>
      <CallToAction dict={dict} locale={locale} />
    </>
  );
}
