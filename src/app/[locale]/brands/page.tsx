import { getDictionary, Locale } from "@/i18n/i18n";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.partners.title,
    description: dict.metadata.partners.description,
  };
}

export default async function BrandsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const brands = [
    { slug: "valvoline", name: "Valvoline", desc: dict.aboutPage.brands.valvoline.desc, logo: "/images/brands/valvoline.svg" },
    { slug: "petronas", name: "PETRONAS", desc: dict.aboutPage.brands.petronas.desc, logo: "/images/brands/petronas.svg" },
    { slug: "cresco-asia", name: "Cresco Asia", desc: dict.aboutPage.brands.crescoasia.desc, logo: "/images/brands/cresco-asia.jpg" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gray-900 pt-[160px] pb-32 md:pt-[200px] md:pb-40 lg:pt-[240px] lg:pb-48">
        <Image
          src="/images/industries/heavy-industry.jpeg"
          alt=""
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="container relative z-10"><div className="mx-auto max-w-[780px] text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{dict.aboutPage.ourBrands}</h1>
          <p className="text-lg text-white/80">{dict.metadata.partners.description}</p>
        </div></div>
      </section>
      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {brands.map((brand, i) => (
              <Link key={i} href={`/${locale}/brands/${brand.slug}`} className="group rounded-xl border border-stroke bg-white p-8 shadow-sm transition hover:shadow-lg text-center">
                <Image src={brand.logo} alt={brand.name} width={120} height={64} className="h-16 mx-auto mb-4 w-auto object-contain" />
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
