import SocialJoinLink from "@/app/component/SocialJoinLink";
import SocialLinks from "@/app/component/SocialLinks";
import { title } from "@/app/utils/common-text";

export const metadata = {
  title: "Terms and Conditions | Jobs Live Now",
  description:
    "Read the Terms and Conditions for using Jobs Live Now. Learn about user responsibilities, website usage, content policies, and limitations.",
  keywords:
    "Terms and Conditions, Jobs Live Now Terms, Website Terms, Government Jobs Portal"
};

export default function Page() {

  return (
    <div className="container py-5">

      <div className="row">
        <div className="col-md-12">
          <SocialJoinLink />
        </div>
        <div className="col-md-12">

          <div className="card shadow-sm border-0">

            <div className="card-body p-4">

              <h1 className="mb-4">
                Terms and Conditions
              </h1>

              <p>
                Welcome to <strong>{title}</strong>.
                By accessing and using our website, you agree
                to comply with and be bound by the following
                Terms and Conditions. If you do not agree with
                any part of these terms, please discontinue use
                of our website.
              </p>

              <h2 className="mt-4">
                Use of Website
              </h2>

              <p>
                {title} provides information related to
                government jobs, admit cards, results, answer
                keys, admissions, and educational updates.
                The information published on this website is
                intended for general informational purposes only.
              </p>

              <h2 className="mt-4">
                Accuracy of Information
              </h2>

              <p>
                While we strive to keep information accurate and
                up-to-date, we do not guarantee the completeness,
                reliability, or accuracy of any information
                published on this website. Users should always
                verify important details from the official
                government or recruitment authority websites.
              </p>

              <h2 className="mt-4">
                Intellectual Property
              </h2>

              <p>
                All content on this website, including text,
                design, graphics, logos, and other materials,
                is the property of {title} unless otherwise
                stated. Unauthorized copying, reproduction, or
                redistribution of content is prohibited.
              </p>

              <h2 className="mt-4">
                User Responsibilities
              </h2>

              <ul>
                <li>Use the website only for lawful purposes.</li>
                <li>Do not attempt to harm, hack, or disrupt the website.</li>
                <li>Do not misuse website content or services.</li>
                <li>Respect applicable laws and regulations.</li>
              </ul>

              <h2 className="mt-4">
                Third-Party Links
              </h2>

              <p>
                Our website may contain links to external websites
                for additional information or official notifications.
                We are not responsible for the content, policies,
                or practices of third-party websites.
              </p>

              <h2 className="mt-4">
                Advertisement Policy
              </h2>

              <p>
                {title} may display advertisements through
                Google AdSense and other advertising partners.
                Advertisements displayed on our website do not
                imply endorsement of any product, service, or
                organization.
              </p>

              <h2 className="mt-4">
                Limitation of Liability
              </h2>

              <p>
                {title} shall not be held liable for any
                direct, indirect, incidental, or consequential
                damages arising from the use of this website or
                reliance on information provided herein.
              </p>

              <h2 className="mt-4">
                Changes to Terms
              </h2>

              <p>
                We reserve the right to modify these Terms and
                Conditions at any time without prior notice.
                Changes will be effective immediately upon posting
                on this page.
              </p>

              <h2 className="mt-4">
                Governing Law
              </h2>

              <p>
                These Terms and Conditions shall be governed by
                and interpreted in accordance with the laws of India.
              </p>

              <h2 className="mt-4">
                Contact Us
              </h2>

              <p>
                If you have any questions regarding these Terms
                and Conditions, please contact us through our
                Contact Us page.
              </p>

            </div>

          </div>
        </div>
        <div className="col-md-12">
          <SocialLinks />
        </div>
      </div>

    </div>
  );
}