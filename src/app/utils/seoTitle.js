export function generateSEOTitle(job) {
    const title =
        job?.fields?.find((f) => f.fieldName === "Job Advertisement Title")
            ?.value || "Latest Govt Job";

    const org =
        job?.fields?.find((f) => f.fieldName === "Organization")?.value || "";

    const location =
        job?.fields?.find((f) => f.fieldName === "Job Location")?.value || "";

    const year = new Date().getFullYear();

    return `${title} ${org ? "| " + org : ""} Jobs ${year} | Apply Online Now`;
}