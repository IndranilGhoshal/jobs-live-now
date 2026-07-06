"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import { slugify, slugToTitle } from "../utils/common";
import SocialLinks from "./SocialLinks";
import BreadcrumbSchema from "./schema/BreadcrumbSchema";
import ArticleSchema from "./schema/ArticleSchema";
import FAQSchema from "./schema/FAQSchema";
import JobSchema from "./schema/JobSchema";
import {
    CalendarDays,
    UserRound,
    Tags,
    BriefcaseBusiness,
    CircleHelp,
    Award,
    IdCard,
    ClipboardCheck,
    BookOpenCheck,
    GraduationCap,
    ShieldCheck,
    Code2,
    BookOpen,
    Star,
    CheckCircle,
    Calendar,
    PenTool,
    FileCheck,
    Globe,
    FileText,
    Search,
    LifeBuoy,
    Mail,
    Clock3,
    MessageCircle,
    RefreshCw,
    Eye,
    FolderOpen,
    ArrowRight,
    FilePenLine,
    Briefcase,
    Send,
    Building2,
    Users,
    MapPin,
    MonitorSmartphone,
    IndianRupee,
    ExternalLink,
    Link2,
    ClipboardList,
    NotebookText,
    Rocket,
    MessagesSquare,
    Wrench
} from "lucide-react";
import { FaqData } from "./json/FaqData";
import FeedbackSection from "./FeedbackSection";
import Comments from "./Comments";
import { PopularSearches } from "./json/PopularSearches";
import { fbpagelink, wpgrouplink } from "../utils/common-text";

