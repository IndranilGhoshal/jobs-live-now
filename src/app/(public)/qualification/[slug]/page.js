import Qualification from "@/app/_component/Qualification";
import { getQualificationTitle } from "@/app/utils/common";
export const dynamic = "force-dynamic";
// ================= SEO =================
export async function generateMetadata({ params }) {

    const { slug } = await params;

    const title = getQualificationTitle(slug);

    return {

        title: `${title} Pass Jobs 2026 | Latest ${title} Pass Jobs Updates`,

        description:
            `Get latest ${title} pass jobs updates, notifications, admit cards, results and important government exam information.`,

        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/qualification/${slug}`,
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

// ================= PAGE =================
export default async function Page({ params }) {

    const { slug } = await params;

    return <Qualification slug={slug} />;
}