import SocialJoinLink from "@/app/component/SocialJoinLink";
import SocialLinks from "@/app/component/SocialLinks";
import { contactemailurl, title, url } from "@/app/utils/common-text";

export const metadata = {
  title: "Privacy Policy | Jobs Live Now",
  description:
    "Read the Privacy Policy of Jobs Live Now to understand how we collect, use, and protect user information.",
  keywords:
    "Privacy Policy, Jobs Live Now Privacy Policy, Government Jobs Website Policy"
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
                Privacy Policy
              </h1>

              <p>
                At <strong>{title}</strong>, accessible from <a href={url} target="_black">{url}</a>, protecting the privacy of our
                visitors is one of our main priorities. This Privacy
                Policy document explains what information we collect,
                how we use it, and the choices you have regarding your
                information.
              </p>

              <h2 className="mt-4">
                Information We Collect
              </h2>

              <p>
                We may collect personal information such as your name,
                email address, or other details only when you voluntarily
                provide them through contact forms or email communication.
              </p>

              <p>
                We also automatically collect certain non-personal
                information including browser type, device information,
                IP address, pages visited, and time spent on our website.
              </p>

              <h2 className="mt-4">
                How We Use Information
              </h2>

              <ul>
                <li>To improve website performance and user experience.</li>
                <li>To respond to user inquiries and support requests.</li>
                <li>To analyze website traffic and visitor behavior.</li>
                <li>To provide relevant content and updates.</li>
                <li>To maintain website security and prevent misuse.</li>
              </ul>

              <h2 className="mt-4">
                Cookies
              </h2>

              <p>
                {title} uses cookies to improve user experience.
                Cookies help us understand visitor preferences and
                optimize website functionality. You can disable cookies
                through your browser settings if you prefer.
              </p>

              <h2 className="mt-4">
                Google AdSense and Advertising Partners
              </h2>

              <p>
                We may use Google AdSense and other advertising partners
                to display advertisements on our website.
              </p>

              <p>
                Google uses cookies, including the DART cookie, to serve
                ads based on users' visits to this website and other
                websites on the internet.
              </p>

              <p>
                Users may opt out of personalized advertising by visiting
                Google's Ads Settings page.
              </p>

              <h2 className="mt-4">
                Third-Party Services
              </h2>

              <p>
                We may use third-party services such as analytics tools,
                advertising networks, and hosting providers. These
                services may collect information according to their own
                privacy policies.
              </p>

              <h2 className="mt-4">
                Data Security
              </h2>

              <p>
                We take reasonable measures to protect user information.
                However, no method of transmission over the internet is
                completely secure, and we cannot guarantee absolute
                security.
              </p>

              <h2 className="mt-4">
                Children's Information
              </h2>

              <p>
                {title} does not knowingly collect personal
                information from children under the age of 13. If you
                believe your child has provided such information, please
                contact us immediately so we can remove it.
              </p>

              <h2 className="mt-4">
                External Links
              </h2>

              <p>
                Our website may contain links to third-party websites.
                We are not responsible for the privacy practices or
                content of those external websites.
              </p>

              <h2 className="mt-4">
                Consent
              </h2>

              <p>
                By using our website, you hereby consent to our Privacy
                Policy and agree to its terms.
              </p>

              <h2 className="mt-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time.
                Any changes will be posted on this page along with the
                updated effective date.
              </p>

              <h2 className="mt-4">
                Contact Us
              </h2>

              <p>
                If you have any questions regarding this Privacy Policy,
                please contact us through our Contact Us page or email us
                at {contactemailurl}.
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