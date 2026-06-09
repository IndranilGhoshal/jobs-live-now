import { JobSchema } from "./model/Job";
import mongoose from "mongoose";
import { connectionStr } from "./lib/db";

export default async function sitemap() {

    await mongoose.connect(connectionStr);

    const jobs = await JobSchema.find().select("_id updatedAt");

    const jobUrls = jobs.map((job) => ({
        url: `https://jobslivenow.in/${job._id}`,
        lastModified: job.updatedAt,
    }));

    return [
        {
            url: "https://jobslivenow.in",
            lastModified: new Date(),
        },
        {
            url: "https://jobslivenow.in/top-online-form",
            lastModified: new Date(),
        },
        {
            url: "https://jobslivenow.in/about-us",
            lastModified: new Date(),
        },
        {
            url: "https://jobslivenow.in/contact-us",
            lastModified: new Date(),
        },
        {
            url: "https://jobslivenow.in/privacy-policy",
            lastModified: new Date(),
        },
        {
            url: "https://jobslivenow.in/disclaimer",
            lastModified: new Date(),
        },
        {
            url: "https://jobslivenow.in/terms-and-conditions",
            lastModified: new Date(),
        },
        {
            url: "https://jobslivenow.in/site-map",
            lastModified: new Date(),
        },
        {
            url: "https://jobslivenow.in/tools/age-calculator",
            lastModified: new Date(),
        },
        {
            url: "https://jobslivenow.in/tools/image-resizer",
            lastModified: new Date(),
        },

        ...jobUrls,
    ];
}