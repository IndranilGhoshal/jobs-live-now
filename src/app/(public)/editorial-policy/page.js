import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { contactemailurl, title, url } from "@/app/utils/common-text";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Editorial Policy",
  description:
    "Read the Editorial Policy of Jobs Live Now to understand our content creation process, editorial standards, and commitment to providing accurate job-related information.",
  keywords:
    "Editorial Policy, Jobs Live Now Editorial Policy, Government Jobs Editorial Guidelines, Recruitment News Policy",
};

export default function Page() {
  return (
    <div className="container txt-cont py-5">

      <SocialJoinLink />

      <div className="card shadow-sm border-0 mt-3">

        <div className="card-body p-4">

          <h1 className="mb-3">Editorial Policy</h1>

          <p>
            At <strong>{title}</strong>, our mission is to provide accurate,
            reliable, and timely information related to Government Jobs,
            Private Jobs, Results, Admit Cards, Answer Keys, Syllabus,
            Admissions, Scholarships, and Career Opportunities.
          </p>

          <p>
            We understand that thousands of job seekers rely on our content
            every day. Therefore, we follow strict editorial standards to
            ensure that the information published on our website is trustworthy,
            transparent, and easy to understand.
          </p>

          <h2 className="mt-4">Our Editorial Mission</h2>

          <p>
            Our goal is to simplify official recruitment notifications and
            present them in a clear format so that candidates can easily
            understand eligibility, important dates, application procedures,
            selection process, and other essential details.
          </p>

          <h2 className="mt-4">Editorial Standards</h2>

          <ul>
            <li>Accuracy and factual reporting</li>
            <li>Transparency in content creation</li>
            <li>Reader-focused writing style</li>
            <li>Regular review and content updates</li>
            <li>Easy-to-understand language</li>
            <li>No misleading or sensational headlines</li>
          </ul>

          <h2 className="mt-4">Sources of Information</h2>

          <p>
            Before publishing any recruitment article, our editorial team
            verifies information from official and publicly available sources,
            including:
          </p>

          <ul>
            <li>Official Government Department Websites</li>
            <li>Official Recruitment Notifications (PDF)</li>
            <li>Public Service Commission Websites</li>
            <li>Employment News Publications</li>
            <li>Official University Websites</li>
            <li>Government Press Releases</li>
          </ul>

          <h2 className="mt-4">Content Review Process</h2>

          <p>
            Every article goes through an editorial review before publication.
            Our team checks important details such as eligibility criteria,
            educational qualifications, age limit, application dates, salary,
            selection process, application fees, and official website links.
          </p>

          <h2 className="mt-4">Content Updates</h2>

          <p>
            Recruitment notifications may change after publication.
            Whenever an official authority releases a correction,
            extension notice, revised schedule, or new information,
            we update our articles as quickly as possible.
          </p>

          <h2 className="mt-4">Editorial Independence</h2>

          <p>
            Our editorial decisions are completely independent.
            Advertisers, sponsors, or third parties do not influence
            the content published on {title}.
          </p>

          <h2 className="mt-4">Corrections Policy</h2>

          <p>
            Despite our best efforts, mistakes can occasionally occur.
            If any factual error is identified, our editorial team reviews
            the issue promptly and updates the article whenever necessary.
          </p>

          <h2 className="mt-4">User Feedback</h2>

          <p>
            We welcome suggestions, corrections, and feedback from our readers.
            If you notice any inaccurate or outdated information,
            please let us know so that we can review and improve the content.
          </p>

          <h2 className="mt-4">Editorial Ethics</h2>

          <ul>
            <li>We never intentionally publish false information.</li>
            <li>We respect copyright laws and intellectual property rights.</li>
            <li>We always aim to provide unbiased information.</li>
            <li>We encourage users to verify important details from official websites before applying.</li>
          </ul>

          <h2 className="mt-4">Official Website Disclaimer</h2>

          <p>
            {title} is an independent informational website and is not
            affiliated with any Government organization, recruitment board,
            commission, university, or examination authority.
          </p>

          <p>
            Candidates are strongly advised to verify important recruitment
            information by visiting the official website linked within each
            article before submitting an application.
          </p>

          <h2 className="mt-4">Contact Us</h2>

          <p>
            If you have any questions regarding our Editorial Policy,
            you may contact us at:
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