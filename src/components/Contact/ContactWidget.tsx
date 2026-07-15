"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const HUBSPOT_URL = "https://share-na2.hsforms.com/283IRhHVgQLuB-uFLk7V9cQ40ae96";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="fixed bottom-8 right-8 z-[998] flex flex-col items-end" ref={panelRef}>
      {open && (
        <div className="mb-4 w-[340px] overflow-y-auto rounded-lg bg-white px-6 py-6 shadow-xl dark:bg-dark-2 sm:w-[360px]">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/brands/bizhero-logo.jpg"
                alt="BizHero"
                width={36}
                height={36}
                className="shrink-0"
              />
              <h3 className="text-base font-semibold text-dark dark:text-white">
                Let us know if you have any questions!
              </h3>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11.41 10l4.3-4.29a1 1 0 10-1.42-1.42L10 8.59l-4.29-4.3a1 1 0 10-1.42 1.42L8.59 10l-4.3 4.29a1 1 0 001.42 1.42L10 11.41l4.29 4.3a1 1 0 001.42-1.42L11.41 10z" />
              </svg>
            </button>
          </div>

          <div className="mb-4 border-t border-[#f1f1f1] dark:border-dark-3" />

          <div className="space-y-3">
            <a
              href={HUBSPOT_URL}
              className="flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-bold text-white transition duration-300 hover:bg-primary/90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Request a Quote
            </a>

            <div className="my-4 border-t border-[#f1f1f1] dark:border-dark-3" />

            <a
              href="mailto:info@biz-hero.com"
              className="flex items-center gap-3 rounded-lg border border-[#f1f1f1] px-4 py-3 text-sm font-medium text-dark transition hover:border-primary hover:text-primary dark:border-dark-3 dark:text-white dark:hover:border-primary dark:hover:text-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email Us (info@biz-hero.com)
            </a>
            <a
              href="tel:+66829365416"
              className="flex items-center gap-3 rounded-lg border border-[#f1f1f1] px-4 py-3 text-sm font-medium text-dark transition hover:border-primary hover:text-primary dark:border-dark-3 dark:text-white dark:hover:border-primary dark:hover:text-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              082 936 5416
            </a>
            <a
              aria-label="LINE"
              href="https://line.me/ti/p/@bizhero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-[#f1f1f1] px-4 py-3 text-sm font-medium text-dark transition hover:border-primary hover:text-primary dark:border-dark-3 dark:text-white dark:hover:border-primary dark:hover:text-primary"
            >
              <Image
                src="/icons/line-svgrepo-com.svg"
                alt="LINE"
                width={20}
                height={20}
                className="shrink-0"
              />
              LINE (@bizhero)
            </a>
          </div>
        </div>
      )}

      <div className="relative mb-3 flex items-center gap-3">
        {!open && (
          <span className="whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-medium text-dark shadow-md dark:bg-dark-2 dark:text-white">
            Contact us here
          </span>
        )}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary text-white shadow-lg transition duration-300 hover:bg-primary/90 hover:scale-105"
          aria-label={open ? "Close contact form" : "Open contact form"}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
              <path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
