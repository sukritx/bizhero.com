import { Dictionary } from "@/i18n/i18n";
import Link from "next/link";

export default function CallToAction({ dict }: { dict: Dictionary }) {
  const t = dict.cta;

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0" style={{ backgroundImage: "url('/images/call-to-action/gear.jpeg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
      <div className="absolute inset-0 bg-dark/85" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{t.headline}</h2>
          <p className="mb-10 text-lg text-white/80">{t.subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="https://share-na2.hsforms.com/283IRhHVgQLuB-uFLk7V9cQ40ae96" className="inline-flex items-center justify-center bg-white px-8 py-4 text-base font-bold text-dark transition duration-300 hover:bg-white/90">
              {t.requestQuote}
            </Link>
            <Link href="/products/engine-oil" className="inline-flex items-center justify-center border border-white px-8 py-4 text-base font-bold text-white transition duration-300 hover:bg-white hover:text-dark">
              {t.browseProducts}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
