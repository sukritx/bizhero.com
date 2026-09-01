import { Dictionary } from "@/i18n/i18n";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ dict, locale }: { dict: Dictionary; locale?: string }) {
  const t = dict.footer;
  const p = `/${locale || "th"}`;

  return (
    <footer className="wow fadeInUp relative z-10 bg-white pt-20 lg:pt-[100px]" data-wow-delay=".15s">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href={p} className="mb-6 inline-block">
                <Image src="/images/brands/bizhero-logo.jpg" alt="Biz Hero" width={180} height={48} className="h-auto w-[180px]" priority />
              </Link>
              <div className="mb-8 max-w-[270px] space-y-3 text-base text-gray-800">
                <div>
                  <p>{t.companyThai}</p>
                  <p>{t.addressThai}</p>
                  <p>{dict.footer.phoneLabel} 082-936-5416</p>
                  <p>{dict.footer.emailLabel} : info@biz-hero.com</p>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <p>{t.companyEn}</p>
                  <p>{t.addressEn}</p>
                  <p>{dict.footer.phoneLabel} 082-936-5416</p>
                  <p>{dict.footer.emailLabel} : info@biz-hero.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-gray-800">{t.products}</h4>
              <ul>
                <li><Link href={`${p}/products/engine-oil`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.footerProductLinks.engineOil}</Link></li>
                <li><Link href={`${p}/products/hydraulic-oil`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.footerProductLinks.hydraulicOil}</Link></li>
                <li><Link href={`${p}/products/gear-oil`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.footerProductLinks.gearOil}</Link></li>
                <li><Link href={`${p}/products/grease`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.footerProductLinks.grease}</Link></li>
                <li><Link href={`${p}/products/compressor-oil`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.footerProductLinks.compressorOil}</Link></li>
                <li><Link href={`${p}/products/metal-working-fluid`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.footerProductLinks.metalWorkingFluid}</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-gray-800">{t.services}</h4>
              <ul>
                <li><Link href={`${p}/services/oil-change`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.footerServiceLinks.oilChange}</Link></li>
                <li><Link href={`${p}/services/sump-tank-cleaning`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.footerServiceLinks.sumpTankCleaning}</Link></li>
                <li><Link href={`${p}/services/used-oil-analysis`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.footerServiceLinks.usedOilAnalysis}</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-gray-800">{t.company}</h4>
              <ul>
                <li><Link href={`${p}/about`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.aboutUs}</Link></li>
                <li><Link href={`${p}/brands`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.ourBrands}</Link></li>
                <li><Link href={`${p}/blogs`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.blog}</Link></li>
                <li><Link href={`${p}/faqs`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.faqs}</Link></li>
                <li><Link href={`${p}/career`} className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.career}</Link></li>
                <li><a href="https://share-na2.hsforms.com/283IRhHVgQLuB-uFLk7V9cQ40ae96" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">{t.contact}</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-gray-800">{t.getInTouch}</h4>
              <p className="mb-6 text-base text-gray-800">{t.getInTouchDesc}</p>
              <Link href="https://share-na2.hsforms.com/283IRhHVgQLuB-uFLk7V9cQ40ae96" className="inline-flex items-center justify-center bg-primary px-7 py-3 text-base font-bold text-white transition hover:bg-primary/90">
                {t.requestQuote}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="my-1">
                <div className="-mx-3 flex items-center justify-center md:justify-start">
                  <Link href={`${p}/privacy`} className="px-3 text-base text-gray-600 hover:text-gray-900 hover:underline">{t.privacyPolicy}</Link>
                  <Link href={`${p}/terms`} className="px-3 text-base text-gray-600 hover:text-gray-900 hover:underline">{t.termsOfService}</Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                <p className="text-base text-gray-600">{t.copyright}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
