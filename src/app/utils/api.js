import { useLoader } from "../_context/LoaderContext";
export const useApi = () => {
    const { showLoader, hideLoader } = useLoader();

    const getData = async (url) => {
        try {
            showLoader();

            const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+url,
                {
                    cache: "no-store",
                });
            const data = await res.json();

            return data;
        } catch (err) {
            console.error(err);
        } finally {
            hideLoader();
        }
    };

    const postData = async (url, body = {}) => {
        try {
            showLoader();

            const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
                next: {
                    revalidate: 300,
                },
                },
                {
                    cache: "no-store",
                });

            const data = await res.json();

            return data;
        } catch (error) {
            console.error("POST API Error:", error);
            throw error;
        } finally {
            hideLoader();
        }
    };

    return { getData, postData };
};