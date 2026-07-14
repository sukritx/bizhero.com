import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Maria G.",
    designation: "Homeowner, Los Angeles",
    content:
      "A-1 Total Service Plumbing responded within an hour when we had a burst pipe at 2 AM. Their technician was professional, explained everything clearly, and had the repair done quickly. Fair pricing with no surprises. Highly recommend!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "David R.",
    designation: "Property Manager, Orange County",
    content:
      "We've been using A-1 for our commercial properties for over 3 years. Their trenchless pipe relining saved us from having to dig up our parking lot. Professional team, transparent pricing, and they always show up on time.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Sarah K.",
    designation: "Homeowner, Anaheim",
    content:
      "Best plumbing experience I've ever had. They did a sewer camera inspection first so I could actually see the problem, then walked me through all my options. No pressure, no upselling. The hydro jetting service was incredible — pipes are flowing perfectly now!",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Customer Reviews"
          title="What Our Customers Say"
          paragraph="Rated 4.9/5 from 1,400+ reviews — see why Southern California trusts A-1 Total Service Plumbing"
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
