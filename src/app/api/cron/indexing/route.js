let lastRunDate = null;

export async function GET() {
    try {
        const today = new Date().toISOString().split("T")[0];

        // 🚀 already ran today → skip
        if (lastRunDate === today) {
            return Response.json({
                success: true,
                message: "Already ran today",
            });
        }

        lastRunDate = today;

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-job`,
            {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ latest: true }),
            }
        );

        const data = await res.json();
        const jobs = data?.data || [];

        for (const job of jobs.slice(0, 10)) {
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${job.slug}`;

            await fetch(
                `https://www.google.com/ping?sitemap=${encodeURIComponent(url)}`
            );
        }

        return Response.json({
            success: true,
            message: "Daily cron executed once",
        });
    } catch (error) {
        return Response.json(
            { success: false },
            { status: 500 }
        );
    }
}