import { Dictionary } from "@/i18n/i18n";
import Image from "next/image";

export default function AboutUs({ dict }: { dict: Dictionary }) {
  const t = dict.aboutUs;

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mb-10 h-[350px] overflow-hidden rounded-xl lg:mb-0 lg:h-[460px]">
              <Image src="/images/about/about-bizhero.png" alt="BizHero Lubricants" fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full object-contain object-center" />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="lg:pl-8">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{t.badge}</span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">{t.headline}</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">{t.p1}</p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">{t.p2}</p>
              <div className="mb-8 grid grid-cols-2 gap-4">
                {[t.check1, t.check2, t.check3, t.check4].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm font-medium text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
