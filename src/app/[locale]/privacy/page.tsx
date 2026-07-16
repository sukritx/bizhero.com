import { getDictionary, Locale } from "@/i18n/i18n";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.privacy.title,
    description: dict.metadata.privacy.description,
    alternates: { canonical: `https://bizhero.com/${locale}/privacy`, languages: { th: "https://bizhero.com/th/privacy", en: "https://bizhero.com/en/privacy" } },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <main>
      <section className="pb-20 pt-28 lg:pb-[120px] lg:pt-[150px]">
        <div className="container max-w-4xl">
          <h1 className="mb-10 text-4xl font-bold text-dark dark:text-white sm:text-5xl">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none dark:prose-invert text-body-color dark:text-dark-6 space-y-8">
            <p>This Privacy Policy describes how BizHero Lubricants collects, uses, and protects your personal information when you use our website or services.</p>
            <h2 className="text-2xl font-bold text-dark dark:text-white">Information We Collect</h2>
            <p>When you contact us, we may collect: name, email address, phone number, company name, and details about your lubricant or service needs.</p>
            <h2 className="text-2xl font-bold text-dark dark:text-white">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide quotes</li>
              <li>To process orders and deliver products</li>
              <li>To send service updates and promotional information</li>
              <li>To improve our products and services</li>
            </ul>
            <h2 className="text-2xl font-bold text-dark dark:text-white">Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal data. We do not share your information with third parties for marketing purposes.</p>
            <h2 className="text-2xl font-bold text-dark dark:text-white">Contact Us</h2>
            <p>For questions about this Privacy Policy, contact us at <a href="tel:+66829365416" className="text-primary hover:underline">082-936-5416</a> or <a href="mailto:info@biz-hero.com" className="text-primary hover:underline">info@biz-hero.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
