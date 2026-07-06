import { slugify, slugToTitle } from "@/app/utils/common";

export default function BreadcrumbSchema({ title, slug, category }) {

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
                item:`https://www.jobslivenow.in/${slugify(category)}`
            },
            {
                "@type":"ListItem",
                position:3,
                name:title,
                item:`https://www.jobslivenow.in/${slug}`
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