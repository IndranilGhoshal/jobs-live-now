import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { title } from "@/app/utils/common-text";

export const metadata = {
    title: "About Us | Jobs Live Now",
    description:
        "Learn more about Jobs Live Now - your trusted source for latest government jobs, admit cards, results, answer keys, admissions, and exam updates across India.",
    keywords:
        "About Jobs Live Now, Govt Jobs, Sarkari Result, Admit Card, Results, Government Job Portal"
};

export default function Page() {

    return (
        <div className="container py-5">

            <div className="row">
                <div className="col-md-12">
                    <SocialJoinLink />
                </div>
                <div className="col-md-12">
                    <div className="card shadow-sm border-0">

                        <div className="card-body p-4">

                            <h1 className="mb-4">
                                About {title}
                            </h1>

                            <p>
                                Welcome to <strong>{title}</strong>,
                                your trusted destination for the latest
                                government job notifications, admit cards,
                                results, answer keys, admissions, and exam updates
                                across India.
                            </p>

                            <p>
                                Our mission is to provide accurate, fast,
                                and reliable information related to government
                                recruitment examinations so that candidates
                                never miss important opportunities.
                            </p>

                            <h2 className="mt-4">
                                What We Provide
                            </h2>

                            <ul>
                                <li>Latest Government Job Notifications</li>
                                <li>Admit Card Updates</li>
                                <li>Exam Results</li>
                                <li>Answer Keys</li>
                                <li>Syllabus Information</li>
                                <li>Admission Forms</li>
                                <li>Online Application Links</li>
                                <li>Exam Dates & Important Notices</li>
                            </ul>

                            <h2 className="mt-4">
                                Our Vision
                            </h2>

                            <p>
                                We aim to become one of India's most trusted
                                educational and government job information
                                platforms by delivering timely and authentic
                                updates to students and job seekers.
                            </p>

                            <h2 className="mt-4">
                                Why Choose {title}?
                            </h2>

                            <ul>
                                <li>Fast Updates</li>
                                <li>User-Friendly Interface</li>
                                <li>Mobile Responsive Platform</li>
                                <li>Accurate Information</li>
                                <li>Regularly Updated Content</li>
                                <li>Free Access for Everyone</li>
                            </ul>

                            <h2 className="mt-4">
                                Disclaimer
                            </h2>

                            <p>
                                {title} is an independent informational
                                website and is not affiliated with any government
                                organization. Candidates are advised to verify
                                information from the official recruitment websites
                                before applying.
                            </p>

                            <h2 className="mt-4">
                                Contact Us
                            </h2>

                            <p>
                                If you have any questions, suggestions, or
                                feedback regarding our website, feel free to
                                contact us through our Contact Us page.
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