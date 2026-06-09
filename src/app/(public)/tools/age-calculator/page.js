import AgeCalculator from "@/app/component/AgeCalculator";
import SocialJoinLink from "@/app/component/SocialJoinLink";
import SocialLinks from "@/app/component/SocialLinks";
import { url } from "@/app/utils/common-text";
import Link from "next/link";


export const metadata = {
  title: "Free Online Age Calculator | Jobs Live Now",

  description: "Free online Age Calculator. Calculate exact age in years, months and days for SSC, Railway, UPSC, Banking, Police and all Government Exams.",

  keywords: [
    "Age Calculator",
    "SSC Age Calculator",
    "Govt Exam Age Calculator",
    "Free Age Calculator Online",
    "Free Online Age Calculator",
    "Age Calculator Online",
    "Railway Age Calculator",
    "Bank Age Calculator",
    "UPSC Age Calculator",
    "Jobs Live Now",
  ],

  alternates: {
    canonical:
      url+"/tools/age-calculator",
  },

  openGraph: {
    title: "Free Online Age Calculator | Job Live Now",
    description: "Calculate your exact age in years, months and days.",
    url: url+"/tools/age-calculator",
    siteName: "Job Live Now",
    type: "website",
  },
};

export default function Page() {

  return (

    <div className="container age-cal main">

      <div className="breadcrumb-box mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item cp"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item cp"><Link href="/tools">Tools</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Age Calculator</li>
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
          🎂 Age Calculator
        </h1>

        <p className="tool-desc">
          Calculate your exact age in
          years, months and days for
          Government Jobs and
          other competitive exams.
        </p>

        <AgeCalculator />

        <div className="seo-content">
          <h2>Online Age Calculator</h2>

          <p>
            Our Online Age Calculator helps you calculate your exact age in years,
            months, and days from your date of birth. This free tool is useful for
            students, job seekers, and professionals who need to verify age
            eligibility for government jobs, competitive exams, admissions, and
            various official applications. The calculator provides accurate results
            instantly and works on all devices.
          </p>

          <h2>How to Calculate Age Online?</h2>

          <ul>
            <li>Select your Date of Birth.</li>
            <li>Select the Age Calculation Date.</li>
            <li>Click on the "Calculate Age" button.</li>
            <li>View your exact age in years, months, and days.</li>
          </ul>

          <h2>Features of Our Age Calculator</h2>

          <ul>
            <li>Free and Easy to Use.</li>
            <li>Accurate Age Calculation.</li>
            <li>Instant Results.</li>
            <li>Mobile and Desktop Friendly.</li>
            <li>No Registration Required.</li>
          </ul>

          <h2>Why Use an Age Calculator?</h2>

          <p>
            Age calculation is important for checking eligibility in government
            recruitment exams such as SSC, Railway, Banking, UPSC, Defence, and
            State Government jobs. It is also useful for school admissions,
            college applications, insurance forms, and other official purposes
            where exact age verification is required.
          </p>

          <h2>Benefits of Using This Tool</h2>

          <ul>
            <li>Calculate age within seconds.</li>
            <li>Avoid manual calculation errors.</li>
            <li>Useful for exam and job applications.</li>
            <li>Works on mobile, tablet, and desktop devices.</li>
            <li>Provides precise age details instantly.</li>
          </ul>
        </div>

      </div>

      <SocialLinks />

    </div>

  );

}