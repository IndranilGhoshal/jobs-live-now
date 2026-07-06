import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { contactemailurl, title, url } from "@/app/utils/common-text";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "DMCA Policy",
  description:
    "Read the DMCA Policy of Jobs Live Now to understand our copyright practices, content ownership, and how to report copyright infringement.",
  keywords:
    "DMCA Policy, Copyright Policy, Jobs Live Now DMCA, Copyright Infringement, Digital Millennium Copyright Act",
};

export default function Page() {
  return (
    <div className="container txt-cont py-5">

      <SocialJoinLink />

      <div className="card shadow-sm border-0 mt-3">

        <div className="card-body p-4">

          <h1 className="mb-3">DMCA Policy</h1>

          <p>
            At <strong>{title}</strong>, we respect the intellectual property
            rights of others and expect our users to do the same. This DMCA
            Policy outlines our procedures for handling copyright infringement
            claims in accordance with applicable copyright laws.
          </p>

          <h2 className="mt-4">Copyright Ownership</h2>

          <p>
            Unless otherwise stated, all original content published on{" "}
            <strong>{title}</strong>, including articles, text, graphics,
            website design, logos, icons, and other materials, is the property
            of {title} and is protected under applicable copyright laws.
          </p>

          <p>
            Unauthorized copying, reproduction, distribution, modification,
            republication, or commercial use of our original content without
            written permission is strictly prohibited.
          </p>

          <h2 className="mt-4">Third-Party Content</h2>

          <p>
            Some recruitment information, organization names, logos,
            notification PDFs, and official links displayed on our website
            belong to their respective owners. These are provided solely for
            informational and educational purposes.
          </p>

          <h2 className="mt-4">Reporting Copyright Infringement</h2>

          <p>
            If you believe that any material available on our website infringes
            your copyright, you may submit a copyright infringement notice.
            Please provide sufficient information so that we can investigate
            your request.
          </p>

          <h2 className="mt-4">Your DMCA Notice Should Include</h2>

          <ul>
            <li>Your full name and contact information.</li>
            <li>Your email address and phone number.</li>
            <li>A description of the copyrighted work.</li>
            <li>The exact URL of the allegedly infringing content.</li>
            <li>Proof that you own or are authorized to act on behalf of the copyright owner.</li>
            <li>A statement that the information provided is accurate.</li>
            <li>Your physical or electronic signature.</li>
          </ul>

          <h2 className="mt-4">Our Response</h2>

          <p>
            Upon receiving a valid copyright complaint, our team will carefully
            review the request. If the claim is found to be legitimate, we may
            remove, restrict, or modify the reported content within a reasonable
            period of time.
          </p>

          <h2 className="mt-4">Counter Notification</h2>

          <p>
            If you believe that your content has been removed by mistake or
            misidentification, you may submit a counter-notification with
            supporting evidence. We will review the request in accordance with
            applicable laws.
          </p>

          <h2 className="mt-4">Repeat Infringers</h2>

          <p>
            We reserve the right to remove content or restrict access to users
            who repeatedly violate copyright laws or intellectual property
            rights.
          </p>

          <h2 className="mt-4">Good Faith Statement</h2>

          <p>
            All copyright complaints must be submitted in good faith.
            Knowingly submitting false or misleading claims may result in legal
            liability under applicable law.
          </p>

          <h2 className="mt-4">Important Disclaimer</h2>

          <p>
            {title} is an independent informational website. We do not claim
            ownership of official government notifications, recruitment
            advertisements, examination notices, or organization logos. All
            trademarks and copyrights belong to their respective owners.
          </p>

          <h2 className="mt-4">Contact Us</h2>

          <p>
            If you wish to report copyright infringement or have any questions
            regarding this DMCA Policy, please contact us:
          </p>

          <p>
            <strong>Email:</strong> {contactemailurl}
          </p>

          <p>
            <strong>Website:</strong>{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </p>

        </div>

      </div>

      <SocialLinks />

    </div>
  );
}