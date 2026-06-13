import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { title } from "@/app/utils/common-text";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "About Us",
    description:
        "Jobs Live Now is a trusted Indian job portal providing latest government jobs, admit cards, results, answer keys, admissions, and career updates with fast and accurate information.",
    keywords:
        "About Jobs Live Now, Govt Jobs, Sarkari Result, Admit Card, Results, Government Job Portal, Latest Job Updates India"
};

export default function Page() {

    return (
        <div className="container txt-cont py-5">

            <div className="row">

                <div className="col-md-12">
                    <SocialJoinLink />
                </div>

                <div className="col-md-12">

                    <div className="card shadow-sm border-0">

                        <div className="card-body p-4">

                            <h1 className="mb-4">About Us</h1>

                            <p>
                                Welcome to <strong>{title}</strong> — one of India’s
                                growing platforms dedicated to delivering the latest
                                and most reliable updates on government jobs,
                                recruitment notifications, admit cards, results,
                                answer keys, and career opportunities.
                            </p>

                            <p>
                                Our goal is to simplify job searching for millions
                                of aspirants by providing fast, accurate, and easy-to-understand
                                updates from trusted government sources. We ensure that
                                every important notification reaches you on time so you
                                never miss an opportunity.
                            </p>

                            <h2 className="mt-4">What We Cover</h2>

                            <ul>
                                <li>Latest Government Job Notifications (Central & State)</li>
                                <li>Admit Cards & Exam Hall Tickets</li>
                                <li>Exam Results & Merit Lists</li>
                                <li>Answer Keys & Cut-off Updates</li>
                                <li>Online Application Forms</li>
                                <li>Syllabus & Exam Patterns</li>
                                <li>Important Dates & Official Notices</li>
                                <li>Career Guidance & Updates</li>
                            </ul>

                            <h2 className="mt-4">Our Mission</h2>

                            <p>
                                Our mission is to bridge the gap between job seekers
                                and official recruitment updates by delivering timely
                                and verified information in a simple format that is
                                accessible to everyone across India.
                            </p>

                            <h2 className="mt-4">Our Vision</h2>

                            <p>
                                We aim to become one of India’s most trusted job portals,
                                empowering students and professionals by providing
                                transparent, fast, and reliable government job updates.
                            </p>

                            <h2 className="mt-4">Why Choose {title}?</h2>

                            <ul>
                                <li>✔ Fast & Real-Time Job Updates</li>
                                <li>✔ Simple & Mobile-Friendly Design</li>
                                <li>✔ Verified Information from Official Sources</li>
                                <li>✔ Free Access for Everyone</li>
                                <li>✔ Regular Daily Updates</li>
                                <li>✔ Easy Navigation for All Users</li>
                            </ul>

                            <h2 className="mt-4">Disclaimer</h2>

                            <p>
                                We are not a government website or affiliated with any
                                government organization. All information provided here
                                is collected from official notifications and trusted sources.
                                Users are advised to always verify details from official websites
                                before applying.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-12">
                    <SocialLinks />
                </div>

            </div>

        </div>
    );
}