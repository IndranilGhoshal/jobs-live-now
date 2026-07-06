import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { contactemailurl, title, url } from "@/app/utils/common-text";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Read the Cookie Policy of Jobs Live Now to understand how we use cookies and similar technologies to improve your browsing experience.",
  keywords:
    "Cookie Policy, Jobs Live Now Cookie Policy, Cookies, Google AdSense Cookies, Website Cookies",
};

export default function Page() {
  return (
    <div className="container txt-cont py-5">

      <SocialJoinLink />

      <div className="card shadow-sm border-0 mt-3">

        <div className="card-body p-4">

          <h1 className="mb-3">Cookie Policy</h1>

          <p>
            This Cookie Policy explains how <strong>{title}</strong> uses
            cookies and similar technologies when you visit our website at{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>.
            By continuing to browse or use our website, you agree to our use of
            cookies as described in this policy.
          </p>

          <h2 className="mt-4">What Are Cookies?</h2>

          <p>
            Cookies are small text files that are stored on your computer,
            smartphone, or other device when you visit a website. They help
            websites recognize returning visitors, remember user preferences,
            and improve the overall browsing experience.
          </p>

          <h2 className="mt-4">How We Use Cookies</h2>

          <p>
            {title} uses cookies for various purposes to enhance the quality and
            functionality of our website.
          </p>

          <ul>
            <li>To improve website performance and loading speed.</li>
            <li>To remember user preferences and settings.</li>
            <li>To analyze visitor behavior and website traffic.</li>
            <li>To understand how users interact with our content.</li>
            <li>To maintain website security and prevent abuse.</li>
            <li>To provide a better overall user experience.</li>
          </ul>

          <h2 className="mt-4">Google AdSense Cookies</h2>

          <p>
            We display advertisements through Google AdSense. Google and its
            partners may use cookies to serve personalized ads based on your
            previous visits to our website and other websites.
          </p>

          <p>
            Google's advertising cookies help deliver ads that are more relevant
            to your interests while measuring advertising performance.
          </p>

          <h2 className="mt-4">Google Analytics</h2>

          <p>
            We may use Google Analytics or similar analytics services to
            understand how visitors use our website. These services use cookies
            to collect anonymous information such as:
          </p>

          <ul>
            <li>Pages visited</li>
            <li>Time spent on the website</li>
            <li>Device and browser information</li>
            <li>General geographic location</li>
            <li>Traffic sources</li>
          </ul>

          <h2 className="mt-4">Third-Party Cookies</h2>

          <p>
            Some third-party services integrated into our website may place
            their own cookies on your device. These services may include:
          </p>

          <ul>
            <li>Google AdSense</li>
            <li>Google Analytics</li>
            <li>Social Media Platforms</li>
            <li>Embedded Videos or External Content</li>
          </ul>

          <p>
            These third-party services operate under their own privacy and
            cookie policies, and we encourage users to review those policies
            separately.
          </p>

          <h2 className="mt-4">Managing Cookies</h2>

          <p>
            Most web browsers allow you to manage, block, or delete cookies
            through browser settings. You may choose to disable cookies at any
            time; however, doing so may affect certain features and
            functionality of our website.
          </p>

          <h2 className="mt-4">Consent</h2>

          <p>
            By using <strong>{title}</strong>, you consent to our use of cookies
            in accordance with this Cookie Policy.
          </p>

          <h2 className="mt-4">Policy Updates</h2>

          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in technology, legal requirements, or our website
            practices. Any updates will be published on this page with
            immediate effect.
          </p>

          <h2 className="mt-4">Contact Us</h2>

          <p>
            If you have any questions regarding our Cookie Policy or the way we
            use cookies, please contact us:
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