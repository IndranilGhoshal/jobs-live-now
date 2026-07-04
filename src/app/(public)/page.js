import Link from "next/link";
import { title, url, year } from "../utils/common-text";
import { PopularSearches } from "../_component/json/PopularSearches";
import HeroSearch from "../_component/HeroSearch";
import {
    BriefcaseBusiness,
    IdCard,
    Award,
    ClipboardCheck,
    BookOpenCheck,
    GraduationCap,
    TrainFront,
    Landmark,
    FileText,
    Shield,
    Search,
    Cake,
    Image,
    FileArchive,
    Keyboard,
    Signature,
    Camera,
    FileImage,
    BadgeCheck
} from "lucide-react";
import dynamic from "next/dynamic";
import StatCounter from "../_component/StatCounter";

export const revalidate = 3600;

const SocialLinks = dynamic(() => import("../_component/SocialLinks"));

const SocialJoinLink = dynamic(() =>
    import("../_component/SocialJoinLink")
);

// ================= SEO =================
export const metadata = {

    title:
        "Latest Government Jobs 2026, Admit Card, Results, Recruitment Updates | Jobs Live Now",

    description:
        "Get latest Government Jobs 2026, Sarkari Results, Admit Cards, Recruitment Notifications, Answer Keys, Admissions and Scholarship Updates from SSC, UPSC, Railway, Banking and State Government departments.",

    keywords: [
        "Government Result",
        "Government Jobs",
        "Admit Card",
        "Online Form",
        "SSC Jobs",
        "UPSC Jobs",
        "Railway Jobs",
        "Defence Jobs",
        "Bank Jobs",
        "Latest Jobs",
    ],

    alternates: {
        canonical: url,
    },

    openGraph: {

        title: title,

        description: "Latest Government Result, Government Jobs, Online Forms and Admit Cards.",

        url: url,

        siteName: title,

        type: "website",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default async function Page() {

    let response = [];

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-index`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    list: true,
                }),
                next: {
                    revalidate: 3600,
                },
            }
        );
        response = await res.json();



    } catch (error) {
        console.error("API Error:", error);
        response = [];
    }

    const data = response?.data || {};
    const topOnlineForm = data?.topOnlineForm || [];

    const admitCardData = data?.admitCard || [];

    const resultData = data?.results || [];

    const answerKeyData = data?.answerKey || [];

    const syllabusData = data?.syllabus || [];

    const admissionFormData = data?.admissionForm || [];

    const byqualification = data?.byqualification || [];

    const byrecruitment = data?.byrecruitment || []

    const starcard = data?.starcard || []

    const icons = {
        "Top Online Form": BriefcaseBusiness,
        "Admit Card": IdCard,
        "Results": Award,
        "Answer Key": ClipboardCheck,
        "Syllabus": BookOpenCheck,
        "Admission Form": GraduationCap,
    };


    // ================= COMMON COMPONENT =================
    const RenderList = ({
        title,
        data,
        viewMore,
        type
    }) => {
        const Icon = icons[title];
        return (
            <div className="col-md-4">

                <div className={`card-box ${type}`}>

                    <h5 className="card-title">
                        {Icon && <Icon size={20} />}
                        <span>{title}</span>
                    </h5>

                    {
                        data?.length > 0 ? (

                            <>
                                <ul>

                                    {
                                        data.map((item, i) => (
                                            <li
                                                key={i}
                                                data-bs-toggle="tooltip" data-bs-placement="top" title={item.name}
                                            >
                                                <Link
                                                    href={`/${item.slug}`}
                                                >{item.name}</Link>

                                            </li>

                                        ))
                                    }

                                </ul>

                                <div className="view-more">

                                    <Link
                                        href={viewMore}
                                        className="btn-view"
                                    >{`View All →`}</Link>

                                </div>
                            </>

                        ) : (

                            <div className="no-data-box-list">

                                <div className="no-data-icon-list">
                                    📂
                                </div>

                                <p>
                                    No available data right now
                                </p>

                            </div>

                        )
                    }

                </div>

            </div>
        );
    }




    return (
        <>
            <div className="container idx-pg main">
                <div className="row">
                    <div className="col-md-12">
                        <SocialJoinLink />
                        <div className="hero-box card-box mt-3">

                            <h1>
                                Latest Government Jobs, Results & Admit Cards {year}
                            </h1>

                            <p className="hero-subtitle">
                                Search the latest <strong>Government Jobs</strong>, <strong>Results</strong>, <strong> Admit Cards</strong>, <strong>Answer Keys</strong>, <strong> Admissions</strong> and <strong>Recruitment Updates</strong> from SSC, UPSC, Railway, Banking, Defence, Police, State Government and Central Government departments — all in one place.
                            </p>

                            <HeroSearch exactcategory="Jobs" />

                            <ul className="hero-features my-2">
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
                                    <strong>Jobs Live Now</strong> is a trusted platform that provides
                                    verified Government Job Notifications, Admit Cards, Results,
                                    Answer Keys, Admissions, Scholarships and Recruitment Updates
                                    from official sources across India.
                                </p>

                                <p>
                                    We regularly verify recruitment notifications and provide direct
                                    official links, helping students and job seekers quickly find
                                    authentic information without unnecessary searching.
                                </p>

                            </div>

                        </div>
                    </div>
                    {/* Job list Cards */}
                    <div className="col-md-9">
                        <div className="row">
                            {/* ================= TOP ONLINE FORM ================= */}
                            <RenderList
                                title="Top Online Form"
                                data={topOnlineForm}
                                viewMore="/top-online-form"
                                type="online-form"
                            />

                            {/* ================= ADMIT CARD ================= */}
                            <RenderList
                                title="Admit Card"
                                data={admitCardData}
                                viewMore="/category/admit-card"
                                type="admit-card"
                            />

                            {/* ================= RESULT ================= */}
                            <RenderList
                                title="Results"
                                data={resultData}
                                viewMore="/category/results"
                                type="results"
                            />

                            {/* ================= ANSWER KEY ================= */}
                            <RenderList
                                title="Answer Key"
                                data={answerKeyData}
                                viewMore="/category/answer-key"
                                type="answer-key"
                            />

                            {/* ================= SYLLABUS ================= */}
                            <RenderList
                                title="Syllabus"
                                data={syllabusData}
                                viewMore="/category/syllabus"
                                type="syllabus"
                            />

                            {/* ================= ADMISSION FORM ================= */}
                            <RenderList
                                title="Admission Form"
                                data={admissionFormData}
                                viewMore="/category/admission-form"
                                type="admission-form"
                            />

                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="sidebar quck-lnk oft">
                            <h6>Online Free Tools</h6>
                            <ul>
                                <li>
                                    <Link href="/tools/age-calculator">
                                        <Cake size={18} /> Age Calculator
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/tools/image-resizer">
                                        <Image size={18} /> Image Resizer
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/tools/biodata-maker">
                                        <FileText size={18} /> Biodata Maker
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/tools/image-to-pdf">
                                        <FileArchive size={18} /> Image To PDF
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/tools/typing-test">
                                        <Keyboard size={18} /> Typing Test
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/tools/image-signature-joiner">
                                        <Signature size={18} /> Image Signature Joiner
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/tools/name-date-on-image">
                                        <Camera size={18} /> Name & Date on Image
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/tools/pdf-to-image">
                                        <FileImage size={18} /> PDF to Image
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar quck-lnk mt-3 jbq">
                            <h6> Job by Qulifications</h6>
                            <ul>
                                {
                                    byqualification.map((item, i) => (
                                        <li key={i}><Link href={item.path}><GraduationCap size={18} /> {item.name + " Pass (" + item.count + ")"}</Link></li>
                                    ))
                                }

                            </ul>
                        </div>

                        <div className="sidebar quck-lnk pru mt-3">
                            <h6>Popular Recruitment Updates</h6>
                            <ul>
                                {
                                    byrecruitment.map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.path}>
                                                <Landmark size={18} /> <span>{item.name + " (" + item.count + ")"}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                    </div>

                    <div className='col-md-12 mt-3 impt-txt'>



                        <h2>Jobs Live Now - Latest Government Jobs, Results, Admit Cards & Admissions</h2>

                        <p>
                            Jobs Live Now is a trusted educational portal that provides the latest
                            government jobs, admit cards, results, answer keys, admission forms,
                            scholarships and exam updates across India.
                        </p>


                        <h2>Latest Government Job Notifications</h2>

                        <p>
                            Jobs Live Now provides the latest government job notifications from various recruitment boards and public sector organizations across India. Candidates can find updates related to SSC, UPSC, Railway, Banking, Defence, Police, Teaching, State Government and Central Government vacancies. We regularly publish official recruitment announcements along with important dates, eligibility criteria, application process, vacancy details and official notification links. Our goal is to help job seekers stay informed about the latest career opportunities in the government sector through accurate and timely updates.
                        </p>

                        <h2>About Jobs Live Now</h2>

                        <p>
                            Our platform helps job seekers and students access important recruitment
                            information from SSC, UPSC, Railway, Banking, Defence, Police,
                            State Government and Central Government departments.
                        </p>

                        <p>
                            We regularly monitor official websites and notifications to provide
                            accurate and updated information in a simple format.
                        </p>

                        <h2>Why Trust Jobs Live Now?</h2>

                        <ul>
                            <li>Official notification verification</li>
                            <li>Regular content updates</li>
                            <li>Fact checked recruitment information</li>
                            <li>Direct official website references</li>
                        </ul>

                        <h2>What We Provide</h2>

                        <ul>
                            <li>Latest Government Jobs</li>
                            <li>Admit Cards</li>
                            <li>Results</li>
                            <li>Answer Keys</li>
                            <li>Admission Forms</li>
                            <li>Scholarships</li>
                            <li>Syllabus</li>
                            <li>University Notifications</li>
                        </ul>

                        <h2>Government Jobs in India</h2>

                        <p>
                            Government jobs remain one of the most preferred career options
                            in India because of job security, attractive salary,
                            retirement benefits and career growth opportunities.
                            Every year millions of candidates apply for SSC, Railway,
                            Banking, Defence, Police and State Government vacancies.
                        </p>

                        <h2>Government Exam Admit Cards</h2>

                        <p>
                            Candidates appearing for competitive examinations can access the latest admit card updates through Jobs Live Now. We provide information regarding exam city slips, hall tickets, call letters and admit card release dates for SSC, Railway, Banking, Defence, Police and various state-level examinations. Users can easily find direct links and step-by-step instructions to download their admit cards from official websites. Our platform ensures that candidates do not miss any important exam-related announcements.
                        </p>

                        <h2>Latest Admit Card Updates</h2>

                        <p>
                            Candidates can download admit cards for various competitive
                            examinations directly from official websites. Jobs Live Now
                            provides timely updates whenever new admit cards are released.
                        </p>

                        <h2>Latest Results & Scorecards</h2>

                        <p>
                            Jobs Live Now publishes the latest examination results, scorecards, merit lists and cut-off marks for government recruitment exams and university entrance tests. Candidates can stay updated with result announcements from SSC, UPSC, Railway, Banking, State PSCs, universities and other recruiting authorities. We provide result checking instructions and official result links to make the process simple and convenient for users.
                        </p>

                        <h2>Latest Result Updates</h2>

                        <p>
                            We regularly publish examination results, score cards,
                            merit lists and cut-off information from various government
                            recruitment agencies and universities.
                        </p>

                        <h2>Answer Keys & Objections</h2>

                        <p>
                            We also provide updates regarding provisional answer keys, final answer keys and objection submission processes for various competitive examinations. Candidates can review answer keys to estimate their scores before the declaration of results. Whenever an objection window is available, we share complete details regarding objection fees, deadlines and official procedures so that candidates can submit their challenges correctly.
                        </p>

                        <h2>Scholarships & Admissions</h2>

                        <p>
                            Apart from recruitment updates, Jobs Live Now covers scholarship schemes, admission notifications and entrance examination updates from universities and educational institutions across India. Students can find information regarding eligibility criteria, application procedures, important dates, required documents and official application links. This helps students stay informed about educational opportunities and financial assistance programs.
                        </p>

                        <h2>Why Choose Jobs Live Now?</h2>

                        <ul>
                            <li>Daily updated government job notifications</li>
                            <li>Official source based information</li>
                            <li>Fast and user-friendly website experience</li>
                            <li>Direct links to official notifications</li>
                            <li>Latest admit cards, results and answer keys</li>
                            <li>Mobile-friendly design</li>
                            <li>Free access for all users</li>
                            <li>Regular updates across multiple categories</li>
                        </ul>

                        <h2>Editorial Team</h2>

                        <p>
                            Content reviewed and published by Jobs Live Now Editorial Team.
                            We verify recruitment information from official notifications,
                            government portals and examination authorities before publication.
                        </p>

                        <h2>Editorial Policy</h2>

                        <p>
                            Jobs Live Now is an independent informational website.
                            We do not conduct examinations, provide jobs or accept applications.
                            Users should always verify information from official websites before applying.
                        </p>

                        <h2>Our Mission</h2>

                        <p>
                            Our mission is to provide accurate, reliable and timely government job
                            information for students and aspirants across India.
                        </p>

                    </div>

                    <div className="explore-category-box col-md-12 my-4">

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

                    <div className="related-categories">
                        <h2>Top Related Recruitments</h2>

                        <div className="category-links">

                            <Link href="/qualification/10th-pass-jobs">
                                <GraduationCap size={18} />
                                <span>10th Pass Jobs</span>
                            </Link>

                            <Link href="/qualification/12th-pass-jobs">
                                <GraduationCap size={18} />
                                <span>12th Pass Jobs</span>
                            </Link>

                            <Link href="/qualification/Graduation">
                                <GraduationCap size={18} />
                                <span>Graduation Pass Jobs</span>
                            </Link>

                            <Link href="/qualification/Post-Graduation">
                                <GraduationCap size={18} />
                                <span>Post Graduation Pass Jobs</span>
                            </Link>

                            <Link href="/category/railway-jobs">
                                <TrainFront size={18} />
                                <span>Railway Jobs</span>
                            </Link>

                            <Link href="/category/bank-jobs">
                                <Landmark size={18} />
                                <span>Bank Jobs</span>
                            </Link>

                            <Link href="/category/ssc-jobs">
                                <FileText size={18} />
                                <span>SSC Jobs</span>
                            </Link>

                            <Link href="/category/defence-jobs">
                                <Shield size={18} />
                                <span>Defence Jobs</span>
                            </Link>

                        </div>
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

            </div>
        </>
    )
}
