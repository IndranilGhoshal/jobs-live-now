import { slugToTitle } from '@/app/utils/common';
import React from 'react'

export default function CategoryBreadcrumbSchema({ category }) {

    const schema = {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            itemListElement:[
                {
                    "@type":"ListItem",
                    position:1,
                    name:"Home",
                    item:"https://www.jobslivenow.in"
                },
                {
                    "@type":"ListItem",
                    position:2,
                    name:slugToTitle(category),
                    item:`https://www.jobslivenow.in/category/${category}`
                }
            ]
        };
    
        return (
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html:JSON.stringify(schema)
                }}
            />
        );
}