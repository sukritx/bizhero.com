import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ContactWidget from "@/components/Contact/ContactWidget";
import ScrollUp from "@/components/Common/ScrollUp";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ContactWidget />
      <ScrollToTop />
      <ScrollUp />
    </>
  );
}
