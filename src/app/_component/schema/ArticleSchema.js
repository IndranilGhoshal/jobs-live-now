import React from 'react'

export default function ArticleSchema({ job }) {

    const schema = {

        "@context": "https://schema.org",

        "@type": "Article",

        headline: job.title,

        datePublished: job.datePosted,

        dateModified: job.updatedAt,

        author: {
            "@type": "Organization",
            name: "Jobs Live Now"
        },

        publisher: {

            "@type": "Organization",

            name: "Jobs Live Now",

            logo: {

                "@type": "ImageObject",

                url: "https://www.jobslivenow.in/logo.png"

            }

        },

        mainEntityOfPage: `https://www.jobslivenow.in/${job.slug}`

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
