import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { contactemailurl, title, url } from "@/app/utils/common-text";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Fact Check Policy",
  description:
    "Learn about the Fact Check Policy of Jobs Live Now and how we verify recruitment information before publishing.",
  keywords:
    "Fact Check Policy, Jobs Live Now, Government Jobs, Recruitment Verification, Official Notifications",
};

export default function Page() {
  return (
    <div className="container txt-cont py-5">

      <SocialJoinLink />

      <div className="card shadow-sm border-0 mt-3">

        <div className="card-body p-4">

          <h1 className="mb-3">Fact Check Policy</h1>

          <p>
            At <strong>{title}</strong>, we are committed to providing accurate,
            reliable, and up-to-date information related to Government Jobs,
            Private Jobs, Results, Admit Cards, Answer Keys, Admissions,
            Scholarships, and Career Updates.
          </p>

          <p>
            We understand that our readers rely on us for important career-related
            decisions. Therefore, every article published on our website follows
            a structured fact-checking process before it goes live.
          </p>

          <h2 className="mt-4">Our Fact-Checking Process</h2>

          <p>
            Before publishing any recruitment-related content, our editorial team
            carefully reviews and verifies all important information from official
            and publicly available sources.
          </p>

          <ul>
            <li>Official Recruitment Notifications</li>
            <li>Government Department Websites</li>
            <li>Official Public Service Commission Websites</li>
            <li>Official University Websites</li>
            <li>Employment News Publications</li>
            <li>Government Press Releases</li>
          </ul>

          <h2 className="mt-4">Information We Verify</h2>

          <p>
            Our editorial team cross-checks the following information before
            publishing an article:
          </p>

          <ul>
            <li>Recruitment Organization Name</li>
            <li>Post Name</li>
            <li>Number of Vacancies</li>
            <li>Educational Qualification</li>
            <li>Age Limit</li>
            <li>Application Fees</li>
            <li>Selection Process</li>
            <li>Salary Details</li>
            <li>Important Dates</li>
            <li>Official Website Links</li>
            <li>Official Notification PDF</li>
          </ul>

          <h2 className="mt-4">Use of Official Sources</h2>

          <p>
            Whenever possible, we rely on official recruitment notifications and
            government websites as our primary source of information. We do not
            intentionally publish information from unverified or unreliable
            sources.
          </p>

          <h2 className="mt-4">Content Review</h2>

          <p>
            Every article is reviewed by our editorial team before publication to
            ensure that the information is accurate, properly formatted, and easy
            for readers to understand.
          </p>

          <h2 className="mt-4">Regular Updates</h2>

          <p>
            Recruitment information may change due to official announcements,
            corrigendums, date extensions, or revised notifications.
            Whenever such updates are released, we revise our articles as soon as
            reasonably possible.
          </p>

          <h2 className="mt-4">Error Corrections</h2>

          <p>
            Although we make every effort to ensure accuracy, occasional errors
            may occur. If any factual mistake is identified, we promptly review
            the issue and update the content where necessary.
          </p>

          <h2 className="mt-4">Reader Feedback</h2>

          <p>
            We encourage readers to report any incorrect or outdated information.
            User feedback helps us improve the quality and reliability of our
            content.
          </p>

          <h2 className="mt-4">Transparency</h2>

          <p>
            We believe in maintaining transparency throughout our editorial and
            fact-checking process. Whenever significant changes are made to an
            article, we aim to update the content accordingly.
          </p>

          <h2 className="mt-4">Important Disclaimer</h2>

          <p>
            While we strive to provide accurate information, readers should
            always verify important recruitment details through the official
            notification and the official website before submitting any
            application.
          </p>

          <h2 className="mt-4">Contact Us</h2>

          <p>
            If you have any questions or wish to report an error regarding our
            Fact Check Policy, please contact us:
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