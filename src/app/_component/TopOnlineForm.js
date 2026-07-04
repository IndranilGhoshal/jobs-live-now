'use client'

import React, { useEffect, useState } from 'react'
import UsePagination from "@/app/_component/UsePagination";
import { year } from "@/app/utils/common-text";
import moment from "moment";
import Link from "next/link";
import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import HeroSearch from './HeroSearch';
import {
    BriefcaseBusiness,
    IdCard,
    Award,
    ClipboardCheck,
    BookOpenCheck,
    GraduationCap,
    CalendarDays,
    BadgeCheck,
    ShieldCheck,
    RefreshCw,
    CircleCheckBig,
    Landmark,
    FileText,
    Train,
    LandmarkIcon,
    Shield,
    Users,
    Wallet,
    TrendingUp,
    HeartPulse,
    Search,
    Flame,
    Sparkles,
    Clock3,
    CircleHelp,
    FilePenLine,
} from "lucide-react";
import StatCounter from './StatCounter';
import { PopularSearches } from './json/PopularSearches';

const filters = [
    { name: "All", value: "all" },
    { name: "Latest", value: "latest" },
    { name: "Closing Soon", value: "closing soon" },
    { name: "Active", value: "active" },
    { name: "Expired", value: "expired" },
    { name: "SSC", value: "SSC Job" },
    { name: "UPSC", value: "UPSC Job" },
    { name: "Bank", value: "Bank Job" },
    { name: "Railway", value: "Railway Job" },
    { name: "Teaching", value: "Teaching Job" },
    { name: "Defence", value: "Defence Job" },
    { name: "Contractual", value: "Contractual Job" }
];

