import { notifySearchEngines } from "@/app/utils/indexingBooster";


export async function POST(req) {
    try {
        const body = await req.json();

        const { slug } = body;

        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`;

        // 🚀 Trigger indexing
        await notifySearchEngines(url);

        return Response.json({
            success: true,
            message: "Indexing triggered",
        });
    } catch (error) {
        return Response.json(
            { success: false, error: "Indexing failed" },
            { status: 500 }
        );
    }
}