export default function JobDetailsClient({ job, relatedPost, slug }) {

    const [loading, setLoading] = useState(false);

    const relatedposts = relatedPost?.data || []

    const jobTypeMap = {
        "Government Job": "default",
        "UPSC Job": "upsc",
        "SSC Job": "ssc",
        "Railway Job": "railway",
        "Bank Job": "bank",
        "Defence Job": "defence",
        "Teaching Job": "teaching",
        "Contractual Job": "contractual",
    };

    const data = job ? job : null;

    // ================= NOT FOUND =================
    if (!data) {

        return (
            <div className="container job-dttls main">
                <div className="notfound-container">
                    <div className="notfound-box">
                        <div className="icon">😕</div>

                        <h1>Job Not Found !</h1>

                        <p>
                            Sorry, the job you are looking for does not exist or has been removed.
                        </p>

                        <Link href="/" className="home-btn">
                            🏠 Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        );

    }

    const temp = data?.data;

    const array = temp?.fields ?? [];

    let finalarray = [];


    // ================= GET FIELD =================
    const getField = (name) => {

        return temp?.fields?.find(
            (f) => f.fieldName === name
        );

    };



    // ================= FIELD VALUES =================
    const title = getField("Job Advertisement Title")?.value || "";

    const category = temp?.category;

    const advertisementnumber = getField("Job Advertisement Number")?.value || "";

    const organisation = getField("Organisation Name")?.value || "";

    const jobtype = getField("Job Type")?.value?.value || "";

    const categoryType = getField("Job Category")?.value?.value || null;

    const author = temp?.author || "Admin";

    const tags = getField("Tags")?.value || [];

    const shortInfo = getField("Short Information")?.value || "";

    const postdate = temp?.createdAt || "";

    const updatedat = temp?.updatedAt || "";

    const lastdate = getField("Application Date")?.value?.end || "";


    let applyLink = getField("Apply Online Link")?.value || "";
    let notificationPdf = getField("Notification PDF")?.value || "";
    let officialWebsite = getField("Official Website")?.value || "";

    let postname = getField("Post Name")?.value || "";
    let joblocation = getField("Job Location")?.value || "";
    let applicationmode = getField("Application Mode")?.value || "";
    let salary = getField("Salary")?.value || "";
    let recruitmentoverview = getField("Recruitment Overview")?.value || "";




    let faqs = [];

    if (categoryType === "Results") {

        faqs = FaqData.result;

    } else if (categoryType === "Admit Card") {

        faqs = FaqData.admitCard;

    } else if (categoryType === "Answer Key") {

        faqs = FaqData.answerKey;

    } else if (categoryType === "Syllabus") {

        faqs = FaqData.syllabus;

    } else if (categoryType === "Admission Form") {

        faqs = FaqData.admission;

    } else {
        const jobKey = jobTypeMap[jobtype] || "default";
        faqs = FaqData.jobs[jobKey];
    }



    if (array.length > 0) {
        for (let a of array) {
            if (
                a.fieldName !== "Job Advertisement Title" &&
                a.fieldName !== "Organisation Name" &&
                a.fieldName !== "Job Advertisement Number" &&
                a.fieldName !== "Job Type" &&
                a.fieldName !== "Application Date" &&
                a.fieldName !== "Qualification Allow" &&
                a.fieldName !== "Tags" &&
                a.fieldName !== "Short Information" &&
                a.fieldName !== "Job Category" &&
                a.fieldName !== "Apply Online Link" &&
                a.fieldName !== "Notification PDF" &&
                a.fieldName !== "Official Website" &&
                a.fieldName !== "Post Name" &&
                a.fieldName !== "Job Location" &&
                a.fieldName !== "Application Mode" &&
                a.fieldName !== "Salary" &&
                a.fieldName !== "Recruitment Overview"
            ) {
                finalarray.push(a);
            }
        }
    }

    // ================= LOADING =================
    if (loading) {

        return (
            <div className="container job-dtl main">

                <div className="skeleton skeleton-title mb-3"></div>

                <div className="skeleton skeleton-breadcrumb mb-3"></div>

                <div className="card-box p-3">

                    <div className="skeleton skeleton-heading mb-4"></div>

                    {
                        Array.from({ length: 10 }).map((_, i) => (

                            <div
                                key={i}
                                className="skeleton-row"
                            >

                                <div className="skeleton skeleton-label"></div>

                                <div className="skeleton skeleton-value"></div>

                            </div>

                        ))
                    }
                    <div className="d-flex gap-2 mt-4">

                        <div className="skeleton skeleton-btn"></div>

                        <div className="skeleton skeleton-btn"></div>

                    </div>

                </div>
                <div className="card-box p-3 mt-3">

                    <div className="skeleton skeleton-heading mb-3"></div>

                    {
                        Array.from({ length: 8 }).map((_, i) => (

                            <div
                                key={i}
                                className="skeleton skeleton-line mb-2"
                            ></div>

                        ))
                    }

                </div>

            </div>
        );

    }


    const GetFaq = () => {
        return (
            <section className="faq-section">

                <h2>
                    <CircleHelp size={30} strokeWidth={2.2} />
                    <span>Frequently Asked Questions</span>
                </h2>

                <p className="faq-description">
                    Find answers to the most common questions regarding this recruitment,
                    including eligibility, application process, selection procedure,
                    important dates, salary, admit card, result, and other essential details.
                </p>

                <div className="faq-container">

                    {faqs.map((faq, index) => (

                        <details
                            key={index}
                            className="faq-item"
                            open={index === 0}
                        >

                            <summary>{faq.question}</summary>

                            <p>{faq.answer}</p>

                        </details>

                    ))}

                </div>

            </section>
        )
    }

    return (
        <>

            <div className="container job-dttls main">

                {/* ================= BREADCRUMB ================= */}
                <div className="breadcrumb-box mb-3">

                    <nav aria-label="breadcrumb">

                        <ol className="breadcrumb mb-0">

                            <li className="breadcrumb-item cp">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>

                            {
                                category == "Jobs" ?
                                    <>
                                        <li className="breadcrumb-item cp">
                                            <Link href="/top-online-form">
                                                Top Online Form
                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="breadcrumb-item">
                                            <Link href={"category/" + slugify(category)}>
                                                {slugToTitle(category)}
                                            </Link>
                                        </li>
                                    </>
                            }



                            <li
                                className="breadcrumb-item single-line-ellipsis active"
                                aria-current="page"
                            >
                                {title}
                            </li>

                        </ol>

                    </nav>

                </div>

                {/* ================= TITLE ================= */}
                <div className="post-title">

                    <h1 className="job-main-title">
                        {title}
                    </h1>

                </div>

                <div>
                    <div className="important-links">
                        <h2><Link2 size={24} strokeWidth={2.2} /> Important Links</h2>

                        <div className="links-grid">

                            {
                                applyLink &&
                                <a
                                    href={applyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-btn apply"
                                >
                                    <FilePenLine size={18} strokeWidth={2.2} />
                                    <span>Apply Online</span>
                                </a>
                            }
                            {
                                notificationPdf &&
                                <a
                                    href={notificationPdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-btn notification"
                                >
                                    <FileText size={18} strokeWidth={2.2} />
                                    <span>Download Notification</span>
                                </a>
                            }

                            {
                                officialWebsite &&
                                <a
                                    href={officialWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-btn website"
                                >
                                    <Globe size={18} strokeWidth={2.2} />
                                    <span>Official Website</span>
                                </a>
                            }

                            <Link
                                href={`/top-online-form`}
                                className="link-btn jobs"
                            >
                                <Briefcase size={18} strokeWidth={2.2} />
                                <span>Latest Jobs</span>
                            </Link>

                            {
                                !applyLink &&
                                <a
                                    href={`/tools`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-btn tools"
                                >
                                    <Wrench size={18} strokeWidth={2.2} />
                                    <span>Online Tools</span>
                                </a>
                            }

                            <a
                                href={wpgrouplink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-btn whatsapp"
                            >
                                <MessageCircle size={18} strokeWidth={2.2} />
                                <span>Join WhatsApp</span>
                            </a>

                            <a
                                href={fbpagelink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-btn facebook"
                            >
                                <MessagesSquare size={18} />
                                <span>Join Facebook</span>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="quick-facts">

                    <span>
                        <CalendarDays size={16} strokeWidth={2} />
                        <b>Post Date:</b> {moment(postdate).format("LL")}
                    </span>

                    <span>
                        <UserRound size={16} strokeWidth={2} />
                        <b>Author:</b> {author}
                    </span>

                    <span>
                        <BriefcaseBusiness size={16} strokeWidth={2} />
                        <b>Job Type:</b> {jobtype}
                    </span>

                </div>

                <div className="recruitment-highlights">
                    <h2><ClipboardList size={24} strokeWidth={2.2} /> Recruitment Highlights</h2>

                    <div className="highlights-grid">

                        <div className="highlight-item">
                            <span>
                                <Building2 size={17} />
                                Organization
                            </span>
                            <strong>{organisation}</strong>
                        </div>
                        {
                            postname &&
                            <div className="highlight-item">
                                <span>
                                    <BriefcaseBusiness size={17} />
                                    Post Name
                                </span>
                                <strong>{postname}</strong>
                            </div>
                        }
                        {
                            joblocation &&
                            <div className="highlight-item">
                                <span>
                                    <MapPin size={17} />
                                    Job Location
                                </span>
                                <strong>{joblocation}</strong>
                            </div>
                        }

                        {
                            applicationmode &&

                            <div className="highlight-item">
                                <span>
                                    <MonitorSmartphone size={17} />
                                    Application Mode
                                </span>
                                <strong>{applicationmode}</strong>
                            </div>
                        }
                        {
                            salary &&
                            <div className="highlight-item">
                                <span>
                                    <IndianRupee size={17} />
                                    Salary
                                </span>
                                <strong>{salary}</strong>
                            </div>
                        }

                        {
                            officialWebsite &&
                            <div className="highlight-item">
                                <span>
                                    <Globe size={17} />
                                    Official Website
                                </span>

                                <strong>
                                    <a
                                        href={officialWebsite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {officialWebsite}
                                        <ExternalLink size={15} />
                                    </a>
                                </strong>
                            </div>
                        }
                    </div>
                </div>

                {recruitmentoverview && (
                    <section className="job-introduction">

                        <div className="section-heading">
                            <NotebookText size={22} strokeWidth={2.2} />
                            <h2>Recruitment Overview</h2>
                        </div>

                        <div
                            className="overview-content"
                            dangerouslySetInnerHTML={{
                                __html: recruitmentoverview
                            }}
                        />

                    </section>
                )}

                {
                    applyLink || notificationPdf || officialWebsite ?
                        <div className="quick-action-box">
                            <h2><Rocket size={24} strokeWidth={2.2} /> Quick Links</h2>

                            <div className="action-buttons">

                                {applyLink && (
                                    <a
                                        href={applyLink}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        className="apply-btn"
                                    >
                                        Apply Online
                                    </a>
                                )}

                                {notificationPdf && (
                                    <a
                                        href={notificationPdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="apply-btn"
                                    >
                                        Download Notification
                                    </a>
                                )}

                                {officialWebsite && (
                                    <a
                                        href={officialWebsite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="apply-btn"
                                    >
                                        Official Website
                                    </a>
                                )}

                            </div>
                        </div>
                        :
                        <></>
                }

                {/* ================= SHORT INFO ================= */}
                <div className="short-info">

                    <b>Short Information: </b>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: shortInfo,
                        }}
                    />

                </div>

                {/* ================= TITLE BOX ================= */}
                <div className="dtl-tlt">

                    <div className="dtl-tlt-txt">
                        {organisation}
                    </div>

                    <div className="dtl-tlt-des">
                        {title}
                    </div>

                    <div className="dtl-tlt-txt">
                        {advertisementnumber}
                    </div>

                </div>

                {/* ================= DETAILS ================= */}
                {
                    finalarray.map((item, i) => (

                        <div key={i} className="card-box">

                            <div className="red-head">
                                {item.fieldName}
                            </div>

                            <div
                                className="card-box-body"
                                dangerouslySetInnerHTML={{
                                    __html: item.value,
                                }}
                            />

                        </div>

                    ))
                }

                <div className="text-center mt-4">
                    {/* DISCLAIMER */}
                    <p style={{ fontSize: "14px", color: "#666" }}>
                        Disclaimer: This information is collected from official sources and
                        public notifications. Please verify details from official website
                        before applying.
                    </p>
                </div>

                <div className="job-tags">
                    <div className="job-tags-label">
                        <Tags size={18} />
                        <span>Tags:</span>
                    </div>

                    <div className="job-tags-content">
                        {tags?.map((tag, i) => (
                            <span
                                key={i}
                                className={`job-tag color-${(i % 6) + 1}`}
                            >
                                #{tag.label}
                            </span>
                        ))}
                    </div>
                </div>

                <GetFaq />

                <FeedbackSection slug={slug} />

                {
                    relatedposts &&
                    <div className="row m-0">
                        <div className="discover-more">

                            <h3>
                                {categoryType === "Admit Card" ? (
                                    <>
                                        <Award size={22} />
                                        Discover More Admit Cards
                                    </>
                                ) : categoryType === "Results" ? (
                                    <>
                                        <IdCard size={22} />
                                        Discover More Results
                                    </>
                                ) : categoryType === "Answer Key" ? (
                                    <>
                                        <ClipboardCheck size={22} />
                                        Discover More Answer Keys
                                    </>
                                ) : categoryType === "Syllabus" ? (
                                    <>
                                        <BookOpenCheck size={22} />
                                        Discover More Syllabus
                                    </>
                                ) : categoryType === "Admission Form" ? (
                                    <>
                                        <GraduationCap size={22} />
                                        Discover More Admission Forms
                                    </>
                                ) : (
                                    <>
                                        <BriefcaseBusiness size={22} />
                                        Discover More Jobs
                                    </>
                                )}
                            </h3>

                            <div className="discover-job-grid">

                                {relatedposts && relatedposts?.map((item) => (
                                    <Link
                                        href={`/${item.slug}`}
                                        key={item._id}
                                        className="discover-job-card"
                                    >

                                        <div className="discover-thumb">

                                            <div className="thumb-icon">
                                                {categoryType === "Results" ? (
                                                    <Award size={32} />
                                                ) : categoryType === "Admit Card" ? (
                                                    <IdCard size={32} />
                                                ) : categoryType === "Answer Key" ? (
                                                    <ClipboardCheck size={32} />
                                                ) : categoryType === "Syllabus" ? (
                                                    <BookOpenCheck size={32} />
                                                ) : categoryType === "Admission Form" ? (
                                                    <GraduationCap size={32} />
                                                ) : (
                                                    <BriefcaseBusiness size={32} />
                                                )}
                                            </div>

                                            <span>{category}</span>

                                        </div>

                                        <div className="discover-content">

                                            <h4 className="single-line-ellipsiss">
                                                {item.name}
                                            </h4>
                                            <p>
                                                Read complete details, eligibility, important dates and apply online.
                                            </p>

                                        </div>

                                    </Link>

                                ))}

                            </div>

                        </div>
                    </div>
                }

                <Comments
                    slug={slug}
                    title={'Join the Discussion'}
                    description={'Have a question about this recruitment? Share your thoughts or ask your questions below. Our team and other readers may help answer your queries.'}
                />

                <section className="author-box">

                    <div className="author-avatar">

                        👨‍💻

                    </div>

                    <div className="author-content">

                        <h2>About the Author</h2>

                        <p>

                            This article was researched, reviewed, and verified by the <strong>Jobs Live Now Editorial Team</strong>. Our editorial team regularly publishes and updates Government Job notifications, Admit Cards, Results, Answer Keys, Syllabus updates, and Career Guides using official recruitment notifications and trusted government sources.

                        </p>

                        <p>

                            Our goal is to provide accurate, up-to-date, and easy-to-understand information so candidates can stay informed about the latest government job opportunities across India.

                        </p>

                    </div>

                </section>

                <div className="author-card">

                    <div className="author-header">
                        <h2>
                            <ShieldCheck size={30} /> Reviewed & Verified
                        </h2>
                    </div>

                    <div className="author-item">
                        <span>
                            <Code2 size={16} /> Reviewed By
                        </span>
                        <strong>Jobs Live Now Editorial Team</strong>
                    </div>

                    <div className="author-item">
                        <span>
                            <BookOpen size={16} /> Research Team
                        </span>
                        <strong>Government Job Research Team</strong>
                    </div>

                    <div className="author-item">
                        <span>
                            <Star size={16} /> Experience
                        </span>
                        <strong>5+ Years of Government Job Research</strong>
                    </div>

                    <div className="author-item">
                        <span>
                            <CheckCircle size={16} /> Fact Checked
                        </span>
                        <strong>Yes</strong>
                    </div>

                    <div className="author-item">
                        <span>
                            <Calendar size={16} /> Last Updated
                        </span>
                        <strong>{moment(updatedat).format("MMMM Do YYYY")}</strong>
                    </div>

                </div>

                <section className="editorial-section">

                    <h2>
                        <ShieldCheck size={30} /> Editorial Information
                    </h2>

                    <p className="editorial-intro">
                        Every recruitment article published on Jobs Live Now is carefully researched
                        and reviewed using official government sources.
                    </p>

                    <div className="editorial-grid">

                        <div className="editorial-card">
                            <h3>
                                <PenTool size={18} /> Editorial Process
                            </h3>
                            <p>
                                Every article is reviewed and verified using official recruitment notifications
                                before publication.
                            </p>
                        </div>

                        <div className="editorial-card">
                            <h3>
                                <FileCheck size={18} /> Fact Check
                            </h3>
                            <p>
                                Information is verified against official government recruitment notifications.
                            </p>
                        </div>

                        <div className="editorial-card">
                            <h3>
                                <Globe size={18} /> Sources
                            </h3>

                            <ul>
                                <li><FileText size={14} /> Official Recruitment Notification PDF</li>
                                <li><Globe size={14} /> Official Organization Website</li>
                                <li><FileText size={14} /> Employment News Updates</li>
                            </ul>
                        </div>

                    </div>

                    <div className="review-info">

                        <div>
                            <span>
                                <Code2 size={16} /> Reviewed By
                            </span>
                            <strong>Jobs Live Now Editorial Team</strong>
                        </div>

                        <div>
                            <span>
                                <Star size={16} /> Experience
                            </span>
                            <strong>5+ Years Covering</strong>
                        </div>

                        <div>
                            <span>
                                <CheckCircle size={16} /> Source Verified
                            </span>
                            <strong>Yes</strong>
                        </div>

                        <div>
                            <span>
                                <Calendar size={16} /> Last Updated
                            </span>
                            <strong>{moment(updatedat).format("MMMM Do YYYY")}</strong>
                        </div>

                    </div>

                </section>

                <section className="help-support">

                    <div className="help-header">

                        <h2>
                            <LifeBuoy size={30} />
                            Need Help?
                        </h2>

                        <p>
                            If you have any questions regarding this recruitment, eligibility,
                            application process, or notice any incorrect information, feel free
                            to contact our support team. We are always happy to assist you.
                        </p>

                    </div>

                    <div className="help-grid">

                        <div className="help-card">

                            <span>
                                <Mail size={16} />
                                Email Support
                            </span>

                            <strong>support@jobslivenow.in</strong>

                        </div>

                        <div className="help-card">

                            <span>
                                <Clock3 size={16} />
                                Response Time
                            </span>

                            <strong>Within 24 Hours</strong>

                        </div>

                        <div className="help-card">

                            <span>
                                <MessageCircle size={16} />
                                Contact Us
                            </span>

                            <strong>
                                <a href={`/contact-us`}>
                                    Visit Contact Page <ArrowRight size={15} />
                                </a>
                            </strong>

                        </div>

                    </div>

                </section>

                <div className="article-info-card">

                    <h2>
                        <BookOpen size={30} />
                        Article Information
                    </h2>

                    <div className="info-row">

                        <span>
                            <Calendar size={16} />
                            Published
                        </span>

                        <strong>{moment(postdate).format("MMMM Do YYYY")}</strong>

                    </div>

                    <div className="info-row">

                        <span>
                            <RefreshCw size={16} />
                            Updated
                        </span>

                        <strong>{moment(updatedat).format("MMMM Do YYYY")}</strong>

                    </div>

                    <div className="info-row">

                        <span>
                            <CheckCircle size={16} />
                            Verified
                        </span>

                        <strong>Yes</strong>

                    </div>

                    <div className="info-row">

                        <span>
                            <FolderOpen size={16} />
                            Category
                        </span>

                        <strong>{categoryType ? categoryType : "Jobs"}</strong>

                    </div>

                    <div className="info-row">

                        <span>
                            <BriefcaseBusiness size={16} />
                            Job Type
                        </span>

                        <strong>{jobtype}</strong>

                    </div>

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

            {/* Schema */}
            <BreadcrumbSchema
                title={title}
                slug={slug}
                category={slugify(category)}
            />
            <JobSchema job={job} />

            <ArticleSchema job={job} />

            <FAQSchema faqs={faqs} />
        </>
    );

}
