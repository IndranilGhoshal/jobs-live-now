export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin-x9k2m-secure", "/api"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}