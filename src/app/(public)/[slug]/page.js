import JobDetailsClient from "@/app/_component/JobDetailsClient";
import { getJob } from "@/app/utils/getJob";
import { getRelatedJob } from "@/app/utils/getRelatedJob";
import { generateJobSchema } from "@/app/utils/jobSchema";
import { generateSEODescription } from "@/app/utils/seoDescription";
import { generateJobKeywords } from "@/app/utils/seoKeywords";
import { generateSEOTitle } from "@/app/utils/seoTitle";
export const dynamic = "force-dynamic";

// ================= SEO =================
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) throw new Error("BASE_URL missing");
    const url = `${baseUrl}/${slug}`;
    const data = await getJob(slug);
    const job = data?.data;
    if (!job) {
        return {
            title: "Job Not Found",
            description: "Latest government and private job updates in India.",
        };
    }
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
            locale: "en_IN",
            type: "article",
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
            title: generateSEOTitle(job),
            description: generateSEODescription(job),
            images: [
                "https://www.jobslivenow.in/og-image.png",
            ],
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
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) throw new Error("BASE_URL missing");
    const url = `${baseUrl}/${slug}`;
    const data = await getJob(slug);
    const job = data?.data;
    const category = job?.category;
    const relatedPosts = await getRelatedJob(slug, category)
    
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
            <JobDetailsClient job={data} relatedPost={relatedPosts} slug={slug} />
        </>
    );
}