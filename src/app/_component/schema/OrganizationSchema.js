export default function OrganizationSchema() {

    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",

        name: "Jobs Live Now",

        url: "https://www.jobslivenow.in",

        logo: "https://www.jobslivenow.in/logo.png",

        description:
            "Jobs Live Now provides the latest Government Jobs, PSU Recruitment, Results, Admit Cards, Syllabus, and Answer Keys in India.",

        email: "support@jobslivenow.in",

        sameAs: [
            "https://www.facebook.com/jobslivenow",
            "https://www.instagram.com/jobslivenow",
            "https://www.youtube.com/@jobslivenow",
            "https://x.com/jobslivenow"
        ],

        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            email: "support@jobslivenow.in",
            availableLanguage: [
                "English",
                "Hindi"
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema)
            }}
        />
    );
}