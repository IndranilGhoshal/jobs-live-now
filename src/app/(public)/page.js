import Link from "next/link";
import SocialLinks from "../_component/SocialLinks";
import SocialJoinLink from "../_component/SocialJoinLink";
import { title, url, year } from "../utils/common-text";
import Script from "next/script";

export const dynamic = "force-dynamic";

// ================= SEO =================
export const metadata = {

    title:
        "Jobs Live Now - Government Results, Latest Govt Jobs, Admit Card",

    description:
        "Get latest government Results, Govt Jobs, Online Forms, Admit Cards, Answer Keys, Railway, SSC, Banking, UPSC and State Government job notifications.",

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
                })
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

    // console.log("response",byqualification);

    // ================= COMMON COMPONENT =================
    const RenderList = ({
        title,
        data,
        viewMore,
    }) => (
        <div className="col-md-4">

            <div className="card-box">

                <h5>
                    {
                        title == "Top Online Form" && "📝"
                    }

                    {
                        title == "Admit Card" && "🎫"
                    }

                    {
                        title == "Results" && "🏆"
                    }

                    {
                        title == "Syllabus" && "📚"
                    }

                    {
                        title == "Answer Key" && "🔑"
                    }

                    {
                        title == "Admission Form" && "🎓"
                    }

                    {" " + title}</h5>

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
                                >{`View More >>`}</Link>

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


    return (
        <>
            <div className="container idx-pg main">
                <div className="row">
                    <div className="col-md-12">
                        <SocialJoinLink />
                    </div>
                    {/* 🔥 Display ADS TOP */}
                    <div className="advt-bdr">
                        <div className="ad-title">Advertisement</div>
                        <ins
                            className="adsbygoogle"
                            style={{ display: "block" }}
                            data-ad-client="ca-pub-1574872040858425"
                            data-ad-slot="2998073706"
                            data-ad-format="auto"
                            data-full-width-responsive="true"
                        />
                        <Script
                            dangerouslySetInnerHTML={{
                                __html:
                                    "(adsbygoogle = window.adsbygoogle || []).push({});",
                            }}
                        />
                    </div>

                    {/* Job list Cards */}
                    <div className="col-md-9">
                        <div className="row">
                            {/* ================= TOP ONLINE FORM ================= */}
                            <RenderList
                                title="Top Online Form"
                                data={topOnlineForm}
                                viewMore="/top-online-form"
                            />

                            {/* ================= ADMIT CARD ================= */}
                            <RenderList
                                title="Admit Card"
                                data={admitCardData}
                                viewMore="/category/admit-card"
                            />

                            {/* ================= RESULT ================= */}
                            <RenderList
                                title="Results"
                                data={resultData}
                                viewMore="/category/results"
                            />

                            {/* ================= ANSWER KEY ================= */}
                            <RenderList
                                title="Answer Key"
                                data={answerKeyData}
                                viewMore="/category/answer-key"
                            />

                            {/* ================= SYLLABUS ================= */}
                            <RenderList
                                title="Syllabus"
                                data={syllabusData}
                                viewMore="/category/syllabus"
                            />

                            {/* ================= ADMISSION FORM ================= */}
                            <RenderList
                                title="Admission Form"
                                data={admissionFormData}
                                viewMore="/category/admission-form"
                            />

                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="sidebar quck-lnk">
                            <h6>Online Free Tools</h6>
                            <ul>

                                <li><Link href={`/tools/age-calculator`}>🎂 Age Calculator</Link></li>
                                <li><Link href={`/tools/image-resizer`}>🖼️ Image Resizer</Link></li>
                                <li><Link href={`/tools/biodata-maker`}>📄 Biodata Maker</Link></li>
                                <li><Link href={`/tools/image-to-pdf`}>📕 Image To PDF</Link></li>
                                <li><Link href={`/tools/typing-test`}>⌨️ Typing Test</Link></li>
                                <li><Link href={`/tools/image-signature-joiner`}>✍️ Image Signature Joiner</Link></li>
                                <li><Link href={`/tools/name-date-on-image`}>📸 Name & Date on Image</Link></li>
                                <li><Link href={`/tools/pdf-to-image`}>🖼️ PDF to Image</Link></li>
                            </ul>
                        </div>

                        <div className="sidebar quck-lnk mt-3">
                            <h6> Job by Qulifications</h6>
                            <ul>
                                {
                                    byqualification.map((item,i)=>(
                                        <li key={i}><Link href={item.path}>{item.name +" Pass ("+item.count+")"}</Link></li>
                                    ))
                                }
                                
                            </ul>
                        </div>
                    </div>

                    {/* 🔥 Multiplex ADS */}
                    <div className="advt-bdr">
                        <div className="ad-title">Advertisement</div>
                        <ins
                            className="adsbygoogle"
                            style={{ display: "block" }}
                            data-ad-format="autorelaxed"
                            data-ad-client="ca-pub-1574872040858425"
                            data-ad-slot="7471629622"
                            data-full-width-responsive="true"
                        />
                        <Script
                            dangerouslySetInnerHTML={{
                                __html:
                                    "(adsbygoogle = window.adsbygoogle || []).push({});",
                            }}
                        />
                    </div>
                    <div className='col-md-12 mt-3 impt-txt'>
                        <h1>{title}: {year}</h1>
                        <p><strong>{title}</strong> is a dedicated portal for official government job notifications, results, admit cards, answer keys, and exam updates. Here you can easily access all updates related to SSC, Banking, Railway, UPSC, Police, Defence and other government jobs.</p>

                        <h2>Latest Result Information</h2>
                        <p>Every government recruitment starts with an official notification. On {title}, you will get the fastest updates of recruitment notifications, admit cards, answer keys and results from central and state government departments.</p>

                        <h2>Why Choose {title}?</h2>
                        <ul>
                            <li>Fastest Goverment Result updates</li>
                            <li>All govt job notifications in one place</li>
                            <li>Easy-to-understand information</li>
                            <li>Direct online apply links</li>
                        </ul>

                        <h2>Instructions Before Applying</h2>
                        <ul>
                            <li>Check eligibility criteria (age, qualification)</li>
                            <li>Fill form carefully with correct details</li>
                            <li>Verify all information before submission</li>
                            <li>Upload correct photo & signature</li>
                            <li>Keep a copy of submitted form</li>
                        </ul>

                        {/* 🔥 In Article ADS 1 */}
                        <div className="advt-bdr">
                            <div className="ad-title">Advertisement</div>
                            <ins
                                className="adsbygoogle"
                                style={{ display: "block", textAlign:"center" }}
                                data-ad-layout="in-article"
                                data-ad-format="fluid"
                                data-ad-client="ca-pub-1574872040858425"
                                data-ad-slot="2543612285"
                                data-full-width-responsive="true"
                            />
                            <Script
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "(adsbygoogle = window.adsbygoogle || []).push({});",
                                }}
                            />
                        </div>

                        <h2>Major Jobs Categories</h2>

                        <h3>1. Civil Services (UPSC)</h3>
                        <p>UPSC conducts IAS, IPS, and IFS exams every year. These are among the most prestigious and competitive exams in India.</p>

                        <h3>2. Staff Selection Commission (SSC)</h3>
                        <p>SSC CGL, CHSL, MTS, GD Constable, JE (Junior Engineer), Stenographer (Grade C & D) and CPO (Central Police Organisation) offer respectfully jobs.</p>

                        <h3>3. Defence Jobs</h3>
                        <p>Indian Army, Navy, Air Force, BSF, CRPF, CISF and other defence services offer great career opportunities with respect and benefits.</p>

                        <h3>4. Bank Jobs</h3>
                        <p>Recruitments are conducted by IBPS, SBI, RBI, NABARD etc. for posts like Clerk, PO and SO.</p>

                        <h3>5. Railway Jobs</h3>
                        <p>Railway recruitment is open for 10th, 12th, diploma and graduate candidates including Group D and NTPC posts.</p>

                        <h3>6. Jobs for 12th Pass</h3>
                        <p>SSC CHSL, MTS, Police, Defence and Railway jobs are popular options for 12th pass candidates.</p>

                        <h3>7. Jobs for 10th Pass</h3>
                        <p>Government departments offer jobs like peon, constable, driver, helper, trackman etc.</p>

                        <h2>{title} Process</h2>
                        <ol>
                            <li>Notification Released</li>
                            <li>Online Application</li>
                            <li>Admit Card Issued</li>
                            <li>Exam Conducted</li>
                            <li>Answer Key Published</li>
                            <li>Final Result Declared</li>
                        </ol>

                        <h2>Latest Updates Available</h2>
                        <ul>
                            <li>Online Forms</li>
                            <li>Admit Cards</li>
                            <li>Answer Keys</li>
                            <li>Exam Results</li>
                            <li>Exam Syllabus</li>
                            <li>Admission Forms</li>
                        </ul>

                        {/* 🔥 In Article ADS 2 */}
                        <div className="advt-bdr">
                            <div className="ad-title">Advertisement</div>
                            <ins
                                className="adsbygoogle"
                                style={{ display: "block", textAlign:"center" }}
                                data-ad-layout="in-article"
                                data-ad-format="fluid"
                                data-ad-client="ca-pub-1574872040858425"
                                data-ad-slot="5747484419"
                                data-full-width-responsive="true"
                            />
                            <Script
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "(adsbygoogle = window.adsbygoogle || []).push({});",
                                }}
                            />
                        </div>

                        <h2>Important Advice</h2>
                        <p>Always read the official notification carefully before applying. Ensure all details match your certificates to avoid rejection.</p>

                        <h2>Our Mission</h2>
                        <p><strong>Your Success is Our Mission!</strong> {title} aims to provide accurate, fast and reliable information about all government jobs and exams.</p>

                    </div>

                    {/* 🔥 Display ADS BUTTOM */}
                    <div className="advt-bdr">
                        <div className="ad-title">Advertisement</div>
                        <ins
                            className="adsbygoogle"
                            style={{ display: "block" }}
                            data-ad-client="ca-pub-1574872040858425"
                            data-ad-slot="8665291797"
                            data-ad-format="auto"
                            data-full-width-responsive="true"
                        />
                        <Script
                            dangerouslySetInnerHTML={{
                                __html:
                                    "(adsbygoogle = window.adsbygoogle || []).push({});",
                            }}
                        />
                    </div>

                    <SocialLinks />

                </div>

            </div>
        </>
    )
}
