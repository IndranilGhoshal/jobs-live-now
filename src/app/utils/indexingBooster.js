export async function notifySearchEngines(url) {
    try {
        // Google ping (basic indexing hint)
        await fetch(
            `https://www.google.com/ping?sitemap=${encodeURIComponent(
                url
            )}`
        );

        // Bing ping
        await fetch(
            `https://www.bing.com/ping?sitemap=${encodeURIComponent(url)}`
        );

        console.log("Indexing requested:", url);
    } catch (err) {
        console.error("Indexing error:", err);
    }
}