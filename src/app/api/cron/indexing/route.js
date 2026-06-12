import { notifySearchEngines } from "@/app/utils/indexingBooster";

export async function GET() {
    try {
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
            await notifySearchEngines(url);
        }

        return Response.json({
            success: true,
            message: "Cron indexing done",
        });
    } catch (error) {
        return Response.json(
            { success: false },
            { status: 500 }
        );
    }
}