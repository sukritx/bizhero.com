import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | A-1 Total Service Plumbing",
  description:
    "Terms and Conditions for A-1 Total Service Plumbing services and messaging communications.",
};

const TermsPage = () => {
  return (
    <main>
      <section className="pb-20 pt-28 lg:pb-[120px] lg:pt-[150px]">
        <div className="container max-w-4xl">
          <h1 className="mb-10 text-4xl font-bold text-dark dark:text-white sm:text-5xl">
            Terms &amp; Conditions
          </h1>

          <div className="prose prose-lg max-w-none dark:prose-invert text-body-color dark:text-dark-6 space-y-8">
            <p>
              These Terms and Conditions apply to all services provided by A-1 Total Service Plumbing, CA License #1135475. Your use of our services constitutes acceptance of these terms.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">SMS Disclosure</h2>
            <p>
              By opting in to our SMS services, you agree to receive text messages related to <strong>appointment confirmations, service updates, estimates, and other service-related communications</strong>. Message frequency may vary.
            </p>
            <p>
              Standard <strong>message &amp; data rates apply</strong> according to your mobile carrier&apos;s terms.
            </p>
            <p>
              To opt out of SMS communications at any time, reply <strong>STOP</strong> to any message you receive. If you need assistance, you can text <strong>HELP</strong> for support.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Service Agreements</h2>
            <p>
              All plumbing services provided by A-1 Total Service Plumbing are subject to a service agreement between the Company and the Customer. Estimates are provided free of charge and are valid for 30 days unless otherwise stated.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Payment Terms</h2>
            <p>
              Payment is due upon completion of service unless other arrangements have been made in advance. We accept cash, checks, and major credit cards. Financing options are available for qualifying customers.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Warranty</h2>
            <p>
              A-1 Total Service Plumbing warrants all workmanship for a period specified at the time of service. Material warranties are provided by the respective manufacturers. Warranty details will be provided before work begins.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Liability</h2>
            <p>
              A-1 Total Service Plumbing carries full general liability insurance and workers&apos; compensation insurance. As a licensed, bonded, and insured company, our customers are protected during all service operations.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Cancellation Policy</h2>
            <p>
              Scheduled appointments may be cancelled or rescheduled with at least 24 hours notice. Emergency service calls are subject to availability.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Privacy Policy</h2>
            <p>
              Our Privacy Policy outlines how we collect, use, and protect your data. It can be found <a href="/privacy" className="text-primary hover:underline">here</a>.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Changes to Terms and Conditions</h2>
            <p>
              A-1 Total Service Plumbing reserves the right to change these Terms and Conditions at any time. Changes will be communicated through our website or direct communications where feasible.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Contact Information</h2>
            <p>
              For any queries or concerns regarding these Terms and Conditions, please contact A-1 Total Service Plumbing at{" "}
              <a href="tel:3234102068" className="text-primary hover:underline">
                (323) 410-2068
              </a>{" "}
              or{" "}
              <a href="mailto:a1totalserviceplumbing@gmail.com" className="text-primary hover:underline">
                a1totalserviceplumbing@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
