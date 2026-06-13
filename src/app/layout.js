import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { LoaderProvider } from "./_context/LoaderContext";
import RouteLoader from "./_component/RouteLoader";
import NoInternet from "./_component/NoInternet";

import { title, url } from "./utils/common-text";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  metadataBase: new URL(url),

  title: {
    default:
      "Jobs Live Now - Results, Govt Jobs Forms, Admit Card, Syllabus, Answer Keys, Admissions and Exam Updates",
    template: "%s | Jobs Live Now",
  },

  description:
    "Get latest Government Results, Govt Jobs Online Forms, Syllabus, Admit Cards, Answer Keys, Admissions and Exam Updates. Get fastest government job notifications.",

  keywords: [
    "government jobs",
    "government jobs result",
    "govt jobs 2026",
    "online form",
    "admit card",
    "answer key",
    "railway jobs",
    "ssc jobs",
    "bank jobs",
    "upsc jobs",
    "latest jobs",
    "sarkari result",
    "jobs live now",
    "job vacancy 2026",
    "latest job openings India",
    "government job notification",
    "private company jobs",
    "freshers jobs India",
    "IT jobs India",
    "work from home jobs",
    "part time jobs India",
    "internship opportunities 2026",
    "walk in interview jobs",
    "banking jobs India",
    "railway jobs notification",
    "high salary jobs India",
    "online job apply",
    "career opportunities India",
    "Jobs Live Now",
    "daily job alerts India"
  ],

  authors: [{ name: title }],
  creator: title,
  publisher: title,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: url,
  },

  openGraph: {
    title:
      "Jobs Live Now - Results, Govt Jobs Forms, Admit Card, Syllabus, Answer Keys, Admissions and Exam Updates",
    description:
      "Get latest Sarkari Result, Government Jobs, Online Forms, Admit Cards and Exam Updates.",
    url: url,
    siteName: title,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jobs Live Now",
    description:
      "Latest Government Jobs, Results, Admit Cards, Answer Keys and Online Forms.",
    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "Pxk92YSbh2DuZdWYZyzTh4Vmpt-PZUFOQlwucAw65AQ",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Jobs Live Now",
        url: "https://www.jobslivenow.in",
        logo: "https://www.jobslivenow.in/logo.png",
      },
      {
        "@type": "WebSite",
        name: "Jobs Live Now",
        url: "https://www.jobslivenow.in",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.jobslivenow.in/job-list?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0d6efd" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body cz-shortcut-listen="true">
        <NoInternet>
          <LoaderProvider>
            <RouteLoader />
            {children}
          </LoaderProvider>
        </NoInternet>

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
            </Script>
          </>
        )}

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}