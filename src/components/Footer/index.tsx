import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
     <footer
       className="wow fadeInUp relative z-10 bg-white pt-20 lg:pt-[100px]"
       data-wow-delay=".15s"
     >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/images/brands/bizhero-logo.jpg"
                  alt="Biz Hero"
                  width={180}
                  height={48}
                  className="h-auto w-[180px]"
                  priority
                />
              </Link>
              <div className="mb-8 max-w-[270px] space-y-3 text-base text-gray-800">
                <div>
                  <p>บริษัท บิซ ฮีโร่ จำกัด</p>
                  <p>52/6 ซ.รามคำแหง 90 แขวงสะพานสูง</p>
                  <p>เขตสะพานสูง กรุงเทพมหานคร 10240</p>
                  <p>โทร 082-936-5416</p>
                  <p>E-mail : info@biz-hero.com</p>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <p>Biz Hero Co.,Ltd</p>
                  <p>52/6 Ramkhamheang 90 Saphan Sung,</p>
                  <p>Saphan Sung, Bangkok 10240</p>
                  <p>โทร 082-936-5416</p>
                  <p>E-mail : info@biz-hero.com</p>
                </div>
              </div>
              <div className="-mx-3 flex items-center">
                <Link
                  aria-label="Facebook"
                  href="https://www.facebook.com/"
                  className="px-3 text-gray-600 hover:text-primary"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                    <path d="M16.294 8.86875H14.369H13.6815V8.18125V6.05V5.3625H14.369H15.8128C16.1909 5.3625 16.5003 5.0875 16.5003 4.675V1.03125C16.5003 0.653125 16.2253 0.34375 15.8128 0.34375H13.3034C10.5878 0.34375 8.69714 2.26875 8.69714 5.12187V8.1125V8.8H8.00964H5.67214C5.19089 8.8 4.74402 9.17812 4.74402 9.72812V12.2031C4.74402 12.6844 5.12214 13.1313 5.67214 13.1313H7.94089H8.62839V13.8188V20.7281C8.62839 21.2094 9.00652 21.6562 9.55652 21.6562H12.7878C12.994 21.6562 13.1659 21.5531 13.3034 21.4156C13.4409 21.2781 13.544 21.0375 13.544 20.8312V13.8531V13.1656H14.2659H15.8128C16.2596 13.1656 16.6034 12.8906 16.6721 12.4781V12.4438V12.4094L17.1534 10.0375C17.1878 9.79688 17.1534 9.52187 16.9471 9.24687C16.8784 9.075 16.569 8.90312 16.294 8.86875Z" />
                  </svg>
                </Link>
                <Link
                  aria-label="Instagram"
                  href="https://www.instagram.com/"
                  className="px-3 text-gray-600 hover:text-primary"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                    <path d="M11.0297 14.4305C12.9241 14.4305 14.4598 12.8948 14.4598 11.0004C14.4598 9.10602 12.9241 7.57031 11.0297 7.57031C9.13529 7.57031 7.59958 9.10602 7.59958 11.0004C7.59958 12.8948 9.13529 14.4305 11.0297 14.4305Z" />
                    <path d="M14.7554 1.8335H7.24463C4.25807 1.8335 1.83334 4.25823 1.83334 7.24479V14.6964C1.83334 17.7421 4.25807 20.1668 7.24463 20.1668H14.6962C17.7419 20.1668 20.1667 17.7421 20.1667 14.7555V7.24479C20.1667 4.25823 17.7419 1.8335 14.7554 1.8335ZM11.0296 15.4948C8.51614 15.4948 6.53496 13.4545 6.53496 11.0002C6.53496 8.54586 8.54571 6.50554 11.0296 6.50554C13.4839 6.50554 15.4946 8.54586 15.4946 11.0002C15.4946 13.4545 13.5134 15.4948 11.0296 15.4948ZM17.2393 6.91952C16.9436 7.24479 16.5 7.42221 15.9973 7.42221C15.5538 7.42221 15.1102 7.24479 14.7554 6.91952C14.4301 6.59425 14.2527 6.18027 14.2527 5.67758C14.2527 5.17489 14.4301 4.79049 14.7554 4.43565C15.0807 4.08081 15.4946 3.90339 15.9973 3.90339C16.4409 3.90339 16.914 4.08081 17.2393 4.40608C17.535 4.79049 17.7419 5.23403 17.7419 5.70715C17.7124 6.18027 17.535 6.59425 17.2393 6.91952Z" />
                  </svg>
                </Link>
                <Link
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/"
                  className="px-3 text-gray-600 hover:text-primary"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
               <h4 className="mb-9 text-lg font-semibold text-gray-800">
                 Products
               </h4>
              <ul>
                <li><Link href="/products/engine-oil" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Engine Oil</Link></li>
                <li><Link href="/products/hydraulic-oil" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Hydraulic Oil</Link></li>
                <li><Link href="/products/gear-oil" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Gear Oil</Link></li>
                <li><Link href="/products/grease" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Grease</Link></li>
                <li><Link href="/products/compressor-oil" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Compressor Oil</Link></li>
                <li><Link href="/products/metal-working-fluid" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Metal Working Fluid</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
               <h4 className="mb-9 text-lg font-semibold text-gray-800">
                 Services
               </h4>
              <ul>
                <li><Link href="/services/oil-change" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Oil Change</Link></li>
                <li><Link href="/services/sump-tank-cleaning" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Sump Tank Cleaning</Link></li>
                <li><Link href="/services/used-oil-analysis" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Used Oil Analysis</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
               <h4 className="mb-9 text-lg font-semibold text-gray-800">
                 Company
               </h4>
              <ul>
                <li><Link href="/about" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">About Us</Link></li>
                <li><Link href="/brands" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Our Brands</Link></li>
                <li><Link href="/blogs" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Blog</Link></li>
                <li><Link href="/faqs" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">FAQs</Link></li>
                <li><Link href="/contact" className="mb-3 inline-block text-base text-gray-600 hover:text-primary">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
               <h4 className="mb-9 text-lg font-semibold text-gray-800">
                 Get in Touch
               </h4>
              <p className="mb-6 text-base text-gray-800">
                Need help choosing the right lubricant? Our technical team is ready to assist with product selection and maintenance solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary px-7 py-3 text-base font-bold text-white transition hover:bg-primary/90"
              >
                Request a Quote
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
                 <Link href="/privacy" className="px-3 text-base text-gray-600 hover:text-gray-900 hover:underline">Privacy Policy</Link>
                 <Link href="/terms" className="px-3 text-base text-gray-600 hover:text-gray-900 hover:underline">Terms of Service</Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                 <p className="text-base text-gray-600">
                   &copy; {new Date().getFullYear()} BizHero Lubricants. All rights reserved.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
