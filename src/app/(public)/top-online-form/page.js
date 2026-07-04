
import TopOnlineForm from "@/app/_component/TopOnlineForm";
export const dynamic = "force-dynamic";

// ================= SEO =================

export const metadata = {

  title: "Top Online Form - Latest Government Jobs Online Forms",
  description: "Check latest Top Online Forms, Government Job Online Forms, SSC, Railway, Banking, Defence, UPSC and State Govt recruitment updates.",
  keywords: [
    "Top Online Form",
    "Latest Online Form",
    "Sarkari Result",
    "Govt Jobs 2026",
    "SSC Online Form",
    "Railway Online Form",
    "Online Form",
    "UPSC Online Form",
    "Defence Online Form",
    "Bank Online Form",
    "Latest Online Form",
  ],

  alternates: {
    canonical: "https://www.jobslivenow.in/top-online-form",
  },

  openGraph: {
    title: "Top Online Form",
    description: "Latest Government Job Online Forms and Recruitment Updates.",
    url: "https://www.jobslivenow.in/top-online-form",
    siteName: "Jobs Live Now",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

};

export default async function page() {
  return (
    <TopOnlineForm />
  )
}
