export async function getRelatedJob(slug, category) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-job`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ relatedPosts: true, slug, category }),
        cache: "no-store",
      }
    );

    if (!res.ok) return { data: [] };

    return await res.json();
  } catch (err) {
    console.error("related job failed:", err);
    return { data: [] };
  }
}