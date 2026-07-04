import Category from "@/app/_component/Category";
import { getCategoryTitle } from "@/app/utils/common";
import { year } from "@/app/utils/common-text";
export const dynamic = "force-dynamic";
// ================= SEO =================
export async function generateMetadata({ params }) {

    const { slug } = await params;

    const title = getCategoryTitle(slug);

    return {

        title: `${title} ${year} | Latest ${title} Updates`,

        description: `Get latest ${title} updates, notifications, admit cards, results and important government exam information.`,

        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/category/${slug}`,
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
    return (
        <Category slug={slug} />
    );
}