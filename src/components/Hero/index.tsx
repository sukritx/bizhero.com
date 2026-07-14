"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import submitContactForm from "@/utils/submitContactForm";

const Hero = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
      source: "hero",
    };

    try {
      await submitContactForm(data);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gray-50 pt-44 pb-12 sm:pt-48 sm:pb-16 lg:pt-52">
      <Image
        src="/images/hero/hero-image-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl">
                We fix phumbing problems
              </h1>
              <p className="mt-2 text-lg text-gray-200 sm:mt-8">
                Licensed, bonded, and insured. Serving Los Angeles County &amp; Orange County with residential, commercial, and municipal plumbing services. 24/7 emergency plumbing available.
              </p>

              <div className="mt-8 sm:mt-10">
                  <div className="relative p-2 sm:border sm:border-gray-400 sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-300 sm:focus-within:border-gray-300">
                  <a
                    href="tel:3234102068"
                    className="block w-full px-4 py-4 text-white bg-transparent border border-gray-400 outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent text-lg font-medium"
                  >
                    Call Now: (323) 410-2068
                  </a>
                  <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                    <Link
                      href="/contact"
                      className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-primary focus:outline-none focus:bg-primary/80 hover:bg-primary/80"
                    >
                      Get Free Estimate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl bg-white p-8 shadow-lg sm:p-10">
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                Request a Free Estimate
              </h3>
              {status === "success" ? (
                <p className="text-center text-lg font-medium text-green-600">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-5 flex gap-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="hero-firstName"
                        className="mb-2 block text-sm text-gray-600"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="hero-firstName"
                        placeholder="John"
                        required
                        className="w-full border-b border-gray-300 bg-transparent pb-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="hero-lastName"
                        className="mb-2 block text-sm text-gray-600"
                      >
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="hero-lastName"
                        placeholder="Smith"
                        required
                        className="w-full border-b border-gray-300 bg-transparent pb-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="hero-phone"
                      className="mb-2 block text-sm text-gray-600"
                    >
                      Phone*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="hero-phone"
                      placeholder="(323) 555-1234"
                      required
                      className="w-full border-b border-gray-300 bg-transparent pb-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="hero-email"
                      className="mb-2 block text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="hero-email"
                      placeholder="john@example.com"
                      className="w-full border-b border-gray-300 bg-transparent pb-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="hero-message"
                      className="mb-2 block text-sm text-gray-600"
                    >
                      Describe Your Issue*
                    </label>
                    <textarea
                      name="message"
                      id="hero-message"
                      rows={3}
                      placeholder="Tell us about your plumbing issue..."
                      required
                      className="w-full resize-none border-b border-gray-300 bg-transparent pb-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                    ></textarea>
                  </div>
                  {status === "error" && (
                    <p className="mb-3 text-sm text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary px-6 py-3 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-primary/80 disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : "Send"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
