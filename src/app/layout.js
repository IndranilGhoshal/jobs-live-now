import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LoaderProvider } from "./_context/LoaderContext";
import RouteLoader from "./component/RouteLoader";
import NoInternet from "./component/NoInternet";

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
  metadataBase: new URL("https://www.joblivenow.in"),

  title: {
    default: "Job Live Now - Sarkari Result, Govt Jobs, Admit Card 2026",
    template: "%s",
  },

  description:
    "Latest Sarkari Result 2026, Govt Jobs, Online Forms, Admit Cards, Answer Keys, Admissions and Exam Updates. Get fastest government job notifications.",

  keywords: [
    "sarkari result",
    "govt jobs 2026",
    "latest jobs",
    "online form",
    "admit card",
    "answer key",
    "railway jobs",
    "ssc jobs",
    "bank jobs",
    "upsc jobs",
    "job live now",
  ],

  authors: [{ name: "Job Live Now" }],
  creator: "Job Live Now",
  publisher: "Job Live Now",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.joblivenow.in",
  },

  openGraph: {
    title: "Job Live Now - Sarkari Result & Govt Jobs 2026",
    description:
      "Get latest Sarkari Result, Government Jobs, Online Forms, Admit Cards and all exam updates in one place.",
    url: "https://www.joblivenow.in",
    siteName: "Job Live Now",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Job Live Now",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Job Live Now - Sarkari Result 2026",
    description:
      "Latest Govt Jobs, Online Forms, Admit Cards & Results.",
    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>

        {/* SEO */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta name="theme-color" content="#0d6efd" />

        {/* Bootstrap CSS */}
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Jobs Live Now",
              url: "https://www.joblivenow.in",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.joblivenow.in/job-list?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
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

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          crossOrigin="anonymous"
        ></Script>

      </body>
    </html>
  );
}