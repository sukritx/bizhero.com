import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { services, getServiceBySlug } from "@/data/servicesData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | BizHero Lubricants`,
    description: service.tagline,
  };
}

const ServicePage = async ({ params }: Props) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  {service.title}
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  {service.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-12 rounded-xl bg-gray-50 p-8 sm:p-10">
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg sm:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
              <h2 className="mb-6 text-2xl font-bold text-dark">
                About This Service
              </h2>
              <p className="text-lg leading-relaxed text-body-color">
                {service.description}
              </p>
            </div>

            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-stroke bg-white p-8 shadow-1">
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-base text-body-color"
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-stroke bg-white p-8 shadow-1">
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Suitable For
                </h3>
                <ul className="space-y-3">
                  {service.suitableFor.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-base text-body-color"
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="https://share-na2.hsforms.com/283IRhHVgQLuB-uFLk7V9cQ40ae96"
                className="inline-flex items-center justify-center bg-primary px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
              >
                Inquire About {service.title}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServicePage;
