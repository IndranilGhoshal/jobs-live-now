export function generateJobKeywords(job) {
    const title =
        job?.fields?.find((f) => f.fieldName === "Job Advertisement Title")
            ?.value || "";

    const org =
        job?.fields?.find((f) => f.fieldName === "Organization")?.value ||
        "India";

    const location =
        job?.fields?.find((f) => f.fieldName === "Job Location")?.value ||
        "India";

    const category =
        job?.fields?.find((f) => f.fieldName === "Job Category")?.value ||
        "";

    const year = new Date().getFullYear();

    const baseKeywords = [
        "latest job updates India",
        "government jobs 2026",
        "railway jobs",
        "SSC jobs",
        "bank jobs",
        "UPSC jobs",
        "defence jobs",
        "work from home jobs",
        "online job apply",
        "career opportunities India",
        "Jobs Live Now",
        "government jobs",
        "private jobs India",
        "fresher jobs",
        "online job apply",
        "jobs India",
        "latest jobs",
        "government jobs",
        "private jobs",
        "fresher jobs",
        "IT jobs",
        "latest job updates in India 2026",
        "government job notification 2026 apply online",
        "private company jobs for freshers India",
        "work from home jobs without investment India",
        "railway recruitment 2026 apply online form",
        "SSC CGL CHSL latest job vacancy updates",
        "bank jobs recruitment India 2026 notification",
        "defence jobs Indian army navy air force jobs",
    ];

    const dynamicKeywords = [
        title && `${title} recruitment ${year}`,
        title && `${title} apply online`,
        title && `${title} vacancy ${year}`,
        org && `${org} jobs`,
        location && `${location} jobs`,
        category && `${category} jobs India`,
        `job vacancy ${year} India`,
        `latest recruitment ${year}`,
        `career opportunities ${location}`,
        `work from home jobs India`,
    ].filter(Boolean);

    return [...baseKeywords, ...dynamicKeywords];
}