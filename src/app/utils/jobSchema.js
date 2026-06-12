export function generateJobSchema(job, url) {
    const get = (name) =>
        job?.fields?.find((f) => f.fieldName === name)?.value;

    const title = get("Job Advertisement Title") || "Job Opening";
    const org = get("Organization") || "Company";
    const location = get("Job Location") || "India";

    return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title,
        description:
            get("Short Information")?.replace(/<[^>]*>/g, " ") ||
            "Job opportunity in India",
        datePosted: new Date().toISOString(),
        employmentType: "FULL_TIME",
        hiringOrganization: {
            "@type": "Organization",
            name: org,
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressLocality: location,
            },
        },
        identifier: {
            "@type": "PropertyValue",
            name: "Jobs Live Now",
            value: url,
        },
    };
}