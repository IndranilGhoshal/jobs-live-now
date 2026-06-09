import SocialJoinLink from "@/app/component/SocialJoinLink";
import SocialLinks from "@/app/component/SocialLinks";
import { contactemailurl, title } from "@/app/utils/common-text";

export const metadata = {
  title: "Disclaimer | Jobs Live Now",
  description:
    "Read the disclaimer of Jobs Live Now regarding government job information, results, admit cards, admissions, and third-party links.",
  keywords:
    "Disclaimer, Jobs Live Now Disclaimer, Government Jobs Disclaimer"
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
                Disclaimer
              </h1>

              <p>
                Welcome to <strong>{title}</strong>.
                The information provided on this website is for
                general informational and educational purposes only.
              </p>

              <h2 className="mt-4">
                Not a Government Website
              </h2>

              <p>
                {title} is not a government website and is
                not affiliated with any government department,
                ministry, commission, recruitment board, or
                official authority.
              </p>

              <p>
                We are an independent informational platform that
                collects and publishes government job notifications,
                admit cards, results, answer keys, admissions, and
                other educational updates from publicly available
                official sources.
              </p>

              <h2 className="mt-4">
                Information Accuracy
              </h2>

              <p>
                While we make every effort to provide accurate and
                up-to-date information, we do not guarantee the
                completeness, reliability, or accuracy of any
                information published on this website.
              </p>

              <p>
                Users are strongly advised to verify all details
                through the respective official website before
                submitting applications, paying fees, downloading
                admit cards, or taking any action.
              </p>

              <h2 className="mt-4">
                No Legal Responsibility
              </h2>

              <p>
                {title} shall not be held responsible for
                any loss, damage, or inconvenience caused by the
                use of information available on this website.
              </p>

              <p>
                Any action you take based on information found on
                this website is strictly at your own risk.
              </p>

              <h2 className="mt-4">
                External Links Disclaimer
              </h2>

              <p>
                Our website may contain links to official websites
                and third-party resources. We have no control over
                the content, privacy policies, or practices of
                these external websites.
              </p>

              <p>
                The inclusion of any external link does not imply
                endorsement or recommendation by {title}.
              </p>

              <h2 className="mt-4">
                Advertisement Disclaimer
              </h2>

              <p>
                This website may display advertisements through
                Google AdSense and other advertising partners.
              </p>

              <p>
                We do not endorse or guarantee any product,
                service, or offer displayed in advertisements.
                Users should conduct their own research before
                making any purchase or decision.
              </p>

              <h2 className="mt-4">
                Copyright Notice
              </h2>

              <p>
                All original content published on {title},
                including text, design, and graphics, is protected
                by copyright laws unless otherwise stated.
              </p>

              <p>
                Unauthorized copying, reproduction, or distribution
                of our content is prohibited without prior written
                permission.
              </p>

              <h2 className="mt-4">
                Consent
              </h2>

              <p>
                By using our website, you hereby consent to this
                Disclaimer and agree to its terms.
              </p>

              <h2 className="mt-4">
                Contact Us
              </h2>

              <p>
                If you have any questions regarding this Disclaimer,
                please visit our Contact Us page or email us at:
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