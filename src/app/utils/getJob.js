import { cache } from "react";

export const getJob = cache(async (slug) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-job`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ details: true, slug }),
            cache: "no-store",
        }
    );

    if (!res.ok) return null;
    return res.json();
});