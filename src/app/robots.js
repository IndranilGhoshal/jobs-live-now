import { sitemapurl } from "./utils/common-text";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: sitemapurl,
    };
}