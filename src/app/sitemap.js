import { JobSchema } from "./model/Job";
import mongoose from "mongoose";
import { connectionStr } from "./lib/db";

export default async function sitemap() {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // 🔥 fetch all slugs from API
    const res = await fetch(
        `${baseUrl}/api/public-job`,
        {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sitemap: true,
            }),
        }
    );

    const data = await res.json();

    const jobs = data?.data || [];

    const jobUrls = jobs.map((job) => {
        return {
            url: `${baseUrl}/${job.slug}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        };
    });

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: baseUrl + "/top-online-form",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/about-us",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/contact-us",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/privacy-policy",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/disclaimer",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/terms-and-conditions",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/site-map",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/tools/age-calculator",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/tools/image-resizer",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/tools/biodata-maker",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/tools/image-to-pdf",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/tools/typing-test",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/tools/image-signature-joiner",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/tools/name-date-on-image",
            lastModified: new Date(),
        },
        {
            url: baseUrl + "/tools/pdf-to-image",
            lastModified: new Date(),
        },

        ...jobUrls,
    ];
}