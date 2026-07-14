import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | BizHero Lubricants - Your Trusted Lubricant Partner",
  description:
    "BizHero Lubricants is an authorized distributor of Valvoline, PETRONAS, and Monroe lubricants. We supply a complete range of automotive and industrial lubricants plus maintenance services.",
};

const AboutPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  About BizHero Lubricants
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Your trusted partner for automotive and industrial lubrication solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl">Who We Are</h2>
              <p className="mb-6 text-lg leading-relaxed text-body-color">
                BizHero Lubricants is an authorized distributor of world-class lubricant brands including Valvoline, PETRONAS, and Monroe. We serve automotive workshops, commercial fleets, industrial manufacturers, construction companies, agricultural operations, and heavy equipment operators.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-body-color">
                Unlike typical lubricant retailers, we go beyond product sales. Our team provides technical support for lubricant selection, industrial maintenance services, and predictive maintenance through used oil analysis — helping businesses maintain machinery and reduce costly equipment downtime.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">Why Choose BizHero</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  { title: "Authorized Distributor", desc: "Official distributor of Valvoline, PETRONAS, and Monroe — guaranteed genuine products." },
                  { title: "Complete Product Range", desc: "Engine oils, hydraulic oils, gear oils, greases, and specialty lubricants all in one place." },
                  { title: "Technical Expertise", desc: "Our team helps you select the right lubricant for your specific equipment and application." },
                  { title: "Maintenance Services", desc: "Oil change, sump tank cleaning, and used oil analysis to keep your equipment running smoothly." },
                  { title: "Multi-Industry Solutions", desc: "Manufacturing, construction, transportation, agriculture, logistics, and heavy equipment." },
                  { title: "Predictive Maintenance", desc: "Data-driven insights from used oil analysis help prevent equipment failures before they happen." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-stroke bg-white p-6 shadow-1">
                    <h3 className="mb-3 text-lg font-bold text-dark">{item.title}</h3>
                    <p className="text-base text-body-color">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 sm:p-10">
              <h2 className="mb-6 text-2xl font-bold text-dark">Our Brands</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { name: "Valvoline", desc: "Automotive and industrial lubricants from one of the oldest lubricant brands in the world.", href: "/brands/valvoline" },
                  { name: "PETRONAS", desc: "Industrial and commercial lubricant solutions for heavy-duty applications.", href: "/brands/petronas" },
                  { name: "Monroe", desc: "Metal working fluids for CNC machining, grinding, cutting, and metal processing.", href: "/brands/monroe" },
                ].map((brand, i) => (
                  <Link key={i} href={brand.href} className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md">
                    <h3 className="mb-2 text-lg font-bold text-dark group-hover:text-primary">{brand.name}</h3>
                    <p className="text-sm text-body-color">{brand.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default AboutPage;
