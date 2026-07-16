"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/useT";

const Header = () => {
  const pathUrl = usePathname();
  const router = useRouter();
  const { t, locale } = useT();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
  const handleSubmenu = (index: number) => setOpenIndex(openIndex === index ? -1 : index);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [navbarOpen]);

  useEffect(() => {
    setNavbarOpen(false);
    setOpenIndex(-1);
  }, [pathUrl]);

  const switchLocale = (newLocale: string) => {
    const newPath = pathUrl.replace(/^\/(th|en)/, `/${newLocale}`);
    router.push(newPath);
  };

  const p = (path: string) => `/${locale}${path}`;

  const menuData = [
    { id: 1, title: t("nav.home"), path: "/" },
    {
      id: 2, title: t("nav.products"),
      submenu: [
        { title: t("menu.1.submenu.0.title"), path: p("/products/engine-oil"), description: t("menu.1.submenu.0.description") },
        { title: t("menu.1.submenu.1.title"), path: p("/products/hydraulic-oil"), description: t("menu.1.submenu.1.description") },
        { title: t("menu.1.submenu.2.title"), path: p("/products/gear-oil"), description: t("menu.1.submenu.2.description") },
        { title: t("menu.1.submenu.3.title"), path: p("/products/transmission-fluid"), description: t("menu.1.submenu.3.description") },
        { title: t("menu.1.submenu.4.title"), path: p("/products/brake-fluid"), description: t("menu.1.submenu.4.description") },
        { title: t("menu.1.submenu.5.title"), path: p("/products/coolant"), description: t("menu.1.submenu.5.description") },
        { title: t("menu.1.submenu.6.title"), path: p("/products/grease"), description: t("menu.1.submenu.6.description") },
        { title: t("menu.1.submenu.7.title"), path: p("/products/compressor-oil"), description: t("menu.1.submenu.7.description") },
        { title: t("menu.1.submenu.8.title"), path: p("/products/heat-transfer-oil"), description: t("menu.1.submenu.8.description") },
        { title: t("menu.1.submenu.9.title"), path: p("/products/metal-working-fluid"), description: t("menu.1.submenu.9.description") },
      ],
    },
    {
      id: 3, title: t("nav.industries"),
      submenu: [
        { title: t("menu.2.submenu.0.title"), path: p("/industries/manufacturing"), description: t("menu.2.submenu.0.description") },
        { title: t("menu.2.submenu.1.title"), path: p("/industries/construction"), description: t("menu.2.submenu.1.description") },
        { title: t("menu.2.submenu.2.title"), path: p("/industries/transportation"), description: t("menu.2.submenu.2.description") },
        { title: t("menu.2.submenu.3.title"), path: p("/industries/agriculture"), description: t("menu.2.submenu.3.description") },
        { title: t("menu.2.submenu.4.title"), path: p("/industries/heavy-equipment"), description: t("menu.2.submenu.4.description") },
        { title: t("menu.2.submenu.5.title"), path: p("/industries/logistics"), description: t("menu.2.submenu.5.description") },
      ],
    },
    {
      id: 4, title: t("nav.services"),
      submenu: [
        { title: t("menu.3.submenu.0.title"), path: p("/services/oil-change"), description: t("menu.3.submenu.0.description") },
        { title: t("menu.3.submenu.1.title"), path: p("/services/sump-tank-cleaning"), description: t("menu.3.submenu.1.description") },
        { title: t("menu.3.submenu.2.title"), path: p("/services/used-oil-analysis"), description: t("menu.3.submenu.2.description") },
      ],
    },
    {
      id: 5, title: t("nav.about"),
      submenu: [
        { title: t("menu.4.submenu.0.title"), path: p("/about"), description: t("menu.4.submenu.0.description") },
        { title: t("menu.4.submenu.1.title"), path: p("/brands"), description: t("menu.4.submenu.1.description") },
        { title: t("menu.4.submenu.2.title"), path: p("/blogs"), description: t("menu.4.submenu.2.description") },
        { title: t("menu.4.submenu.3.title"), path: p("/faqs"), description: t("menu.4.submenu.3.description") },
        { title: t("menu.4.submenu.4.title"), path: p("/contact"), description: t("menu.4.submenu.4.description") },
      ],
    },
  ];

  return (
    <>
      <header className="ud-header left-0 top-0 z-50 flex w-full items-center shadow-nav fixed border-b border-stroke bg-white backdrop-blur-[5px]">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link href={p("/")} className="navbar-logo block w-full py-5">
                <Image src="/images/brands/bizhero-logo.jpg" alt="BizHero Lubricants" width={200} height={60} className="h-auto w-full max-w-[200px]" priority />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button onClick={navbarToggleHandler} id="navbarToggler" aria-label="Mobile Menu" className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                  <span className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 ${navbarOpen ? "top-[7px] rotate-45" : ""}`} />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 ${navbarOpen ? "opacity-0" : ""}`} />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 ${navbarOpen ? "top-[-8px] -rotate-45" : ""}`} />
                </button>
                <nav id="navbarCollapse" className={`navbar absolute right-0 top-full z-30 w-[280px] rounded-b-lg border border-stroke bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen ? "visible opacity-100" : "invisible opacity-0 lg:visible lg:opacity-100"}`}>
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative">
                          <Link onClick={navbarToggleHandler} scroll={false} href={menuItem.path} className={`ud-menu-scroll flex py-2 text-base text-dark group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${pathUrl === menuItem.path && "text-primary"}`}>
                            {menuItem.title}
                          </Link>
                        </li>
                      ) : (
                        <li className="submenu-item group relative" key={index}>
                          <button onClick={() => handleSubmenu(index)} className={`ud-menu-scroll flex w-full items-center justify-between py-2 text-base text-dark group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}>
                            {menuItem.title}
                            <span className="pl-1">
                              <svg className={`duration-300 ${openIndex === index ? "rotate-180" : ""} lg:group-hover:rotate-180`} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z" fill="currentColor" />
                              </svg>
                            </span>
                          </button>
                          <div className={`submenu overflow-hidden transition-[max-height,opacity] duration-300 lg:invisible lg:absolute lg:left-0 lg:top-[110%] lg:w-[250px] lg:rounded-md lg:bg-white lg:p-4 lg:opacity-0 lg:shadow-xl lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 ${openIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 lg:max-h-none"}`}>
                            <div className="p-4 lg:p-0">
                              {menuItem?.submenu?.map((submenuItem: any, i: number) => (
                                <Link href={submenuItem.path} key={i} onClick={navbarToggleHandler} className={`block rounded px-4 py-[10px] text-sm transition-colors ${pathUrl === submenuItem.path ? "bg-primary/5 text-primary" : "text-dark hover:bg-gray-50 hover:text-primary"}`}>
                                  <div className="flex flex-col">
                                    <span className="font-medium">{submenuItem.title}</span>
                                    {submenuItem.description && <span className="mt-0.5 block text-xs text-body-color">{submenuItem.description}</span>}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                  <div className="mt-4 flex flex-col gap-3 border-t border-stroke pt-4 lg:hidden">
                    <Link href="https://share-na2.hsforms.com/283IRhHVgQLuB-uFLk7V9cQ40ae96" onClick={navbarToggleHandler} className="bg-primary px-6 py-3 text-center text-base font-bold text-white duration-300 ease-in-out hover:bg-primary/90">
                      {t("nav.requestQuote")}
                    </Link>
                  </div>
                </nav>
              </div>
              <div className="hidden items-center justify-end gap-3 pr-16 sm:flex lg:pr-0">
                <div className="flex items-center gap-1 border-r border-gray-200 pr-3 mr-1">
                  <button
                    onClick={() => switchLocale("th")}
                    className={`px-1.5 text-xs font-semibold transition-colors ${locale === "th" ? "text-primary" : "text-gray-400 hover:text-primary"}`}
                  >
                    TH
                  </button>
                  <span className="text-xs text-gray-300">|</span>
                  <button
                    onClick={() => switchLocale("en")}
                    className={`px-1.5 text-xs font-semibold transition-colors ${locale === "en" ? "text-primary" : "text-gray-400 hover:text-primary"}`}
                  >
                    EN
                  </button>
                </div>
                <Link href="https://share-na2.hsforms.com/283IRhHVgQLuB-uFLk7V9cQ40ae96" className="bg-primary px-6 py-3 text-base font-bold text-white duration-300 ease-in-out hover:bg-primary/90">
                  {t("nav.requestQuote")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {navbarOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={navbarToggleHandler} />}
    </>
  );
};

export default Header;
