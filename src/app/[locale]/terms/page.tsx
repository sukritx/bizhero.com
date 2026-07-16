import { getDictionary, Locale } from "@/i18n/i18n";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.terms.title,
    description: dict.metadata.terms.description,
    alternates: { canonical: `https://bizhero.com/${locale}/terms`, languages: { th: "https://bizhero.com/th/terms", en: "https://bizhero.com/en/terms" } },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <main>
      <section className="pb-20 pt-28 lg:pb-[120px] lg:pt-[150px]">
        <div className="container max-w-4xl">
          <h1 className="mb-10 text-4xl font-bold text-dark dark:text-white sm:text-5xl">Terms &amp; Conditions</h1>
          <div className="prose prose-lg max-w-none dark:prose-invert text-body-color dark:text-dark-6 space-y-8">
            <p>These Terms and Conditions apply to all services and products provided by BizHero Lubricants. Your use of our services constitutes acceptance of these terms.</p>
            <h2 className="text-2xl font-bold text-dark dark:text-white">Product Orders</h2>
            <p>All product orders are subject to availability. Prices are subject to change without notice. Quotations are valid for 30 days unless otherwise stated.</p>
            <h2 className="text-2xl font-bold text-dark dark:text-white">Payment Terms</h2>
            <p>Payment terms are agreed upon at the time of order. We accept bank transfer and other agreed payment methods. Late payments may incur additional charges.</p>
            <h2 className="text-2xl font-bold text-dark dark:text-white">Delivery</h2>
            <p>Delivery times are estimates and may vary based on location and product availability. BizHero is not liable for delays caused by circumstances beyond our control.</p>
            <h2 className="text-2xl font-bold text-dark dark:text-white">Warranty</h2>
            <p>All products are warranted according to the manufacturer&apos;s terms. BizHero guarantees that all products supplied are genuine and sourced from authorized distributors.</p>
            <h2 className="text-2xl font-bold text-dark dark:text-white">Changes to Terms</h2>
            <p>BizHero Lubricants reserves the right to change these Terms and Conditions at any time. Changes will be communicated through our website.</p>
            <h2 className="text-2xl font-bold text-dark dark:text-white">Contact Information</h2>
            <p>For any queries, contact BizHero Lubricants at <a href="tel:+66829365416" className="text-primary hover:underline">082-936-5416</a> or <a href="mailto:info@biz-hero.com" className="text-primary hover:underline">info@biz-hero.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
