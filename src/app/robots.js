export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    rules: [
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin-x9k2m-secure", "/api"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}