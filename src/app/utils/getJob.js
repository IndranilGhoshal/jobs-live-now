export async function getJob(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-job`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ details: true, slug }),
        cache: "no-store",
      }
    );

    if (!res.ok) return { data: null };

    return await res.json();
  } catch (err) {
    console.error("getJob failed:", err);
    return { data: null };
  }
}