export const slugify = (text) => {
    try {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    } catch (e) {
        return null
    }
};

export const setLocalStorageData = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        return null
    }
}

export const getLocalStorageData = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        return null
    }
}

export const setSessionStorageData = (key, data) => {
    try {
        sessionStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        return null
    }
}

export const getSessionStorageData = (key) => {
    try {
        return JSON.parse(sessionStorage.getItem(key))
    } catch (e) {
        return null
    }
}

export const slugToTitle = (slug) => {
    try {
        return slug
            ?.replace(/-/g, " ")
            ?.replace(/\b\w/g, (char) =>
                char.toUpperCase()
            );
    } catch (e) {
        return null
    }
};

export function countWords(text) {
    if (!text) return 0;

    return text
        .replace(/[^\w\s]/g, "") // punctuation remove
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .length;
}


export const formatNumber = (num) => {
    return String(num).padStart(2, "0");
};

export const getCategoryTitle = (slug) => {

    return slug
        ?.replace(/-/g, " ")
        ?.replace(/\b\w/g, (c) => c.toUpperCase());

};

// ================= CATEGORY TITLE =================
export const getQualificationTitle = (slug) => {

    return slug
        ?.replace(/-/g, " ")
        ?.replace(/\b\w/g, (c) => c.toUpperCase());

};

export function htmlToText(htmlString) {
  if (!htmlString) return '';
  // Removes HTML tags and replaces common entities
  return htmlString
    .replace(/<[^>]*>/g, '') 
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}