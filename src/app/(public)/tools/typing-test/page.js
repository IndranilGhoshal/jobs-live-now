import SocialJoinLink from "@/app/component/SocialJoinLink";
import SocialLinks from "@/app/component/SocialLinks";
import TypingTestClient from "@/app/component/TypingTestClient";
import { url } from "@/app/utils/common-text";
import Link from "next/link";

export const metadata = {
  title: "Free Online Typing Test| Jobs Live Now",
  description:
    "Practice typing online with our free Typing Speed Test. Check WPM, typing accuracy, mistakes, and improve keyboard skills for SSC, Railway, Banking, Data Entry, and government exams.",
  keywords: [
    "typing test",
    "typing speed test",
    "online typing test",
    "free typing test",
    "typing practice",
    "typing speed checker",
    "typing accuracy test",
    "wpm calculator",
    "government exam typing test",
    "ssc typing test",
    "railway typing test",
    "data entry typing test"
  ],
  alternates: {
    canonical:
      url+"/tools/typing-test",
  },
};

export default function Page() {
  return (
    <>
      <div className="container type-les">
        <div className="breadcrumb-box my-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item cp"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item cp"><Link href="/tools">Tools</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Typing Test</li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <SocialJoinLink />
          </div>
        </div>

        <div className="tool-page">

          <h1>⌨️ Typing Test</h1>

          <p className="tool-desc">
            Improve your typing speed and accuracy with
            our free typing test tool. Useful for SSC,
            Railway, Banking and other government exams.
          </p>

          <TypingTestClient />

          <div className="seo-content">
            <h2>Online Typing Speed Test</h2>

            <p>
              Online Typing Speed Test helps users measure their typing speed and
              accuracy in real time. Whether you are preparing for SSC CHSL, SSC CGL,
              SSC MTS, Railway, Banking, Data Entry Operator, or other government and
              private sector jobs, regular typing practice can significantly improve
              your Words Per Minute (WPM) and reduce typing errors.
            </p>

            <h2>How to Use the Typing Test?</h2>

            <ul>
              <li>Select a typing lesson or sample text.</li>
              <li>Start typing in the input area.</li>
              <li>Complete the paragraph within the given time.</li>
              <li>Click the Submit button to view your result.</li>
              <li>Check your WPM, accuracy, and total mistakes.</li>
            </ul>

            <h2>Benefits of Regular Typing Practice</h2>

            <ul>
              <li>Improve typing speed (WPM).</li>
              <li>Increase typing accuracy.</li>
              <li>Reduce typing mistakes.</li>
              <li>Build confidence for typing examinations.</li>
              <li>Enhance productivity for study and work.</li>
            </ul>

            <h2>Why Use Our Typing Speed Test?</h2>

            <ul>
              <li>100% Free Online Typing Test.</li>
              <li>Real-time WPM and Accuracy Calculation.</li>
              <li>Mobile, Tablet, and Desktop Friendly.</li>
              <li>Suitable for SSC, Railway, Banking, and Government Exam Preparation.</li>
              <li>Instant Result and Performance Analysis.</li>
            </ul>

            <h2>Who Can Use This Typing Test?</h2>

            <p>
              This typing test is designed for students, job seekers, professionals,
              data entry operators, and anyone who wants to improve keyboard typing
              skills. Regular practice can help achieve higher typing speed and better
              accuracy for competitive examinations and professional work.
            </p>
          </div>

        </div>

        <SocialLinks />


      </div>
    </>
  );
}