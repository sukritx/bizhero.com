import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | A-1 Total Service Plumbing - Free Estimates",
  description:
    "Contact A-1 Total Service Plumbing for a free estimate. Available 24/7 for emergency plumbing in Los Angeles and Orange County. Call (323) 410-2068 or fill out our online form.",
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
