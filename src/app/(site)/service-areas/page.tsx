import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | A-1 Total Service Plumbing - Los Angeles & Orange County",
  description:
    "A-1 Total Service Plumbing serves Los Angeles County, Orange County, South Bay, East LA, Anaheim, La Habra, and beyond. Nationwide trenchless pipe relining support available.",
  keywords:
    "plumber Los Angeles County, plumber Orange County, plumber Anaheim, plumber La Habra, plumber South Bay, plumber East Los Angeles, trenchless pipe repair nationwide",
};

const areas = [
  {
    id: "los-angeles-county",
    title: "Los Angeles County",
    description:
      "Our main service hub serving greater Los Angeles County. We cover a wide area including Commerce, Vernon, Monterey Park, Montebello, and all surrounding communities. Whether you're in downtown LA, the San Gabriel Valley, or anywhere in between, A-1 Total Service Plumbing is ready to help.",
    cities: [
      "Los Angeles",
      "Commerce",
      "Vernon",
      "Monterey Park",
      "Montebello",
      "Alhambra",
      "San Gabriel",
      "Rosemead",
      "El Monte",
      "Pico Rivera",
      "Whittier",
      "Downey",
      "Norwalk",
      "Cerritos",
      "Long Beach",
      "Torrance",
      "Carson",
      "Glendale",
      "Burbank",
      "Pasadena",
    ],
  },
  {
    id: "orange-county",
    title: "Orange County",
    description:
      "Our Orange County office serves Anaheim, La Habra, and surrounding areas. From Fullerton to Irvine, Santa Ana to Huntington Beach, we provide full-service plumbing solutions to residential, commercial, and municipal clients throughout Orange County.",
    cities: [
      "Anaheim",
      "La Habra",
      "Fullerton",
      "Orange",
      "Santa Ana",
      "Irvine",
      "Huntington Beach",
      "Costa Mesa",
      "Newport Beach",
      "Garden Grove",
      "Westminster",
      "Buena Park",
      "Cypress",
      "Stanton",
      "Brea",
      "Yorba Linda",
      "Placentia",
    ],
  },
  {
    id: "south-bay",
    title: "South Bay",
    description:
      "Serving the South Bay region of Los Angeles County, including the beach cities and inland communities. Our team provides fast response times for all plumbing needs in the South Bay area.",
    cities: [
      "Torrance",
      "Redondo Beach",
      "Hermosa Beach",
      "Manhattan Beach",
      "Palos Verdes",
      "Lomita",
      "Carson",
      "San Pedro",
      "Wilmington",
      "Harbor City",
    ],
  },
  {
    id: "east-la",
    title: "East Los Angeles",
    description:
      "Proudly serving East Los Angeles and surrounding communities. We have deep roots in the East LA area and provide reliable, affordable plumbing services to homeowners and businesses in this community.",
    cities: [
      "East Los Angeles",
      "Boyle Heights",
      "Lincoln Heights",
      "El Sereno",
      "City Terrace",
      "Belmont",
      "Highland Park",
      "Eagle Rock",
    ],
  },
];

const ServiceAreasPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Our Service Areas
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  A-1 Total Service Plumbing proudly serves communities throughout Southern California. With offices in Los Angeles County and Orange County, we provide fast, reliable plumbing services where you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          {areas.map((area, index) => (
            <div key={index} id={area.id} className="mb-16 last:mb-0">
              <div className="rounded-xl border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2 md:p-12">
                <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-3xl">
                  {area.title}
                </h2>
                <p className="mb-8 max-w-3xl text-base leading-relaxed text-body-color dark:text-dark-6">
                  {area.description}
                </p>
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                    Cities We Serve:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map((city, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
                >
                  Request Service in {area.title}
                </Link>
              </div>
            </div>
          ))}

          <div className="mt-16 rounded-xl border-2 border-primary bg-primary/5 p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-3xl">
              Nationwide Trenchless Support
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-body-color dark:text-dark-6">
              While our daily operations focus on Southern California, our trenchless pipe relining (CIPP) capabilities are available for industrial and municipal projects nationwide. Contact us to discuss your trenchless project regardless of location.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServiceAreasPage;
