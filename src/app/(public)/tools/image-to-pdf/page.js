import ImageToPdf from "@/app/component/ImageToPdf";
import SocialJoinLink from "@/app/component/SocialJoinLink";
import SocialLinks from "@/app/component/SocialLinks";
import { url } from "@/app/utils/common-text";
import Link from "next/link";

export const metadata = {
  title:
    "Free Online Image to PDF Converter | Jobs Live Now",

  description:
    "Convert JPG, PNG, WEBP images to PDF online free. Fast, secure and mobile friendly Image to PDF Converter.",

  keywords: [
    "Image to PDF",
    "JPG to PDF",
    "PNG to PDF",
    "Photo to PDF",
    "Online PDF Converter",
  ],

  alternates: {
    canonical:
      url+"/tools/image-to-pdf",
  },
};

export default function Page() {

  return (

    <div className="container img-pdf main">

      <div className="breadcrumb-box mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item cp"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item cp"><Link href="/tools">Tools</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Image to PDF</li>
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
          📕 Image to PDF
        </h1>

        <p className="tool-desc">

          Convert JPG, PNG, WEBP and
          other images into PDF format
          instantly.

        </p>

        <ImageToPdf />

        <div className="seo-content">
          <h2>Online Image to PDF Converter</h2>

          <p>
            Our Online Image to PDF Converter helps you convert JPG, JPEG, PNG,
            WEBP, and other image formats into PDF files quickly and easily.
            This free tool is useful for students, job seekers, professionals,
            and businesses who need to create PDF documents from images for
            assignments, resumes, scanned documents, and official applications.
            The converter provides fast and secure PDF generation on all devices.
          </p>

          <h2>How to Convert Images to PDF Online?</h2>

          <ul>
            <li>Upload one or more image files.</li>
            <li>Arrange the images in your preferred order.</li>
            <li>Click on the "Convert to PDF" button.</li>
            <li>Wait for the PDF generation process.</li>
            <li>Download your PDF file instantly.</li>
          </ul>

          <h2>Features of Our Image to PDF Converter</h2>

          <ul>
            <li>Free and Easy to Use.</li>
            <li>Supports JPG, JPEG, PNG, and WEBP formats.</li>
            <li>Merge Multiple Images into One PDF.</li>
            <li>Fast PDF Generation.</li>
            <li>Mobile and Desktop Friendly.</li>
            <li>No Registration Required.</li>
          </ul>

          <h2>Why Use an Image to PDF Converter?</h2>

          <p>
            Converting images to PDF makes it easier to share, print, and store
            documents. PDF files are widely accepted for job applications,
            government forms, educational assignments, business reports, and
            official documentation. Instead of sending multiple image files,
            you can combine them into a single organized PDF document.
          </p>

          <h2>Benefits of Using This Tool</h2>

          <ul>
            <li>Convert images into PDF within seconds.</li>
            <li>Combine multiple images into one document.</li>
            <li>Maintain image quality in the PDF.</li>
            <li>Useful for resumes, assignments, and scanned documents.</li>
            <li>Works on mobile, tablet, and desktop devices.</li>
            <li>Provides secure and instant conversion.</li>
          </ul>
        </div>

      </div>

      <SocialLinks />

    </div>

  );

}