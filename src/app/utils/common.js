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