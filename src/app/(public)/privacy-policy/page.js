import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { contactemailurl, title, url } from "@/app/utils/common-text";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Jobs Live Now to understand how we collect, use, and protect user data.",
  keywords:
    "Privacy Policy, Jobs Live Now Privacy Policy, Govt Jobs Website Policy"
};

export default function Page() {
  return (
    <div className="container txt-cont py-5">

      <SocialJoinLink />

      <div className="card shadow-sm border-0 mt-3">
        <div className="card-body p-4">

          <h1 className="mb-3">Privacy Policy</h1>

          <p>
            At <strong>{title}</strong>, accessible from{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>, one of our main priorities is the privacy of our visitors.
            This Privacy Policy document explains what information we collect,
            how we use it, and how we protect it.
          </p>

          <h2 className="mt-4">Information We Collect</h2>

          <p>
            We collect information from users in two ways:
          </p>

          <ul>
            <li><b>Direct Information:</b> Name, email, and message submitted through contact forms.</li>
            <li><b>Automatic Information:</b> IP address, browser type, device information, and pages visited.</li>
          </ul>

          <h2 className="mt-4">How We Use Information</h2>

          <ul>
            <li>To improve website performance and user experience</li>
            <li>To respond to user queries and support requests</li>
            <li>To prevent spam and misuse</li>
            <li>To analyze website traffic and trends</li>
            <li>To show relevant advertisements (Google AdSense)</li>
          </ul>

          <h2 className="mt-4">Cookies</h2>

          <p>
            {title} uses cookies to improve browsing experience.
            Cookies help us understand user behavior and improve content.
            Users can disable cookies anytime from browser settings.
          </p>

          <h2 className="mt-4">Google AdSense</h2>

          <p>
            We use Google AdSense to display advertisements.
            Google may use cookies (including DART cookies) to show ads
            based on your visits to this and other websites.
          </p>

          <p>
            You may opt out of personalized ads by visiting Google Ads Settings.
          </p>

          <h2 className="mt-4">Third-Party Services</h2>

          <p>
            We may use third-party services like analytics tools and advertising
            networks. These services may collect data according to their own
            privacy policies.
          </p>

          <h2 className="mt-4">Data Security</h2>

          <p>
            We take reasonable steps to protect your data, but no method of
            online transmission is 100% secure.
          </p>

          <h2 className="mt-4">Children's Privacy</h2>

          <p>
            We do not knowingly collect personal information from children under
            the age of 13. If such data is found, it will be removed immediately.
          </p>

          <h2 className="mt-4">External Links</h2>

          <p>
            Our website may contain links to external sites. We are not
            responsible for their content or privacy practices.
          </p>

          <h2 className="mt-4">Consent</h2>

          <p>
            By using our website, you agree to this Privacy Policy.
          </p>

          <h2 className="mt-4">Updates</h2>

          <p>
            We may update this Privacy Policy from time to time.
            Changes will be posted on this page.
          </p>

          <h2 className="mt-4">Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy, you can contact us:
          </p>

          <p>
            <b>Email:</b> {contactemailurl}
          </p>

        </div>
      </div>

      <SocialLinks />
    </div>
  );
}