import BiodataMaker from "@/app/component/BiodataMaker";
import SocialJoinLink from "@/app/component/SocialJoinLink";
import SocialLinks from "@/app/component/SocialLinks";
import { url } from "@/app/utils/common-text";
import Link from "next/link";

export const metadata = {
  title:
    "Free Online Biodata Maker | Jobs Live Now",

  description:
    "Create professional Biodata or Resume and CV online free. Best Biodata Maker for Freshers, Students and Government Job Aspirants.",

  keywords: [
    "Biodata Maker",
    "Resume Maker",
    "CV Maker",
    "Free Biodata Builder",
    "Free CV Builder",
    "Free Resume Builder",
    "Bidodata PDF Download",
    "CV PDF Download",
    "Resume PDF Download",
    "Job Biodata Maker",
    "Job CV Maker",
    "Job Resume Maker",
    "Biodata Builder Online",
    "CV Builder Online",
    "Resume Builder Online"
  ],

  alternates: {
    canonical:
      url+"/tools/resume-maker",
  },
};

export default function Page() {

  return (

    <div className="container bio-dat main">

      <div className="breadcrumb-box mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item cp"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item cp"><Link href="/tools">Tools</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Biodata Maker</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <SocialJoinLink />
        </div>
      </div>

      <div className="tool-page">

        <h1>
          📄 Biodata Maker
        </h1>

        <p className="tool-desc">

          Create professional biodata
          online for Government Jobs,
          Private Jobs, Freshers and
          Experienced Candidates.

        </p>

        <BiodataMaker />

        <div className="seo-content">
          <h2>Online Biodata Maker</h2>

          <p>
            Our Online Biodata Maker helps you create a professional and attractive
            biodata for marriage, job applications, and personal profiles within
            minutes. This free tool allows users to generate a well-formatted biodata
            online without any design or technical skills. Simply enter your personal,
            educational, family, and professional details to create a ready-to-use
            biodata instantly.
          </p>

          <h2>How to Create a Biodata Online?</h2>

          <ul>
            <li>Enter your personal information.</li>
            <li>Add educational and professional details.</li>
            <li>Provide family information and preferences.</li>
            <li>Preview your biodata before finalizing.</li>
            <li>Download or print your biodata instantly.</li>
          </ul>

          <h2>Features of Our Online Biodata Maker</h2>

          <ul>
            <li>Free and Easy to Use.</li>
            <li>Professional Biodata Templates.</li>
            <li>Instant Biodata Generation.</li>
            <li>Mobile and Desktop Friendly.</li>
            <li>Printable and Downloadable Format.</li>
          </ul>

          <h2>Why Use an Online Biodata Maker?</h2>

          <p>
            A biodata is often required for marriage proposals, matrimonial websites,
            job applications, and personal introductions. Creating a biodata manually
            can take time and effort. Our Online Biodata Maker automatically organizes
            your information into a clean and professional format, helping you create
            an impressive biodata quickly and accurately.
          </p>

          <h2>Benefits of Using This Tool</h2>

          <ul>
            <li>Create a professional biodata within minutes.</li>
            <li>Save time with automatic formatting.</li>
            <li>Suitable for marriage and job purposes.</li>
            <li>Accessible on mobile, tablet, and desktop devices.</li>
            <li>Easy to download, print, and share online.</li>
          </ul>
        </div>

      </div>

      <SocialLinks />

    </div>

  );

}