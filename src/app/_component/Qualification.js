'use client'
import React, { useEffect, useState } from 'react'
import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import Link from "next/link";
import { year } from "@/app/utils/common-text";
import { getCategoryTitle, getQualificationTitle, slugToTitle } from '../utils/common';
import UsePagination from './UsePagination';
import moment from 'moment';
import { EducationContent } from './json/EducationContent';
import { EducationFaqs } from './json/EducationFaqs';
import { EducationStats } from './json/EducationStats';
import { EducationBadges } from './json/EducationBadges';
import { EducationAbout } from './json/EducationAbout';
import { ListClass } from './json/ListClass';
import { Award, BadgeCheck, BookOpenCheck, BriefcaseBusiness, CalendarDays, CircleCheckBig, CircleHelp, ClipboardCheck, Flame, GraduationCap, IdCard, RefreshCw, Search, Users } from 'lucide-react';
import StatCounter from './StatCounter';
import HeroSearch from './HeroSearch';
import { PopularSearches } from './json/PopularSearches';

export default function Qualification({ slug }) {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setlimit] = useState(20)
    const [page, setPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const categoryIcons = {
        "10th": GraduationCap,
        "12th": GraduationCap,
        "ITI": GraduationCap,
        "Diploma": GraduationCap,
        "Graduation": GraduationCap,
        "Post-Graduation": GraduationCap,
        "Phd": GraduationCap
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
                tag: slug,
            }
            const res = await fetch("/api/public-qualification", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });

            const data = await res.json();
            if (data.success) {
                let totalPage = Math.ceil(data.listlength / limit);
                setPage(totalPage);
                setJobs(data?.data);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    const title = getQualificationTitle(slug);;
    const content = EducationContent[slug] || {};
    const faqs = EducationFaqs[slug] || [];
    const stat = EducationStats[slug];
    const badges = EducationBadges[slug] || [];
    const aboutData = EducationAbout[slug];
    const listcls = ListClass[slug].heading;

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };


    const getLastDate = (fields) => {
        const applicationDateField =
            fields?.find(
                (item) =>
                    item.fieldName ===
                    "Application Date"
            );

        if (!applicationDateField)
            return "";

        let lastdate = moment(applicationDateField?.value?.end).format("MMM Do YYYY")
        const jobExpired = moment().isAfter(moment(applicationDateField?.value?.end, "YYYY-MM-DD"), "day");
        if (jobExpired) {
            return "Job Application Expired";
        } else {
            return lastdate;
        }
    };

    const CardTitle = ({ title, slug }) => {
        const Icon = categoryIcons[slug];

        return (
            <>
                <h5>
                    <Icon size={18} strokeWidth={2.2} />
                    <span>{title} Pass Jobs</span>
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

                        <h1>Latest {title} Pass Jobs {year}</h1>

                        <p className="hero-subtitle">
                            {content.description1}
                        </p>

                        <HeroSearch exactcategory="Jobs" />

                        <ul className="hero-features my-1">
                            <li><BadgeCheck size={16} /> Daily Updated Notifications</li>
                            <li><BadgeCheck size={16} /> Official Source Based Information</li>
                            <li><BadgeCheck size={16} /> Fast & Easy Access</li>
                            <li><BadgeCheck size={16} /> Free For All Users</li>
                        </ul>

                        <div className="hero-stats">
                            <div className="hero-stat-item">
                                <h3><StatCounter end={jobs.length} suffix={"+"} /></h3>
                                <span>{stat?.label}</span>
                            </div>

                            <div className="hero-stat-item">
                                <h3><span>100%</span></h3>
                                <span>Official Sources</span>
                            </div>
                            <div className="hero-stat-item">
                                <h3><span>24/7</span></h3>
                                <span>Updates</span>
                            </div>

                            <div className="hero-stat-item">
                                <h3><span>Free</span></h3>
                                <span>Access</span>
                            </div>
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

                        <div className="trust-badges que">
                            {badges.map((badge, index) => (
                                <span key={index}>
                                    <CircleCheckBig size={16} />{badge}
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
                        <li className="breadcrumb-item active" aria-current="page">{title} Pass Jobs</li>
                    </ol>
                </nav>
            </div>

            {/* ================= LIST ================= */}
            <div className={`card-box ${listcls}`}>
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
                                                            <div className="job-card">

                                                                <h3 className="job-title">
                                                                    {item.name}
                                                                </h3>

                                                                <div className="job-info">

                                                                    <div className="job-date">
                                                                        <span><CalendarDays size={18} /></span>

                                                                        <p>
                                                                            <strong>Last Date:</strong>{" "}

                                                                            {
                                                                                getLastDate(item.fields) === "Job Application Expired"
                                                                                    ? <span className="expired-text">Over</span>
                                                                                    : getLastDate(item.fields)
                                                                            }

                                                                        </p>

                                                                    </div>

                                                                    <div className='status-div'>
                                                                        <strong>Application Status:</strong>{" "}
                                                                        <div
                                                                            className={
                                                                                getLastDate(item.fields) === "Job Application Expired"
                                                                                    ? "status-badge expired"
                                                                                    : "status-badge active"
                                                                            }
                                                                        >

                                                                            {
                                                                                getLastDate(item.fields) === "Job Application Expired"
                                                                                    ? "🔴 Expired"
                                                                                    : "🟢 Active"
                                                                            }
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div className="job-footer">

                                                                    <span className="apply-link">

                                                                        Explore Now

                                                                        <span className="arrow">
                                                                            →
                                                                        </span>

                                                                    </span>

                                                                </div>

                                                            </div>
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

                Showing <strong>{jobs.length}</strong> Jobs

            </div>

            <section className="related-posts">

                <h2><Flame size={32} /> Trending {title} Pass Jobs</h2>

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
                        <div key={index} className={`faq-card ${listcls}`}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </section>
            )}

            {aboutData && (
                <section className={`about-category ${listcls}`}>

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

        </div >
    )
}
