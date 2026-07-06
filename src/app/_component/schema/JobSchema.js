import React from 'react'

export default function JobSchema({ title, postdate, lastdate, organisation, officialWebsite, slug, salary }) {

    const schema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",

        title: title,

        description: `${title} - Apply online for latest recruitment notification. Check eligibility, vacancy details, important dates and application process.`,

        datePosted: postdate,

        validThrough: lastdate,

        employmentType: "FULL_TIME",

        hiringOrganization: {
            "@type": "Organization",
            name: organisation,
            sameAs: officialWebsite
        },

        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressCountry: "IN"
            }
        },

        baseSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
                "@type": "QuantitativeValue",
                value: salary || "As Per Rules"
            }
        },

        url: `https://www.jobslivenow.in/${slug}`
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