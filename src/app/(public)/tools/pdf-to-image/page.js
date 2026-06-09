import PdfToImageClient from "@/app/_component/PdfToImageClient";
import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { url } from "@/app/utils/common-text";
import Link from "next/link";

export const metadata = {
  title: "Free Online PDF to Image Converter | Jobs Live Now",
  description:
    "Convert PDF files to high-quality JPG and PNG images online for free. Fast, secure, and mobile-friendly PDF to Image converter tool.",
  keywords: [
    "pdf to image",
    "pdf to jpg",
    "pdf to png",
    "convert pdf to image",
    "free pdf converter",
    "online pdf tools",
  ],
  alternates: {
    canonical: url+"/tools/pdf-to-image",
  },
  openGraph: {
    title: "Free Online PDF to Image Converter | Jobs Live Now",
    description:
      "Convert PDF files into JPG and PNG images online for free.",
    url: url+"/tools/pdf-to-image",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="container pdf-img main">

      <div className="breadcrumb-box mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item cp"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item cp"><Link href="/tools">Tools</Link></li>
            <li className="breadcrumb-item active" aria-current="page">PDF to Image</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <SocialJoinLink />
        </div>
      </div>

      <div className="tool-page">
        <h1>🖼️ PDF to Image</h1>

        <p className="tool-desc">
          Convert PDF files into high-quality JPG and PNG images
          online for free.
        </p>

        <PdfToImageClient />

        <div className="seo-content">
          <h2>Online PDF to Image Converter</h2>

          <p>
            Our Online PDF to Image Converter helps you convert PDF pages into
            high-quality image files quickly and easily. This free tool is useful for
            students, job seekers, professionals, teachers, and businesses who need to
            extract pages from PDF documents as JPG or PNG images. The conversion
            process is fast, secure, and works directly in your browser without
            requiring software installation.
          </p>

          <h2>How to Convert PDF to Images?</h2>

          <ul>
            <li>Upload your PDF document.</li>
            <li>Click the "Generate Image" button.</li>
            <li>Wait while the PDF pages are processed.</li>
            <li>Preview the generated images.</li>
            <li>Download individual pages or all images at once.</li>
          </ul>

          <h2>Features of Our PDF to Image Converter</h2>

          <ul>
            <li>Free and Easy to Use.</li>
            <li>Convert PDF Pages into High-Quality Images.</li>
            <li>Supports Multi-Page PDF Files.</li>
            <li>Instant Image Generation.</li>
            <li>Mobile and Desktop Friendly.</li>
            <li>No Registration Required.</li>
            <li>Secure Browser-Based Processing.</li>
          </ul>

          <h2>Why Convert PDF to Images?</h2>

          <p>
            Converting PDF files into images makes it easier to share specific pages on
            social media, messaging apps, presentations, websites, and digital
            documents. Image files are often more convenient when you need to display,
            edit, or upload individual PDF pages without sharing the entire document.
          </p>

          <h2>Benefits of Using This Tool</h2>

          <ul>
            <li>Extract PDF pages as image files instantly.</li>
            <li>Download individual pages separately.</li>
            <li>Maintain document quality during conversion.</li>
            <li>Useful for educational, professional, and personal tasks.</li>
            <li>Save time compared to manual screenshots.</li>
            <li>Works on smartphones, tablets, and computers.</li>
          </ul>

          <h2>Who Can Use This Tool?</h2>

          <p>
            This PDF to Image Converter is designed for students, teachers,
            professionals, graphic designers, content creators, office workers, and
            anyone who needs to convert PDF documents into image formats for easier
            sharing, editing, or presentation purposes.
          </p>

          <h2>Common Uses of PDF to Image Conversion</h2>

          <ul>
            <li>Sharing PDF pages on social media.</li>
            <li>Creating presentation slides.</li>
            <li>Extracting certificates and documents as images.</li>
            <li>Converting reports and notes into image format.</li>
            <li>Uploading document pages where image files are required.</li>
            <li>Saving important PDF pages for quick access.</li>
          </ul>

          <h2>Why Choose Our PDF to Image Tool?</h2>

          <p>
            Our converter provides a simple and efficient way to transform PDF pages
            into high-resolution images. With fast processing, quality output, and an
            easy-to-use interface, users can convert and download PDF pages within
            seconds without installing additional software.
          </p>
        </div>
      </div>

      <SocialLinks />

    </main>
  );
}