import { NextResponse } from "next/server";
import { htmlToText } from "../utils/common";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.jobslivenow.in";

  const res = await fetch(`${baseUrl}/api/public-job`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sitemap: true,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    return new NextResponse("Failed to generate RSS Feed", {
      status: 500,
    });
  }

  const data = await res.json();
  const jobs = data?.data || [];

  const getField = (fields = [], fieldName) => {
    const field = fields.find((f) => f.fieldName === fieldName);
    return field?.value || "";
  };

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>

<title>Jobs Live Now</title>

<link>${baseUrl}</link>

<description>Latest Government Jobs, Results, Admit Cards, Answer Keys, Admissions and Exam Updates</description>

<language>en-IN</language>

<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>

${jobs
  .map((job) => {
    const title =
      job.name ||
      getField(job.fields, "Job Advertisement Title") ||
      "Jobs Live Now";

    const description = htmlToText(
      getField(job.fields, "Short Information")
    );

    const created =
      job.createdAt?.$date ||
      job.createdAt ||
      job.updatedAt?.$date ||
      job.updatedAt ||
      new Date().toISOString();

    return `
<item>

<title><![CDATA[${title}]]></title>

<link>${baseUrl}/${job.slug}</link>

<guid isPermaLink="true">${baseUrl}/${job.slug}</guid>

<pubDate>${new Date(created).toUTCString()}</pubDate>

<description><![CDATA[${description}]]></description>

</item>`;
  })
  .join("")}

</channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}