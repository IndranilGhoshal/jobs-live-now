import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { slugToTitle } from "@/app/utils/common";
import { year } from "@/app/utils/common-text";
import Link from "next/link";

export const dynamic = "force-dynamic";

// ================= CATEGORY TITLE =================
const getCategoryTitle = (slug) => {

    return slug
        ?.replace(/-/g, " ")
        ?.replace(/\b\w/g, (c) => c.toUpperCase());

};

// ================= SEO =================
export async function generateMetadata({ params }) {

    const { slug } = await params;

    const title = getCategoryTitle(slug);

    return {

        title: `${title} ${year} | Latest ${title} Updates`,

        description:`Get latest ${title} updates, notifications, admit cards, results and important government exam information.`,

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

    let obj = {
        list: true,
        category: slugToTitle(slug),
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-category`,
        {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(obj),

            cache: "no-store",
        }
    );

    const data = await res.json();



    const jobs = data?.data || [];

    const title = getCategoryTitle(slug);

    return (

        <div className="container job-dtl main">

            <header>
                {/* ================= H1 ================= */}
                <h1>
                    Latest {title} {year}
                </h1>

                {/* ================= DESCRIPTION ================= */}
                <p className="category-desc">

                    Get all latest {title} updates including
                    government jobs, notifications, important dates,
                    admit cards and official links.

                </p>
            </header>

            <div className="row">
                <div className="col-sm-12">
                    <SocialJoinLink />
                </div>
            </div>

            <div className="breadcrumb-box mb-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item cp"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{title}</li>
                    </ol>
                </nav>
            </div>

            {/* ================= LIST ================= */}
            <div className="card-box">
                <h5>{title}</h5>
                <ul className="job-list">

                    {
                        jobs?.length > 0 ? (

                            <>
                                {
                                    jobs?.map((item, i) => (

                                        <li key={i}>

                                            <Link
                                                href={`/${item.slug}`}
                                            >
                                                {i + 1}. {item.name}
                                            </Link>

                                        </li>

                                    ))
                                }
                            </>

                        ) : (

                            <div className="no-data-box-alllist">

                                <div className="no-data-icon-list">
                                    📂
                                </div>

                                <p>No data available</p>

                            </div>

                        )
                    }

                </ul>

            </div>

            <SocialLinks />

        </div >
    );
}