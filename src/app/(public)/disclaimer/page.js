import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { contactemailurl, title } from "@/app/utils/common-text";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the disclaimer of Jobs Live Now regarding government job information, results, admit cards, admissions, and third-party links.",
  keywords:
    "Disclaimer, Jobs Live Now Disclaimer, Government Jobs Disclaimer",
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

              <h1 className="mb-4">Disclaimer</h1>

              <p>
                Welcome to <strong>{title}</strong>. The information provided on this website
                is published in good faith and for general informational purposes only.
              </p>

              <h2 className="mt-4">1. Not an Official Government Website</h2>
              <p>
                {title} is not affiliated with any government organization, ministry,
                recruitment board, or official authority. We are an independent informational
                platform.
              </p>

              <h2 className="mt-4">2. Information Accuracy</h2>
              <p>
                We try our best to keep all information accurate and updated. However,
                we do not make any warranties about the completeness, reliability,
                or accuracy of the content.
              </p>

              <p>
                Users are strongly advised to verify all information from the official
                government or organization websites before applying or taking any action.
              </p>

              <h2 className="mt-4">3. No Responsibility</h2>
              <p>
                {title} will not be responsible for any loss, damage, or inconvenience
                caused by the use of information provided on this website.
              </p>

              <h2 className="mt-4">4. External Links</h2>
              <p>
                Our website may contain links to external or official websites.
                We do not control or guarantee the accuracy of content on those websites.
              </p>

              <h2 className="mt-4">5. Advertisement Disclaimer</h2>
              <p>
                This website displays advertisements through Google AdSense and other partners.
                Ads are automatically served and we do not endorse any advertised products or services.
              </p>

              <h2 className="mt-4">6. Consent</h2>
              <p>
                By using our website, you agree to this Disclaimer and its terms.
              </p>

              <h2 className="mt-4">7. Updates</h2>
              <p>
                We may update or modify this Disclaimer at any time without prior notice.
                Changes will be posted on this page.
              </p>

              <h2 className="mt-4">8. Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, you may contact us:
              </p>

              <p>
                <strong>Email:</strong> {contactemailurl}
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