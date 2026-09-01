import { getDictionary, Locale } from "@/i18n/i18n";
import { Metadata } from "next";
import Image from "next/image";

const APPLICATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScildln7dFwX25kuiWlfVu4TMC7YsVMY_Bolr0gbgVapDqZww/viewform?usp=dialog";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.career.title,
    description: dict.metadata.career.description,
    alternates: { canonical: `https://bizhero.com/${locale}/career`, languages: { th: "https://bizhero.com/th/career", en: "https://bizhero.com/en/career" } },
  };
}

export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.careerPage;

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
        <div className="container relative z-10">
          <div className="mx-auto max-w-[780px] text-center">
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
            <p className="text-lg text-white/80">{t.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-dark sm:text-3xl">{t.whoWeAre}</h2>
            <p className="mx-auto max-w-[720px] text-lg text-body-color">{t.whoWeAreDesc}</p>
          </div>

          <div className="mx-auto max-w-[720px] rounded-2xl bg-primary/5 p-10 text-center">
            <h3 className="mb-3 text-2xl font-bold text-dark">{t.applyNow}</h3>
            <p className="mb-8 text-body-color">{t.applyDesc}</p>
            <a
              href={APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary px-8 py-4 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
            >
              {t.applyNow}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
