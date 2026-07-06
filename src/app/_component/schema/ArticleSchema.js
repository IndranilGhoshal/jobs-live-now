import React from 'react'

export default function ArticleSchema({ title, postdate, updatedat, slug }) {

    const schema = {

        "@context": "https://schema.org",

        "@type": "Article",

        headline: title,

        datePublished: postdate,

        dateModified: updatedat,

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

        mainEntityOfPage: `https://www.jobslivenow.in/${slug}`

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
