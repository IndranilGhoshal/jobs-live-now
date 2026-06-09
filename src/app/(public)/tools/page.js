import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import Link from "next/link";

export const metadata = {

    title:
        "Free Online Tools 2026 | Image Resizer, Age Calculator, Resume Maker | Job Live Now",

    description:
        "Free online tools for Government Job aspirants. Use Image Resizer, Age Calculator, Resume Maker, JPG to PDF, Typing Test, Photo Signature Joiner and more.",

    alternates: {

        canonical:
            "https://www.joblivenow.in/tools",

    },

};

const tools = [

    {
        name: "Age Calculator",
        icon: "🎂",
        url: "/tools/age-calculator",
    },

    {
        name: "Image Resizer",
        icon: "🖼️",
        url: "/tools/image-resizer",
    },

    {
        name: "Biodata Maker",
        icon: "📄",
        url: "/tools/biodata-maker",
    },

    {
        name: "Image To PDF",
        icon: "📕",
        url: "/tools/image-to-pdf",
    },

    {
        name: "Typing Test",
        icon: "⌨️",
        url: "/tools/typing-test",
    },

    {
        name: "Image Signature Joiner",
        icon: "✍️",
        url: "/tools/image-signature-joiner",
    },

    {
        name: "Name & Date On Image",
        icon: "📸",
        url: "/tools/name-date-on-image",
    },

    {
        name: "PDF To Image",
        icon: "🖼️",
        url: "/tools/pdf-to-image",
    },

];

export default function Page() {

    return (

        <div className="container tools main">

            <div className="tools-page">

                <div className="row my-3">
                    <div className="col-sm-12">
                        <SocialJoinLink />
                    </div>
                </div>

                <h1>
                    Free Online Tools
                </h1>

                <p className="tools-desc">

                    Useful tools for Government
                    Job Aspirants, Students,
                    SSC, Railway, UPSC,
                    Banking and Competitive
                    Exam Preparation.

                </p>

                

                <div className="tools-grid mt-4">

                    {
                        tools.map(
                            (tool, index) => (

                                <Link
                                    key={index}
                                    href={tool.url}
                                    className="tool-card"
                                >

                                    <div className="tool-icon">
                                        {tool.icon}
                                    </div>

                                    <h2>
                                        {tool.name}
                                    </h2>

                                </Link>

                            )
                        )
                    }

                </div>

                <div className="seo-content">
                    <h2>Free Online Tools for Everyday Tasks</h2>

                    <p>
                        Welcome to our collection of Free Online Tools designed to help students,
                        job seekers, professionals, business owners, and everyday users complete
                        various tasks quickly and efficiently. Our tools are easy to use, work
                        directly in your browser, and require no software installation. Whether you
                        need PDF utilities, image editing tools, calculators, typing tests, or
                        document converters, you can access them anytime for free.
                    </p>

                    <h2>What Are Online Tools?</h2>

                    <p>
                        Online tools are web-based applications that perform specific tasks without
                        requiring users to download or install software. They help save time,
                        improve productivity, and simplify complex operations such as file
                        conversion, image editing, calculations, document creation, and data
                        processing.
                    </p>

                    <h2>Popular Categories of Online Tools</h2>

                    <ul>
                        <li>PDF Tools and Document Converters.</li>
                        <li>Image Editing and Image Conversion Tools.</li>
                        <li>Typing Speed Tests and Practice Tools.</li>
                        <li>Age, Percentage, and Educational Calculators.</li>
                        <li>Resume, Biodata, and Document Generators.</li>
                        <li>Signature and Photo Utilities.</li>
                        <li>Text and Productivity Tools.</li>
                    </ul>

                    <h2>Why Use Our Free Online Tools?</h2>

                    <ul>
                        <li>100% Free to Use.</li>
                        <li>No Registration Required.</li>
                        <li>Fast and User-Friendly Interface.</li>
                        <li>Works on Mobile, Tablet, and Desktop Devices.</li>
                        <li>Secure and Browser-Based Processing.</li>
                        <li>Instant Results and Downloads.</li>
                        <li>Regularly Updated with New Features.</li>
                    </ul>

                    <h2>Benefits of Using Online Tools</h2>

                    <ul>
                        <li>Save Time and Improve Productivity.</li>
                        <li>Complete Tasks Without Installing Software.</li>
                        <li>Access Tools Anywhere with an Internet Connection.</li>
                        <li>Perform Quick Calculations and Conversions.</li>
                        <li>Edit Documents and Images Efficiently.</li>
                        <li>Suitable for Personal, Educational, and Professional Use.</li>
                    </ul>

                    <h2>Who Can Use These Tools?</h2>

                    <p>
                        Our free online tools are suitable for students preparing for exams, job
                        seekers completing applications, professionals managing documents,
                        teachers, business owners, freelancers, content creators, and anyone
                        looking for simple and effective online solutions.
                    </p>

                    <h2>Our Mission</h2>

                    <p>
                        We aim to provide reliable, fast, and easy-to-use online tools that help
                        users accomplish everyday tasks without technical knowledge. By offering a
                        growing collection of useful web tools, we strive to make productivity,
                        document management, image editing, and calculations accessible to everyone.
                    </p>

                    <h2>Start Using Our Free Online Tools Today</h2>

                    <p>
                        Explore our collection of free tools and simplify your daily work. From PDF
                        converters and image editors to calculators and typing tests, our platform
                        offers practical solutions for a wide range of personal, educational, and
                        professional needs.
                    </p>
                </div>

            </div>

            <SocialLinks />

        </div>

    );

}