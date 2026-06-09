import JobDetailsClient from "@/app/component/JobDetailsClient";
// ================= SEO =================
export async function generateMetadata({ params }) {

    const { slug } = await params;

    try {

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-job`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    details: true,
                    slug: slug
                })
            }
        );

        const data = await res.json();

        const job = data?.data;

        if (!job) {

            return {
                title: "Job Not Found",
            };

        }

        const getField = (name) =>
            job?.fields?.find((f) => f.fieldName === name)?.value;

        const title = getField("Job Advertisement Title") || "Latest Govt Job";
        const shortInfo = getField("Short Information") || "";

        const cleanDesc = shortInfo
            ?.replace(/<[^>]*>/g, "")
            ?.slice(0, 160);

        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`;

        return {

            title: `${title} | Latest Govt Job Updates`,
            description: cleanDesc,
            keywords: [
                title,
                "Govt Job",
                "Online Form",
                "Sarkari Result",
                "Latest Jobs",
                "2026 Jobs",
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
                canonical: url,
            },

            openGraph: {
                title,
                description: cleanDesc,
                url,
                type: "article",
                siteName: "Job Portal",
            },

            twitter: {
                card: "summary_large_image",
                title,
                description: cleanDesc,
            },

            robots: {
                index: true,
                follow: true,
            },

        };

    } catch (error) {

        console.log(error);

        return {
            title: "Job Details",
        };

    }

}

// ================= PAGE =================
export default async function Page({ params }) {

    const { slug } = await params;

    return (
        <JobDetailsClient slug={slug} />
    );

}