import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LoaderProvider } from "./_context/LoaderContext";
import RouteLoader from "./_component/RouteLoader";
import NoInternet from "./_component/NoInternet";
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d6efd",
  colorScheme: "light",
};

export const metadata = {
  metadataBase: new URL("https://www.jobslivenow.in"),

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
    "daily job alerts India",
  ],

  authors: [{ name: "Jobs Live Now" }],
  creator: "Jobs Live Now",
  publisher: "Jobs Live Now",
  applicationName: "Jobs Live Now",
  category: "Jobs",
  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.jobslivenow.in",
  },

  openGraph: {
    title:
      "Jobs Live Now - Results, Govt Jobs Forms, Admit Card, Syllabus, Answer Keys, Admissions and Exam Updates",
    description:
      "Get latest Sarkari Result, Government Jobs, Online Forms, Admit Cards and Exam Updates.",
    url: "https://www.jobslivenow.in",
    siteName: "Jobs Live Now",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.jobslivenow.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jobs Live Now",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jobs Live Now",
    description:
      "Latest Government Jobs, Results, Admit Cards, Answer Keys and Online Forms.",
    images: [
      "https://www.jobslivenow.in/og-image.png",
    ],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "Pxk92YSbh2DuZdWYZyzTh4Vmpt-PZUFOQlwucAw65AQ",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.jobslivenow.in/#organization",
        name: "Jobs Live Now",
        url: "https://www.jobslivenow.in",
        logo: {
          "@type": "ImageObject",
          url: "https://www.jobslivenow.in/logo.png"
        },
        image: "https://www.jobslivenow.in/logo.png",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.jobslivenow.in/#website",
        url: "https://www.jobslivenow.in",
        name: "Jobs Live Now",
        publisher: {
          "@id": "https://www.jobslivenow.in/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.jobslivenow.in/#webpage",
        url: "https://www.jobslivenow.in",
        name: "Jobs Live Now",
        isPartOf: {
          "@id": "https://www.jobslivenow.in/#website",
        },
        about: {
          "@id": "https://www.jobslivenow.in/#organization",
        },
        description:
          "Latest Government Jobs, Results, Admit Cards, Answer Keys and Admissions.",
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
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />


        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
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

                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
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