import React from 'react'

export default function JobSchema({ job }) {

    const schema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",

        title: job.title,

        description: job.metaDescription,

        datePosted: job.datePosted,

        validThrough: job.lastDate,

        employmentType: "FULL_TIME",

        hiringOrganization: {
            "@type": "Organization",
            name: job.organization,
            sameAs: job.organizationWebsite
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
                value: job.salary || "As Per Rules"
            }
        },

        url: `https://www.jobslivenow.in/${job.slug}`
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