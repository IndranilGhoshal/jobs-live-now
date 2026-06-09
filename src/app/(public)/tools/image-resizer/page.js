import ImageResizer from "@/app/_component/ImageResizer";
import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { url } from "@/app/utils/common-text";
import Link from "next/link";


export const metadata = {

  title: "Free Online Image Resizer | Jobs Live Now",
  description: "Free online Image Resizer tool. Resize photo for SSC, Railway, UPSC, Banking, Police and Government Job forms. Fast, secure and mobile friendly.",
  keywords: [
    "Image Resizer",
    "Photo Resizer",
    "Free Online Image Resizer",
    "Free Online Photo Resizer",
    "SSC Photo Resize",
    "Bank Photo Resize",
    "Railway Photo Resize",
    "UPSC Photo Resize",
    "Passport Size Photo",
    "Government Job Image Resizer",
    "Online Image Resize Tool"
  ],

  alternates: {
    canonical: url+"/tools/image-resizer",
  },

  openGraph: {
    title: "Free Online Image Resizer | Jobs Live Now",
    description: "Resize image for SSC, Railway, UPSC and Government Job applications.",
    url: url+"/tools/image-resizer",
    type: "website",
  },
};

export default function Page() {

  return (

    <div className="container img-resiz main">

      <div className="breadcrumb-box mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item cp"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item cp"><Link href="/tools">Tools</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Image Resizer</li>
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
          🖼️ Image Resizer
        </h1>

        <p className="tool-desc">

          Resize image online for
          SSC, Railway, UPSC,
          Banking, Police and
          Government Job Forms.

        </p>

        <ImageResizer />

        <div className="seo-content">

          <h2>Online Image Resizer Tool</h2>

          <p>
            Our free Online Image Resizer Tool helps users quickly resize images
            without losing quality. It is especially useful for candidates applying
            for government jobs, competitive examinations, online forms, admissions,
            and official registrations where images must meet specific size
            requirements. Resize your photo in seconds and download the optimized
            image instantly without any watermark.
          </p>

          <h2>Why Use Our Image Resizer?</h2>

          <p>
            Many government recruitment portals and online application systems require
            photographs and signatures to be uploaded in specific dimensions or file
            sizes. Our Image Resizer makes it easy to adjust image width, height, and
            size while maintaining good image quality. The tool works directly in your
            browser and does not require any software installation.
          </p>

          <h2>Supported Exams & Applications</h2>

          <ul>
            <li>SSC Recruitment Examinations</li>
            <li>Railway Recruitment Board (RRB) Exams</li>
            <li>UPSC Examinations</li>
            <li>Banking Recruitment Exams</li>
            <li>Police Recruitment Applications</li>
            <li>State Government Job Applications</li>
            <li>College and University Admissions</li>
            <li>Scholarship and Online Registration Forms</li>
          </ul>

          <h2>Key Features</h2>

          <ul>
            <li>Resize images instantly online.</li>
            <li>Maintain image quality and clarity.</li>
            <li>Customize image width and height.</li>
            <li>Fast processing with instant download.</li>
            <li>Works on mobile, tablet, and desktop devices.</li>
            <li>No software installation required.</li>
            <li>No watermark on downloaded images.</li>
            <li>100% free to use.</li>
          </ul>

          <h2>How to Resize an Image?</h2>

          <ol>
            <li>Upload your image from your device.</li>
            <li>Enter the required width and height.</li>
            <li>Click the Resize button.</li>
            <li>Preview the resized image.</li>
            <li>Download the final image instantly.</li>
          </ol>

          <h2>Benefits of Using an Online Image Resizer</h2>

          <p>
            An image resizer helps reduce upload errors, ensures compliance with
            application requirements, and saves time when submitting online forms.
            Whether you need a passport-size photo, exam application image, profile
            picture, or website image, our tool provides a quick and reliable solution
            for resizing images online.
          </p>

        </div>

      </div>

      <SocialLinks />

    </div>

  );

}