export default function TopOnlineForm() {
    const [topOnlineForm, settopOnlineForm] = useState([]);
    const [admitCardData, setadmitCardData] = useState([]);
    const [resultData, setresultData] = useState([]);
    const [answerKeyData, setanswerKeyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setlimit] = useState(20)
    const [page, setPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [activeFilter, setActiveFilter] = useState("All");
    const [filter, setFilter] = useState("All");
    const [starcard, setstarcard] = useState([]);
    const [featuredForm, setFeaturedForm] = useState(null);

    // ================= FETCH API =================
    useEffect(() => {
        fetchJobs(currentPage, filter);
    }, [currentPage, filter]);

    const fetchJobs = async (pageNumber, jobtype) => {
        try {
            setLoading(true);
            settopOnlineForm([])
            setadmitCardData([])
            setresultData([])
            setanswerKeyData([])
            const skip = (pageNumber - 1) * limit;
            const res = await fetch("/api/public-job", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ limit, skip, jobtype, list: true })
            });

            const data = await res.json();
            if (data.success) {
                let totalPage = Math.ceil(data.listlength / limit);

                setPage(totalPage);

                setFeaturedForm(data?.data?.featuredOnlineForm || null);
                settopOnlineForm(data?.data?.topOnlineForm || []);

                setadmitCardData(data?.data?.admitCardData || []);
                setresultData(data?.data?.resultData || []);
                setanswerKeyData(data?.data?.answerKeyData || []);
                setstarcard(data?.data?.starcard || []);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };


    // ================= LAST DATE =================

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

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <div className="container job-dtl main">
                <div className="row">
                    <div className="col-sm-12">
                        <SocialJoinLink />

                        <div className="hero-box card-box mt-3">

                            <h1>Top Online Forms {year}</h1>

                            <p className="hero-subtitle">
                                Jobs Live Now provides the latest government online form notifications
                                for SSC, UPSC, Railway, Banking, Defence, Police, Teaching and various
                                State Government departments across India.
                            </p>

                            <HeroSearch exactcategory="Jobs" />

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
                                    Candidates can check eligibility criteria, application dates,
                                    vacancy details, official notifications and direct apply links.
                                    We regularly update recruitment notifications from official sources
                                    so that job seekers never miss important deadlines.
                                </p>

                            </div>

                            <div className="trust-badges">
                                <span><BadgeCheck size={16} /> Verified Notifications</span>
                                <span><ShieldCheck size={16} /> Secure Links</span>
                                <span><RefreshCw size={16} /> Daily Updated</span>
                                <span><CircleCheckBig size={16} /> Official Sources</span>
                            </div>

                        </div>
                    </div>
                </div>

                {
                    featuredForm && (
                        <div className="featured-form">

                            <div className="featured-tag">
                                <Flame size={16} fill="currentColor" />
                                Featured Online Form
                            </div>

                            <h2>{featuredForm.title}</h2>

                            <div className="featured-meta">
                                <span>
                                    <CalendarDays size={16} /> Last Date : {moment(featuredForm.applicationEnd).format("DD MMM YYYY")}
                                </span>

                                <span>
                                    <BriefcaseBusiness size={16} /> {featuredForm.jobType}
                                </span>
                            </div>

                            <Link
                                href={`/${featuredForm.slug}`}
                                className="featured-btn"
                            >
                                Explore Now →
                            </Link>

                        </div>
                    )
                }

                <div className="update-box">
                    <BriefcaseBusiness size={16} /> Last Updated: {moment().format("MMMM Do YYYY")} | <RefreshCw size={16} /> Daily Updated
                </div>

                <div className="breadcrumb-box mb-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item cp"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Top Online Form</li>
                        </ol>
                    </nav>
                </div>

                <div className="filter-row">
                    {filters.map((item, i) => (
                        <button
                            key={i}
                            className={`filter-btn ${activeFilter === item.name ? "active" : ""
                                }`}
                            onClick={() => { setActiveFilter(item.name); setFilter(item.value) }}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="card-box online-form mg-lst">
                    <h5>
                        <BriefcaseBusiness size={18} />
                        <span>
                            Top Online Form
                        </span>
                    </h5>
                    <ul>
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
                                        topOnlineForm?.length > 0 ? (

                                            <>
                                                {
                                                    topOnlineForm?.map((item, i) => (

                                                        <li key={i}>

                                                            <Link href={`/${item.slug}`}>

                                                                <div className="job-card">

                                                                    <h3 className="job-title">
                                                                        {item.title}
                                                                    </h3>

                                                                    <div className="job-info">

                                                                        <div className="badge-group">

                                                                            {
                                                                                item.isNew &&
                                                                                <span className="new-badge">
                                                                                    <Sparkles size={14} strokeWidth={2.5} />
                                                                                    New
                                                                                </span>
                                                                            }

                                                                            {
                                                                                item.daysLeft !== null &&
                                                                                item.daysLeft <= 3 &&
                                                                                item.daysLeft >= 0 &&
                                                                                <span className="today-badge">
                                                                                    <Clock3 size={14} strokeWidth={2.5} />
                                                                                    Closing Soon
                                                                                </span>
                                                                            }
                                                                        </div>

                                                                        <div className="job-date">

                                                                            <span>
                                                                                <CalendarDays size={18} />
                                                                            </span>

                                                                            <p>
                                                                                <strong>Last Date:</strong>{" "}

                                                                                {
                                                                                    item.isExpired
                                                                                        ? <span className="expired-text">Over</span>
                                                                                        : moment(item.applicationEnd).format("DD MMM YYYY")
                                                                                }

                                                                            </p>

                                                                        </div>

                                                                        <div className="status-div">

                                                                            <strong>Application Status:</strong>

                                                                            <div
                                                                                className={
                                                                                    item.isExpired
                                                                                        ? "status-badge expired"
                                                                                        : "status-badge active"
                                                                                }
                                                                            >

                                                                                {
                                                                                    item.isExpired
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
                </div>
                {
                    page > 1 && <div className='pagins'><UsePagination handleChangePage={handleChangePage} page={page} currentPage={currentPage} /></div>
                }

                <div className="showing-count">

                    Showing <strong>{topOnlineForm.length}</strong> Jobs

                </div>

                <div className="faq-section">

                    <h2>
                        <CircleHelp size={30} strokeWidth={2.2} />
                        <span>Frequently Asked Questions</span>
                    </h2>

                    <div className="faq-card">
                        <h3>How can I apply for government jobs?</h3>
                        <p>
                            Candidates can apply through the official recruitment website mentioned in the notification. Always read the eligibility criteria, age limit, application fee and important dates before submitting the online form.
                        </p>
                    </div>

                    <div className="faq-card">
                        <h3>How often is this page updated?</h3>
                        <p>
                            Jobs Live Now updates this page daily whenever new SSC, UPSC, Railway, Banking, Defence, Police and State Government recruitment notifications are released.
                        </p>
                    </div>

                    <div className="faq-card">
                        <h3>Are all notifications verified?</h3>
                        <p>
                            Yes. We verify recruitment information from official government websites, recruitment boards and public sector organizations before publishing.
                        </p>
                    </div>

                    <div className="faq-card">
                        <h3>Can I find direct apply links here?</h3>
                        <p>
                            Yes. Most recruitment posts include direct application links, official notifications and detailed eligibility information for candidates.
                        </p>
                    </div>

                    <div className="faq-card">
                        <h3>Is Jobs Live Now free to use?</h3>
                        <p>
                            Yes. All job notifications, admit cards, results, answer keys and educational updates are freely accessible for all users.
                        </p>
                    </div>

                </div>

                <div className="official-sources-box">

                    <h2>
                        <Landmark size={30} />
                        <span>Official Recruitment Sources</span>
                    </h2>

                    <p>
                        Jobs Live Now collects recruitment information from official government
                        organizations, recruitment boards and public sector institutions.
                        Candidates should always verify details through the official websites
                        before applying.
                    </p>

                    <div className="sources-grid">

                        <div className="source-card">
                            <Link href={`/recruitment/government-job`}>
                                <BriefcaseBusiness size={34} />
                                <h4>Government Jobs</h4>
                                <p>Forms, Results, etc.</p>
                            </Link>
                        </div>

                        <div className="source-card">
                            <Link href={`/recruitment/upsc-job`}>
                                <Landmark size={34} />
                                <h4>UPSC Jobs</h4>
                                <p>Union Public Service Commission</p>
                            </Link>
                        </div>

                        <div className="source-card">
                            <Link href={`/recruitment/ssc-job`}>
                                <FileText size={34} />
                                <h4>SSC Jobs</h4>
                                <p>Staff Selection Commission</p>
                            </Link>
                        </div>

                        <div className="source-card">
                            <Link href={`/recruitment/railway-job`}>
                                <Train size={34} />
                                <h4>Railway Jobs</h4>
                                <p>Railway Forms, Results, etc.</p>
                            </Link>
                        </div>

                        <div className="source-card">
                            <Link href={`/recruitment/bank-job`}>
                                <LandmarkIcon size={34} />
                                <h4>Bank Jobs</h4>
                                <p>RBI, IBPS, SBI Forms, Results, etc.</p>
                            </Link>
                        </div>

                        <div className="source-card">
                            <Link href={`/recruitment/defence-job`}>
                                <Shield size={34} />
                                <h4>Defence Jobs</h4>
                                <p>Army, Navy & Air Force Recruitment</p>
                            </Link>
                        </div>

                        <div className="source-card">
                            <Link href={`/recruitment/teaching-job`}>
                                <GraduationCap size={34} />
                                <h4>Teaching Jobs</h4>
                                <p>Forms, Results, etc.</p>
                            </Link>
                        </div>

                        <div className="source-card">
                            <Link href={`/recruitment/contractual-job`}>
                                <Users size={34} />
                                <h4>Contractual Jobs</h4>
                                <p>Forms, Results, etc.</p>
                            </Link>
                        </div>

                    </div>

                </div>

                <div className="apply-guide-box">

                    <h2>
                        <FilePenLine size={22} strokeWidth={2.2} />
                        <span>How To Apply For Government Online Forms?</span>
                    </h2>

                    <p>
                        Follow these simple steps before submitting any government job application form.
                    </p>

                    <div className="apply-grid">

                        <div className="apply-step">
                            <span>1</span>
                            <h4>Read Notification</h4>
                            <p>Carefully read the official recruitment notification.</p>
                        </div>

                        <div className="apply-step">
                            <span>2</span>
                            <h4>Check Eligibility</h4>
                            <p>Verify age limit, qualification and experience.</p>
                        </div>

                        <div className="apply-step">
                            <span>3</span>
                            <h4>Prepare Documents</h4>
                            <p>Keep photo, signature and certificates ready.</p>
                        </div>

                        <div className="apply-step">
                            <span>4</span>
                            <h4>Fill Application Form</h4>
                            <p>Enter all details carefully without mistakes.</p>
                        </div>

                        <div className="apply-step">
                            <span>5</span>
                            <h4>Upload Documents</h4>
                            <p>Upload scanned photo, signature and required files.</p>
                        </div>

                        <div className="apply-step">
                            <span>6</span>
                            <h4>Pay Application Fee</h4>
                            <p>Complete payment if applicable.</p>
                        </div>

                        <div className="apply-step">
                            <span>7</span>
                            <h4>Submit Form</h4>
                            <p>Review all information before final submission.</p>
                        </div>

                        <div className="apply-step">
                            <span>8</span>
                            <h4>Print Confirmation</h4>
                            <p>Save and print the application form for future use.</p>
                        </div>

                    </div>

                </div>

                <div className="govt-jobs-section">

                    <h2>
                        <Landmark size={30} />
                        <span>Why Government Jobs Are Popular in India?</span>
                    </h2>

                    <p>
                        Government jobs remain one of the most preferred career choices in India because of job security, attractive salary packages, retirement benefits and long-term career growth opportunities. Every year millions of candidates apply for SSC, Railway, Banking, Defence, Police and UPSC recruitment examinations.
                    </p>

                    <div className="govt-benefits">

                        <div className="benefit-card">
                            <ShieldCheck size={32} />
                            <strong>Job Security</strong>
                            <span>Stable career opportunities with long-term employment benefits.</span>
                        </div>

                        <div className="benefit-card">
                            <Wallet size={32} />
                            <strong>Good Salary</strong>
                            <span>Competitive pay scales, allowances and yearly increments.</span>
                        </div>

                        <div className="benefit-card">
                            <TrendingUp size={32} />
                            <strong>Career Growth</strong>
                            <span>Promotions and departmental growth opportunities.</span>
                        </div>

                        <div className="benefit-card">
                            <HeartPulse size={32} />
                            <strong>Employee Benefits</strong>
                            <span>Medical facilities, pension schemes and insurance benefits.</span>
                        </div>

                    </div>

                </div>

                <div className="row ext-lst">
                    <div className="col-md-4">

                        <div className="card-box admit-card">

                            <h5><IdCard size={18} /> Admit Card</h5>

                            {
                                admitCardData?.length > 0 ? (

                                    <>
                                        <ul>

                                            {
                                                admitCardData.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title={item.name}
                                                    >
                                                        <Link href={`/${item.slug}`}>
                                                            <>
                                                                {item.name}
                                                            </>
                                                        </Link>
                                                    </li>

                                                ))
                                            }

                                        </ul>

                                        <div className="view-more">

                                            <span
                                                className="btn-view"
                                            >
                                                <Link
                                                    href={`/category/admit-card`}
                                                    className="btn-view"
                                                >{`View All →`}</Link>
                                            </span>

                                        </div>
                                    </>

                                ) : (

                                    <div className="no-data-box-list">

                                        <div className="no-data-icon-list">
                                            📂
                                        </div>

                                        <p>No data available</p>

                                    </div>

                                )
                            }

                        </div>

                    </div>

                    {/* ================= ADMIT CARD ================= */}
                    <div className="col-md-4">

                        <div className="card-box results">

                            <h5><Award size={18} /> Results</h5>

                            {
                                resultData?.length > 0 ? (

                                    <>
                                        <ul>

                                            {
                                                resultData.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title={item.name}
                                                    >
                                                        <Link href={`/${item.slug}`}>
                                                            <>
                                                                {item.name}
                                                            </>
                                                        </Link>
                                                    </li>
                                                ))
                                            }

                                        </ul>

                                        <div className="view-more">

                                            <span
                                                className="btn-view"
                                            >
                                                <Link
                                                    href={`/category/results`}
                                                    className="btn-view"
                                                >{`View All →`}</Link>
                                            </span>

                                        </div>
                                    </>

                                ) : (

                                    <div className="no-data-box-list">

                                        <div className="no-data-icon-list">
                                            📂
                                        </div>

                                        <p>No data available</p>

                                    </div>

                                )
                            }

                        </div>

                    </div>

                    {/* ================= RESULT ================= */}
                    <div className="col-md-4">

                        <div className="card-box answer-key">

                            <h5><ClipboardCheck size={18} /> Answer Key</h5>

                            {
                                answerKeyData?.length > 0 ? (

                                    <>
                                        <ul>

                                            {
                                                answerKeyData.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title={item.name}
                                                    >
                                                        <Link href={`/${item.slug}`}>
                                                            <>
                                                                {item.name}
                                                            </>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                        <div className="view-more">

                                            <span
                                                className="btn-view"
                                            >
                                                <Link
                                                    href={`/category/answer-key`}
                                                    className="btn-view"
                                                >{`View All →`}</Link>
                                            </span>

                                        </div>
                                    </>

                                ) : (

                                    <div className="no-data-box-list">

                                        <div className="no-data-icon-list">
                                            📂
                                        </div>

                                        <p>No data available</p>

                                    </div>

                                )
                            }

                        </div>

                    </div>
                </div>

                <div className="editorial-box">
                    <div className="editorial-header">
                        <h2>
                            <Users size={22} strokeWidth={2.2} />
                            <span>Editorial Team</span>
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

            </div>
        </>
    )
}
