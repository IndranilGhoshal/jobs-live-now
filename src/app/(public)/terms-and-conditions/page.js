import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { title } from "@/app/utils/common-text";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Read the Terms and Conditions for using Jobs Live Now. Learn about website usage, responsibilities, content policy, and limitations.",
  keywords:
    "Terms and Conditions, Jobs Live Now Terms, Website Rules, Government Jobs Portal Policy",
};

export default function Page() {
  return (
    <div className="container txt-cont py-5">
      <div className="row">
        <div className="col-md-12">
          <SocialJoinLink />
        </div>

        <div className="col-md-12">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">

              <h1 className="mb-4">Terms and Conditions</h1>

              <p>
                Welcome to <strong>{title}</strong>. By accessing or using this website,
                you agree to comply with and be bound by these Terms and Conditions.
                If you do not agree with any part of these terms, please do not use
                our website.
              </p>

              <h2 className="mt-4">1. Use of Website</h2>
              <p>
                {title} provides information related to government jobs, admit cards,
                results, answer keys, admissions, and other career-related updates.
                All content is provided for general informational purposes only.
              </p>

              <h2 className="mt-4">2. Information Accuracy</h2>
              <p>
                We try our best to keep all information accurate and updated.
                However, we do not guarantee completeness or accuracy. Users should
                always verify details from official government websites before applying.
              </p>

              <h2 className="mt-4">3. External Links</h2>
              <p>
                Our website may contain links to third-party or official websites.
                We are not responsible for the content, policies, or accuracy of
                external sites.
              </p>

              <h2 className="mt-4">4. User Responsibility</h2>
              <ul>
                <li>Use the website only for lawful purposes.</li>
                <li>Do not misuse or copy content without permission.</li>
                <li>Verify all job information from official sources.</li>
                <li>Do not attempt to damage or hack the website.</li>
              </ul>

              <h2 className="mt-4">5. Advertisement Policy</h2>
              <p>
                This website may display advertisements through Google AdSense and
                other networks. Ads are automatically served and we do not control
                individual ad content.
              </p>

              <h2 className="mt-4">6. Limitation of Liability</h2>
              <p>
                {title} is not responsible for any loss, damage, or issues arising
                from the use of information on this website. Users are responsible
                for their own actions based on the content.
              </p>

              <h2 className="mt-4">7. Intellectual Property</h2>
              <p>
                All content, design, and structure of this website are owned by
                {title} unless otherwise stated. Unauthorized copying or reuse is
                strictly prohibited.
              </p>

              <h2 className="mt-4">8. Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions at any time without prior notice.
                Changes will be posted on this page with the updated date.
              </p>

              <h2 className="mt-4">9. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of India.
              </p>

              <h2 className="mt-4">10. Contact Us</h2>
              <p>
                If you have any questions regarding these Terms, please contact us
                via the Contact Us page.
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