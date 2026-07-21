import { getDictionary, Locale } from "@/i18n/i18n";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/productsData";
import { getAllDiscoveredProducts, getProductBySlugs } from "@/data/productSpecDiscovery";
import { t as tl } from "@/data/locale";
import CallToAction from "@/components/CallToAction";

const brandImages: Record<string, string> = {
  PETRONAS: "/images/brands/petronas.svg",
  Valvoline: "/images/brands/valvoline.svg",
  "Cresco Asia": "/images/brands/cresco-asia.jpg",
};

interface Props { params: Promise<{ slug: string; productSlug: string; locale: string }> }

export async function generateStaticParams() {
  const products = getAllDiscoveredProducts();
  return products.map((p) => ({ slug: p.categorySlug, productSlug: p.productSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, productSlug, locale } = await params;
  const product = getProductBySlugs(slug, productSlug);
  const dict = await getDictionary(locale as Locale);
  const category = getProductBySlug(slug);
  const displayName = product?.matchedItemName || product?.productName || "";
  return {
    title: `${displayName} | ${dict.site.name}`,
    description: category ? tl(category.description, locale) : "",
    alternates: {
      canonical: `https://bizhero.com/${locale}/products/${slug}/${productSlug}`,
      languages: {
        th: `https://bizhero.com/th/products/${slug}/${productSlug}`,
        en: `https://bizhero.com/en/products/${slug}/${productSlug}`,
      },
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug, productSlug, locale } = await params;
  const product = getProductBySlugs(slug, productSlug);
  const dict = await getDictionary(locale as Locale);
  const category = getProductBySlug(slug);

  if (!product) notFound();

  const displayName = product.matchedItemName || product.productName;
  const pdfUrl = product.pdfRelPath.split("/").map(encodeURIComponent).join("/");

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
          {brandImages[product.brand] && (
            <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-xl bg-white p-4">
              <Image
                src={brandImages[product.brand]}
                alt={`${product.brand} logo`}
                width={120}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
          )}
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{displayName}</h1>
        </div></div>
      </section>
      <section className="py-20 lg:py-[120px]">
        <div className="container"><div className="mx-auto max-w-[900px]">
          <nav className="mb-8 text-sm text-body-color">
            <Link href={`/${locale}/products/${slug}`} className="text-primary hover:underline">
              {category ? tl(category.title, locale) : slug}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark">{displayName}</span>
          </nav>
          <h2 className="mb-6 text-2xl font-bold text-dark">
            {locale === "th" ? "เอกสารข้อมูลผลิตภัณฑ์" : "Product Specifications"}
          </h2>
          <div className="overflow-hidden rounded-xl border border-stroke bg-white shadow-sm">
            <iframe
              src={`/${pdfUrl}#view=FitH`}
              className="h-[600px] w-full md:h-[800px]"
              title={product.pdfBasename}
            />
            <div className="border-t border-stroke p-4 text-center">
              <a
                href={`/${pdfUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {locale === "th" ? "เปิดในแท็บใหม่" : "Open in new tab"}
              </a>
            </div>
          </div>
        </div></div>
      </section>
      <CallToAction dict={dict} locale={locale} />
    </>
  );
}
