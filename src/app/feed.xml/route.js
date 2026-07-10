import { NextResponse } from "next/server";
import { htmlToText } from "../utils/common";

export async function GET() {
    const baseUrl = "https://www.jobslivenow.in";



    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-job`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sitemap: true,
        }),
    });

    const data = await res.json();
    const jobs = data?.data || [];

    const getField = (name, index) => {
        for (let [i, j] of jobs.entries()) {
            if (i == index) {
                return j?.fields?.find(
                    (f) => f.fieldName === name
                );
            }
        }
    };

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Jobs Live Now</title>
<link>https://www.jobslivenow.in</link>
<description>Latest Government Jobs, Results, Admit Cards and Answer Keys</description>

${jobs.map(
        (job, index) => `
<item>
<title><![CDATA[${job.name}]]></title>
<link>${baseUrl}/${job.slug}</link>
<guid>${baseUrl}/${job.slug}</guid>
<pubDate>${new Date(job.createdAt).toUTCString()}</pubDate>
<description><![CDATA[${htmlToText(getField("Short Information", index)?.value) || ""}]]></description>
</item>`
    )
            .join("")}

</channel>
</rss>`;

    return new NextResponse(xml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}