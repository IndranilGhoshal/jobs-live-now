export default async function sitemap() {
  const baseUrl = "https://www.jobslivenow.in";

  try {
    const res = await fetch(`${baseUrl}/api/public-job`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sitemap: true,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data = await res.json();
    const jobs = data?.data || [];

    const jobUrls = jobs.map((job) => ({
      url: `${baseUrl}/${job.slug}`,
      lastModified: job.updatedAt
        ? new Date(job.updatedAt)
        : new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    }));

    const staticPaths = [
      "",
      "/top-online-form",
      "/about-us",
      "/contact-us",
      "/privacy-policy",
      "/disclaimer",
      "/terms-and-conditions",
      "/site-map",
      "/tools/age-calculator",
      "/tools/image-resizer",
      "/tools/biodata-maker",
      "/tools/image-to-pdf",
      "/tools/typing-test",
      "/tools/image-signature-joiner",
      "/tools/name-date-on-image",
      "/tools/pdf-to-image",
    ];

    const staticUrls = staticPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1.0 : 0.7,
    }));

    return [...staticUrls, ...jobUrls];
  } catch (error) {
    console.error("Sitemap Error:", error);

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1.0,
      },
    ];
  }
}