import { getDictionary, Locale } from "@/i18n/i18n";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.partners.title,
    description: dict.metadata.partners.description,
    alternates: { canonical: `https://bizhero.com/${locale}/brands`, languages: { th: "https://bizhero.com/th/brands", en: "https://bizhero.com/en/brands" } },
  };
}

export default async function BrandsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const brands = [
    { slug: "valvoline", name: "Valvoline", desc: dict.aboutPage.brands.valvoline.desc, logo: "/images/brands/valvoline.svg" },
    { slug: "petronas", name: "PETRONAS", desc: dict.aboutPage.brands.petronas.desc, logo: "/images/brands/petronas.svg" },
    { slug: "monroe", name: "Monroe", desc: dict.aboutPage.brands.monroe.desc, logo: "/images/brands/monroe.png" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container"><div className="mx-auto max-w-[780px] text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{dict.aboutPage.ourBrands}</h1>
          <p className="text-lg text-white/80">{dict.metadata.partners.description}</p>
        </div></div>
      </section>
      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {brands.map((brand, i) => (
              <Link key={i} href={`/${locale}/brands/${brand.slug}`} className="group rounded-xl border border-stroke bg-white p-8 shadow-sm transition hover:shadow-lg text-center">
                <img src={brand.logo} alt={brand.name} className="h-16 mx-auto mb-4 object-contain" />
                <h3 className="mb-3 text-xl font-bold text-dark group-hover:text-primary">{brand.name}</h3>
                <p className="text-sm text-body-color">{brand.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
