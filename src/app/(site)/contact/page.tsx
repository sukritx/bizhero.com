import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BizHero Lubricants - Request a Quote",
  description:
    "Contact BizHero Lubricants for product inquiries, technical support, maintenance services, and used oil analysis. Request a quote or get expert advice on lubricant selection.",
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
