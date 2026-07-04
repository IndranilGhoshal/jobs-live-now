export default function WebsiteSchema() {

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",

        name: "Jobs Live Now",

        url: "https://www.jobslivenow.in",

        description:
            "Latest Government Jobs, Results, Admit Cards, Syllabus and Answer Keys.",

        potentialAction: {

            "@type": "SearchAction",

            target: {
                "@type": "EntryPoint",
                urlTemplate:
                    "https://www.jobslivenow.in/search?q={search_term_string}"
            },

            "query-input":
                "required name=search_term_string"
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