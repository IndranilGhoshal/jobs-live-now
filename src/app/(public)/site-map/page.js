import SocialJoinLink from "@/app/component/SocialJoinLink";
import SocialLinks from "@/app/component/SocialLinks";
import { title } from "@/app/utils/common-text";
import Link from "next/link";

export const metadata = {
  title: "Site Map | Jobs Live Now",
  description:
    "Browse all important pages and categories available on Jobs Live Now.",
  keywords:
    "Site Map, Jobs Live Now Sitemap, Govt Jobs Sitemap"
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
                Site Map
              </h1>

              <p>
                Welcome to the <b>{title}</b> site map page.
                Here you can find quick links to all major
                sections and pages of our website.
              </p>

              <hr />

              <h2>Main Pages</h2>

              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/about-us">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/contact-us">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/terms-and-conditions">
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link href="/disclaimer">
                    Disclaimer
                  </Link>
                </li>

                <li>
                  <Link href="/site-map">
                    Site Map
                  </Link>
                </li>
              </ul>

              <hr />

              <h2>Job Categories</h2>

              <ul>
                <li>
                  <Link href="/top-online-form">
                    Top Online Form
                  </Link>
                </li>

                <li>
                  <Link href="/category/admit-card">
                    Admit Card
                  </Link>
                </li>

                <li>
                  <Link href="/category/results">
                    Results
                  </Link>
                </li>

                <li>
                  <Link href="/category/answer-key">
                    Answer Key
                  </Link>
                </li>

                <li>
                  <Link href="/category/syllabus">
                    Syllabus
                  </Link>
                </li>

                <li>
                  <Link href="/category/admission-form">
                    Admission Form
                  </Link>
                </li>
              </ul>

              <hr />

              <h2>Free Online Tools</h2>

              <ul>
                <li><Link href={`/tools/age-calculator`}>Age Calculator</Link></li>
                <li><Link href={`/tools/image-resizer`}>Image Resizer</Link></li>
                <li><Link href={`/tools/biodata-maker`}>Biodata Maker</Link></li>
                <li><Link href={`/tools/image-to-pdf`}>Image To PDF</Link></li>
                <li><Link href={`/tools/typing-test`}>Typing Test</Link></li>
                <li><Link href={`/tools/image-signature-joiner`}>Image Signature Joiner</Link></li>
                <li><Link href={`/tools/name-date-on-image`}>Name & Date on Image</Link></li>
                <li><Link href={`/tools/pdf-to-image`}>PDF to Image</Link></li>
              </ul>

              <hr />

              <h2>Important Information</h2>

              <p>
                {title} provides information related to
                government jobs, admit cards, results,
                answer keys, admissions, and useful online
                tools for students and job seekers.
              </p>

              <p>
                We regularly update our website to provide
                accurate and timely information.
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