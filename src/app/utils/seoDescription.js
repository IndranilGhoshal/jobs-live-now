export function generateSEODescription(job) {
    const shortInfo =
        job?.fields?.find((f) => f.fieldName === "Short Information")?.value ||
        "";

    const clean = shortInfo
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const fallback =
        "Find latest government and private job updates in India. Apply online for fresher, IT, railway, bank and defence jobs.";

    return clean ? clean.slice(0, 160) : fallback;
}