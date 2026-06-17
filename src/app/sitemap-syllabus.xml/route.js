export async function GET() {
    const baseUrl = "https://www.jobslivenow.in";

    // 🔥 replace this with your real API
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-category`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sitemap: true,
            category: "Syllabus"
        }),
    });

    const data = await res.json();
    const jobs = data?.data || [];

    const urls = jobs
        .map(
            (job) => `
    <url>
        <loc>${baseUrl}/${job.slug}</loc>
        <lastmod>${job.updatedAt || new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>`
        )
        .join("");

    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
        {
            headers: {
                "Content-Type": "application/xml",
            },
        }
    );
}