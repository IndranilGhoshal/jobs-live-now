import JobDetailsClient from "@/app/_component/JobDetailsClient";
import { notifySearchEngines } from "@/app/utils/indexingBooster";
import { generateJobSchema } from "@/app/utils/jobSchema";
import { generateSEODescription } from "@/app/utils/seoDescription";
import { generateJobKeywords } from "@/app/utils/seoKeywords";
import { generateSEOTitle } from "@/app/utils/seoTitle";

export const dynamic = "force-dynamic";


// ================= VIEWPORT (FIX for themeColor error) =================
export const viewport = {
    themeColor: "#0f172a",
};


// ================= SEO =================
export async function generateMetadata({ params }) {
    const { slug } = await params;

    let job = null;

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-job`,
            {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    details: true,
                    slug,
                }),
            }
        );

        if (res.ok) {
            const data = await res.json();
            job = data?.data;
        }
    } catch (err) {
        console.error("Metadata fetch error:", err);
    }

    if (!job) {
        return {
            title: "Job Not Found",
            description: "Latest government and private job updates in India.",
        };
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    const url = `${baseUrl}/${slug}`;

    return {
        title: generateSEOTitle(job),
        description: generateSEODescription(job),

        keywords: generateJobKeywords(job),

        alternates: {
            canonical: url,
        },

        openGraph: {
            title: generateSEOTitle(job),
            description: generateSEODescription(job),
            url,
            siteName: "Jobs Live Now",
            type: "article",
        },

        twitter: {
            card: "summary_large_image",
            title: generateSEOTitle(job),
            description: generateSEODescription(job),
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}


// ================= PAGE =================
export default async function Page({ params }) {
    const { slug } = await params;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    const url = `${baseUrl}/${slug}`;

    let job = null;

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-job`,
            {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    details: true,
                    slug,
                }),
            }
        );

        if (res.ok) {
            const data = await res.json();
            job = data?.data;
            if (job) {
                notifySearchEngines(url);
            }
        }
    } catch (err) {
        console.error(err);
    }

    return (
        <>
            {/* 🔥 SEO BOOST: Job Schema */}
            {job && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateJobSchema(job, url)),
                    }}
                />
            )}


            {/* Page UI */}
            <JobDetailsClient slug={slug} />
        </>
    );
}