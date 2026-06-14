export async function GET() {
    const baseUrl = "https://www.jobslivenow.in";

    const tools = [
        "/tools/age-calculator",
        "/tools/image-resizer",
        "/tools/biodata-maker",
        "/tools/image-to-pdf",
        "/tools/typing-test",
        "/tools/image-signature-joiner",
        "/tools/name-date-on-image",
        "/tools/pdf-to-image",
    ];

    const urls = tools
        .map(
            (tool) => `
    <url>
        <loc>${baseUrl}${tool}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
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