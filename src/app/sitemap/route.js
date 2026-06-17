export async function GET() {
    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <sitemap>
        <loc>https://www.jobslivenow.in/sitemap-pages.xml</loc>
    </sitemap>

    <sitemap>
        <loc>https://www.jobslivenow.in/sitemap-jobs.xml</loc>
    </sitemap>

    <sitemap>
        <loc>https://www.jobslivenow.in/sitemap-tools.xml</loc>
    </sitemap>

    <sitemap>
        <loc>https://www.jobslivenow.in/sitemap-admission.xml</loc>
    </sitemap>

    <sitemap>
        <loc>https://www.jobslivenow.in/sitemap-admit-card.xml</loc>
    </sitemap>

    <sitemap>
        <loc>https://www.jobslivenow.in/sitemap-answer-key.xml</loc>
    </sitemap>

    <sitemap>
        <loc>https://www.jobslivenow.in/sitemap-results.xml</loc>
    </sitemap>

    <sitemap>
        <loc>https://www.jobslivenow.in/sitemap-syllabus.xml</loc>
    </sitemap>

    

</sitemapindex>`,
        {
            headers: {
                "Content-Type": "application/xml",
            },
        }
    );
}