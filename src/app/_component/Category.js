'use client'
import React, { useEffect, useState } from 'react'
import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import Link from "next/link";
import { year } from "@/app/utils/common-text";
import { getCategoryTitle, slugToTitle } from '../utils/common';
import UsePagination from './UsePagination';
import { CategoryContent } from './json/CategoryContent';
import moment from 'moment';
import { CategoryFaqs } from './json/CategoryFaqs';
import { categoryStats } from './json/CategoryStats';
import { categoryBadges } from './json/CategoryBadges';
import { categoryAbout } from './json/CategoryAbout';
import {
    IdCard,
    Award,
    ClipboardCheck,
    BookOpenCheck,
    GraduationCap,
    BadgeCheck,
    BriefcaseBusiness,
    CircleCheckBig,
    RefreshCw,
    Flame,
    Search,
    Users,
    CircleHelp
} from "lucide-react";
import StatCounter from './StatCounter';
import HeroSearch from './HeroSearch';
import { PopularSearches } from './json/PopularSearches';
import CategoryBreadcrumbSchema from './schema/CategoryBreadcrumbSchema';



export default function Category({ slug }) {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setlimit] = useState(20)
    const [page, setPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [starcard, setstarcard] = useState([]);

    const categoryIcons = {
        "admit-card": IdCard,
        "results": Award,
        "syllabus": BookOpenCheck,
        "answer-key": ClipboardCheck,
        "admission-form": GraduationCap,
    };

    // ================= FETCH API =================
    useEffect(() => {
        fetchJobs(currentPage);
    }, [currentPage]);

    const fetchJobs = async (pageNumber) => {
        try {
            setLoading(true);
            setJobs([])
            const skip = (pageNumber - 1) * limit;
            let obj = {
                limit,
                skip,
                list: true,
                category: slugToTitle(slug),
                categoryslag: slug
            }
            const res = await fetch("/api/public-category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });

            const data = await res.json();
            console.log("data", data);

            if (data.success) {
                let totalPage = Math.ceil(data.listlength / limit);
                setPage(totalPage);
                setJobs(data?.data?.list);
                setstarcard(data?.data?.starcard || []);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    const title = getCategoryTitle(slug);
    const content = CategoryContent[slug] || {};
    const faqs = CategoryFaqs[slug] || [];
    const stat = categoryStats[slug];
    const badges = categoryBadges[slug] || [];
    const aboutData = categoryAbout[slug];

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };
    const CardTitle = ({ title, slug }) => {
        const Icon = categoryIcons[slug];

        return (
            <>
                <h5>
                    <Icon size={18} strokeWidth={2.2} />
                    <span>{title}</span>
                </h5>
            </>
        );
    };

    const AboutTitle = ({ heading, slug }) => {
        const Icon = categoryIcons[slug];

        return (
            <>
                <h2>
                    <Icon size={30} />
                    <span>{heading}</span>
                </h2>
            </>
        );
    };
    return (
        <div className="container job-dtl main">

            <div className="row">
                <div className="col-sm-12">
                    <SocialJoinLink />

                    <div className="hero-box card-box mt-3">

                        <h1>Latest {title} {year}</h1>

                        <p className="hero-subtitle">
                            {content.description1}
                        </p>

                        <HeroSearch exactcategory={title} />

                        <ul className="hero-features my-1">
                            <li><BadgeCheck size={16} /> Daily Updated Notifications</li>
                            <li><BadgeCheck size={16} /> Official Source Based Information</li>
                            <li><BadgeCheck size={16} /> Fast & Easy Access</li>
                            <li><BadgeCheck size={16} /> Free For All Users</li>
                        </ul>

                        <div className="hero-stats">
                            {starcard.map((item, i) => (
                                <div key={i} className="hero-stat-item">
                                    <h3><StatCounter end={item.count} suffix={item.suffix} /></h3>
                                    <span>{item.name}</span>
                                </div>
                            ))}

                            {
                                starcard.length > 0 &&
                                <>
                                    <div className="hero-stat-item">
                                        <h3><span>24/7</span></h3>
                                        <span>Updates</span>
                                    </div>

                                    <div className="hero-stat-item">
                                        <h3><span>Free</span></h3>
                                        <span>Access</span>
                                    </div>
                                </>
                            }

                        </div>

                        <div className="hero-buttons">

                            <Link href="/top-online-form">
                                <BriefcaseBusiness size={18} />
                                <span>Top Online Form</span>
                            </Link>

                            <Link href="/category/results">
                                <Award size={18} />
                                <span>Results</span>
                            </Link>

                            <Link href="/category/admit-card">
                                <IdCard size={18} />
                                <span>Admit Cards</span>
                            </Link>

                            <Link href="/category/answer-key">
                                <ClipboardCheck size={18} />
                                <span>Answer Keys</span>
                            </Link>

                            <Link href="/category/syllabus">
                                <BookOpenCheck size={18} />
                                <span>Syllabus</span>
                            </Link>

                            <Link href="/category/admission-form">
                                <GraduationCap size={18} />
                                <span>Admission Form</span>
                            </Link>

                        </div>

                        <div className="hero-content mt-4">

                            <p>
                                {content.description2}
                            </p>

                        </div>

                        <div className="trust-badges caty">
                            {badges.map((badge, index) => (
                                <span key={index}>
                                    <CircleCheckBig size={16} /> {badge}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

            <div className="update-box">
                <BriefcaseBusiness size={16} /> Last Updated: {moment().format("MMMM Do YYYY")} | <RefreshCw size={16} /> Daily Updated
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
            <div className={`card-box mg-lst ${slug}`}>
                <CardTitle title={title} slug={slug} />
                <ul className="job-list">
                    {
                        loading ? (
                            <div className="table-loader">

                                <div className="loader-box">
                                    <div className="loader-circle"></div>

                                    <h3>Loading Jobs...</h3>

                                    <p>Please wait a moment</p>
                                </div>

                            </div>
                        ) :
                            <>
                                {
                                    jobs?.length > 0 ? (

                                        <>
                                            {
                                                jobs?.map((item, i) => (

                                                    <li key={i}>

                                                        <Link
                                                            href={`/${item.slug}`}
                                                        >
                                                            <>
                                                                <div className="job-card">

                                                                    <h3 className="job-title">
                                                                        {item.name}
                                                                    </h3>
                                                                    <div className="job-footer">

                                                                        <span className="apply-link">

                                                                            Explore Now

                                                                            <span className="arrow">
                                                                                →
                                                                            </span>

                                                                        </span>

                                                                    </div>

                                                                </div>
                                                            </>
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
                            </>
                    }
                </ul>
                {
                    page > 1 && <div><UsePagination handleChangePage={handleChangePage} page={page} currentPage={currentPage} /></div>
                }

            </div>

            <div className="showing-count">

                Showing <strong>{jobs.length}</strong> {title}

            </div>

            <section className="related-posts">

                <h2><Flame size={32} /> Trending {title}</h2>

                <div className="related-post-links">

                    {
                        jobs.slice(0, 4).map((item) => (

                            <Link
                                key={item._id}
                                href={`/${item.slug}`}
                            >
                                {item.name}
                            </Link>

                        ))
                    }

                </div>

            </section>

            {faqs.length > 0 && (
                <section className="faq-section">
                    <h2>
                        <CircleHelp size={30} strokeWidth={2.2} />
                        <span>Frequently Asked Questions</span>
                    </h2>

                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-card ${slug}`}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </section>
            )}

            {aboutData && (
                <section className={`about-category ${slug}`}>

                    <AboutTitle heading={aboutData.heading} slug={slug} />

                    <p>{aboutData.content}</p>

                </section>
            )}

            <div className="editorial-box">
                <div className="editorial-header">
                    <h2>
                        <Users size={22} strokeWidth={2.2} /> 
                        <span className='tit'>Editorial Team</span>
                    </h2>
                    <span className='sub'><CircleCheckBig size={16} /> Verified & Fact Checked Content</span>
                </div>

                <p>
                    Content on this page is reviewed and verified by the Jobs Live Now Editorial Team before publication. We collect information from official notifications, recruitment boards, government portals and educational institutions to ensure accuracy and reliability.
                </p>

                <div className="review-info">

                    <p>
                        <strong>Reviewed By:</strong> Editorial Team
                    </p>

                    <p>
                        <strong>Last Reviewed:</strong> {moment().format("MMMM Do YYYY")}
                    </p>

                    <p>
                        <strong>Content Source:</strong> Recruitment Notifications
                    </p>

                </div>

                <ul className="editorial-points mt-3">
                    <li><BadgeCheck size={18} /> Official Source Verification</li>
                    <li><BadgeCheck size={18} /> Fact Checked Information</li>
                    <li><BadgeCheck size={18} /> Regular Content Updates</li>
                    <li><BadgeCheck size={18} /> Transparent Editorial Process</li>
                </ul>
            </div>

            <div className="explore-category-box">

                <h2>Explore More Categories</h2>

                <ul className="category-links">
                    <li><Link href="/top-online-form">
                        <BriefcaseBusiness size={18} />
                        <span>Top Online Form</span>
                    </Link></li>
                    <li><Link href="/category/results">
                        <Award size={18} />
                        <span>Results</span>
                    </Link></li>
                    <li><Link href="/category/admit-card">
                        <IdCard size={18} />
                        <span>Admit Cards</span>
                    </Link></li>
                    <li><Link href="/category/answer-key">
                        <ClipboardCheck size={18} />
                        <span>Answer Keys</span>
                    </Link></li>
                    <li><Link href="/category/syllabus">
                        <BookOpenCheck size={18} />
                        <span>Syllabus</span>
                    </Link></li>
                    <li><Link href="/category/admission-form">
                        <GraduationCap size={18} />
                        <span>Admission Form</span>
                    </Link></li>

                </ul>

            </div>

            <div className="popular-searches">

                <h2>Popular Searches</h2>

                <div className="popular-links">

                    {PopularSearches.home.map((item, i) => (
                        <Link key={i} href={item.slug}>
                            <Search size={18} />
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>

            </div>

            <SocialLinks />

            <CategoryBreadcrumbSchema category={slug} />

        </div >
    )
}
