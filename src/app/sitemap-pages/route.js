export async function GET() {
    const baseUrl = "https://www.jobslivenow.in";

    const pages = [
        "",
        "/about-us",
        "/contact-us",
        "/privacy-policy",
        "/terms-and-conditions",
        "/disclaimer",
        "/site-map",
    ];

    const urls = pages
        .map(
            (page) => `
    <url>
        <loc>${baseUrl}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
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