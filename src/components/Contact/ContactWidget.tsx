"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import Image from "next/image";
import submitContactForm from "@/utils/submitContactForm";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"menu" | "form">("menu");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      firstName: (form.firstName as HTMLInputElement).value,
      lastName: (form.lastName as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
      source: "widget",
    };

    try {
      await submitContactForm(data);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
    setView("menu");
    setStatus("idle");
  };

  return (
    <div className="fixed bottom-8 right-8 z-[998] flex flex-col items-end" ref={panelRef}>
      {open && (
        <div className="mb-4 w-[340px] min-h-[400px] max-h-[80vh] overflow-y-auto rounded-lg bg-white px-6 py-6 shadow-xl dark:bg-dark-2 sm:w-[360px]">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {view === "form" ? (
                <button
                  onClick={() => { setView("menu"); setStatus("idle"); }}
                  className="text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white"
                  aria-label="Back"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                  </svg>
                </button>
              ) : (
                <Image
                  src="/images/brands/bizhero-logo.jpg"
                  alt="BizHero"
                  width={36}
                  height={36}
                  className="shrink-0"
                />
              )}
              <h3 className="text-base font-semibold text-dark dark:text-white">
                {view === "form" ? "Send us a message" : "Let us know if you have any questions!"}
              </h3>
            </div>
            <button
              onClick={() => { setOpen(false); setStatus("idle"); }}
              className="text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11.41 10l4.3-4.29a1 1 0 10-1.42-1.42L10 8.59l-4.29-4.3a1 1 0 10-1.42 1.42L8.59 10l-4.3 4.29a1 1 0 001.42 1.42L10 11.41l4.29 4.3a1 1 0 001.42-1.42L11.41 10z" />
              </svg>
            </button>
          </div>

          <div className="mb-4 border-t border-[#f1f1f1] dark:border-dark-3" />

          {view === "menu" ? (
            <>
              <div className="space-y-3">
                <a
                  href="tel:3234102068"
                  className="flex items-center gap-3 rounded-lg border border-[#f1f1f1] px-4 py-3 text-sm font-medium text-dark transition hover:border-primary hover:text-primary dark:border-dark-3 dark:text-white dark:hover:border-primary dark:hover:text-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                  (323) 410-2068
                </a>
                <a
                  aria-label="Facebook"
                  href="https://www.facebook.com/a1totalserviceplumbing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-[#f1f1f1] px-4 py-3 text-sm font-medium text-dark transition hover:border-primary hover:text-primary dark:border-dark-3 dark:text-white dark:hover:border-primary dark:hover:text-primary"
                >
                  <Image
                    src="/icons/facebook-color-svgrepo-com.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  Facebook
                </a>
                <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/a1totalserviceplumbing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-[#f1f1f1] px-4 py-3 text-sm font-medium text-dark transition hover:border-primary hover:text-primary dark:border-dark-3 dark:text-white dark:hover:border-primary dark:hover:text-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current shrink-0">
                    <path d="M11.0297 14.4305C12.9241 14.4305 14.4598 12.8948 14.4598 11.0004C14.4598 9.10602 12.9241 7.57031 11.0297 7.57031C9.13529 7.57031 7.59958 9.10602 7.59958 11.0004C7.59958 12.8948 9.13529 14.4305 11.0297 14.4305Z" />
                    <path d="M14.7554 1.8335H7.24463C4.25807 1.8335 1.83334 4.25823 1.83334 7.24479V14.6964C1.83334 17.7421 4.25807 20.1668 7.24463 20.1668H14.6962C17.7419 20.1668 20.1667 17.7421 20.1667 14.7555V7.24479C20.1667 4.25823 17.7419 1.8335 14.7554 1.8335ZM11.0296 15.4948C8.51614 15.4948 6.53496 13.4545 6.53496 11.0002C6.53496 8.54586 8.54571 6.50554 11.0296 6.50554C13.4839 6.50554 15.4946 8.54586 15.4946 11.0002C15.4946 13.4545 13.5134 15.4948 11.0296 15.4948ZM17.2393 6.91952C16.9436 7.24479 16.5 7.42221 15.9973 7.42221C15.5538 7.42221 15.1102 7.24479 14.7554 6.91952C14.4301 6.59425 14.2527 6.18027 14.2527 5.67758C14.2527 5.17489 14.4301 4.79049 14.7554 4.43565C15.0807 4.08081 15.4946 3.90339 15.9973 3.90339C16.4409 3.90339 16.914 4.08081 17.2393 4.40608C17.535 4.79049 17.7419 5.23403 17.7419 5.70715C17.7124 6.18027 17.535 6.59425 17.2393 6.91952Z" />
                    <path d="M16.0276 4.96777C15.6432 4.96777 15.318 5.29304 15.318 5.67745C15.318 6.06186 15.6432 6.38713 16.0276 6.38713C16.412 6.38713 16.7373 6.06186 16.7373 5.67745C16.7373 5.29304 16.4416 4.96777 16.0276 4.96777Z" />
                  </svg>
                  Instagram
                </a>
                <a
                  aria-label="Line"
                  href="https://line.me/ti/p/~a1totalserviceplumbing"
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
                  LINE
                </a>
                <a
                  aria-label="Yelp"
                  href="https://www.yelp.com/biz/a-1-total-service-plumbing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-[#f1f1f1] px-4 py-3 text-sm font-medium text-dark transition hover:border-primary hover:text-primary dark:border-dark-3 dark:text-white dark:hover:border-primary dark:hover:text-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current shrink-0">
                    <path d="M18.8065 1.8335H3.16399C2.42474 1.8335 1.83334 2.42489 1.83334 3.16414V18.8362C1.83334 19.5459 2.42474 20.1668 3.16399 20.1668H18.7473C19.4866 20.1668 20.078 19.5754 20.078 18.8362V3.13457C20.1371 2.42489 19.5457 1.8335 18.8065 1.8335ZM7.24464 17.4168H4.55379V8.69371H7.24464V17.4168ZM5.88443 7.48135C4.99733 7.48135 4.31721 6.77167 4.31721 5.91414C4.31721 5.05661 5.0269 4.34694 5.88443 4.34694C6.74196 4.34694 7.45163 5.05661 7.45163 5.91414C7.45163 6.77167 6.8011 7.48135 5.88443 7.48135ZM17.4463 17.4168H14.7554V13.1883C14.7554 12.183 14.7258 10.8523 13.336 10.8523C11.9167 10.8523 11.7097 11.976 11.7097 13.0996V17.4168H9.01884V8.69371H11.6506V9.90608H11.6801C12.0645 9.1964 12.9221 8.48672 14.2527 8.48672C17.0027 8.48672 17.5054 10.2609 17.5054 12.6856V17.4168H17.4463Z" />
                  </svg>
                  Yelp
                </a>
              </div>

              <div className="my-5 border-t border-[#f1f1f1] dark:border-dark-3" />

              <button
                onClick={() => setView("form")}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-white transition duration-300 hover:bg-primary/90"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Send us a message
              </button>
            </>
          ) : (
            <>
              {status === "success" ? (
                <p className="py-6 text-center text-sm font-medium text-green-600">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-5 flex gap-3">
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        required
                        className="w-full border-b border-[#f1f1f1] bg-transparent py-3 text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        required
                        className="w-full border-b border-[#f1f1f1] bg-transparent py-3 text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      required
                      className="w-full border-b border-[#f1f1f1] bg-transparent py-3 text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full border-b border-[#f1f1f1] bg-transparent py-3 text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    />
                  </div>
                  <div className="mb-5">
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Describe your issue...*"
                      required
                      className="w-full resize-none border-b border-[#f1f1f1] bg-transparent py-3 text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    ></textarea>
                  </div>
                  {status === "error" && (
                    <p className="mb-2 text-xs text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-white transition duration-300 hover:bg-primary/90 disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      )}

      <div className="relative mb-3 flex items-center gap-3">
        {!open && (
          <span className="whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-medium text-dark shadow-md dark:bg-dark-2 dark:text-white">
            Contact us here
          </span>
        )}
        <button
          onClick={handleOpen}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg transition duration-300 hover:bg-primary/90 hover:scale-105"
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
