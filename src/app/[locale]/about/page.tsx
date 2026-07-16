import { getDictionary, Locale } from "@/i18n/i18n";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
    alternates: {
      canonical: `https://bizhero.com/${locale}/about`,
      languages: {
        th: "https://bizhero.com/th/about",
        en: "https://bizhero.com/en/about",
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.aboutPage;

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  {t.title}
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  {t.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-16">
              <div className="relative mb-10 h-64 w-full overflow-hidden rounded-xl sm:h-80 lg:h-96">
                <Image
                  src="/images/about/about-bizhero.png"
                  alt="BizHero Lubricants Team"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl">{t.whoWeAre}</h2>
              <p className="mb-6 text-lg leading-relaxed text-body-color">{t.whoWeAreP1}</p>
              <p className="mb-6 text-lg leading-relaxed text-body-color">{t.whoWeAreP2}</p>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">{t.whyChoose}</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {t.whyItems.map((item, i) => (
                  <div key={i} className="rounded-xl border border-stroke bg-white p-6 shadow-1">
                    <h3 className="mb-3 text-lg font-bold text-dark">{item.title}</h3>
                    <p className="text-base text-body-color">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 sm:p-10">
              <h2 className="mb-6 text-2xl font-bold text-dark">{t.ourBrands}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { key: "valvoline", href: `/brands/valvoline` },
                  { key: "petronas", href: `/brands/petronas` },
                  { key: "monroe", href: `/brands/monroe` },
                ].map((brand, i) => (
                  <Link
                    key={i}
                    href={`/${locale}${brand.href}`}
                    className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <h3 className="mb-2 text-lg font-bold text-dark group-hover:text-primary">
                      {brand.key.charAt(0).toUpperCase() + brand.key.slice(1)}
                    </h3>
                    <p className="text-sm text-body-color">
                      {t.brands[brand.key as keyof typeof t.brands].desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction dict={dict} />
    </>
  );
}
