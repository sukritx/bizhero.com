import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | A-1 Total Service Plumbing",
  description:
    "Privacy Policy for A-1 Total Service Plumbing - learn how we collect, use, and protect your personal data.",
};

const PrivacyPage = () => {
  return (
    <main>
      <section className="pb-20 pt-28 lg:pb-[120px] lg:pt-[150px]">
        <div className="container max-w-4xl">
          <h1 className="mb-10 text-4xl font-bold text-dark dark:text-white sm:text-5xl">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none dark:prose-invert text-body-color dark:text-dark-6 space-y-8">
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You contact our business or use our website. We use Your Personal Data to provide plumbing services, contact you regarding service requests, and improve our Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Mobile Communication Policy</h2>
            <p>
              We value your privacy and are committed to protecting your personal information. When you provide your mobile number, you consent to receive SMS messages related to our plumbing services, appointment confirmations, and service updates. Your mobile opt-in will <strong>not</strong> be shared with third parties for marketing purposes.
            </p>
            <p>
              <strong>Opt-Out Instructions:</strong> You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message you receive from us.
            </p>
            <p>
              <strong>Support:</strong> If you need assistance with our SMS communications, you can text <strong>HELP</strong> for more information.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Interpretation and Definitions</h2>

            <h3 className="text-xl font-bold text-dark dark:text-white">Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to A-1 Total Service Plumbing, CA License #1135475.
              </li>
              <li>
                <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.
              </li>
              <li>
                <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
              </li>
              <li>
                <strong>Service</strong> refers to the website or plumbing services provided.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Collecting and Using Your Personal Data</h2>

            <h3 className="text-xl font-bold text-dark dark:text-white">Types of Data Collected</h3>
            <p>
              When you contact us for plumbing services, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Service address / Location details</li>
              <li>Description of plumbing issue</li>
            </ul>

            <h3 className="text-xl font-bold text-dark dark:text-white">Use of Your Personal Data</h3>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and schedule plumbing services.</li>
              <li>To contact You via email, phone, or SMS about appointments, estimates, or service updates.</li>
              <li>To manage Your service requests and respond to inquiries.</li>
              <li>For legal compliance and security purposes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Security of Your Personal Data</h2>
            <p>
              The security of Your Personal Data is important to Us, but no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Changes to This Privacy Policy</h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, You can contact us at{" "}
              <a href="tel:3234102068" className="text-primary hover:underline">
                (323) 410-2068
              </a>{" "}
              or via email at{" "}
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

export default PrivacyPage;
