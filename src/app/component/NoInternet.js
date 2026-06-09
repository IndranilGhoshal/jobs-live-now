"use client";

import { useEffect, useState } from "react";

export default function NoInternet({ children }) {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        setIsOnline(navigator.onLine);

        const online = () => setIsOnline(true);
        const offline = () => setIsOnline(false);

        window.addEventListener("online", online);
        window.addEventListener("offline", offline);

        return () => {
            window.removeEventListener("online", online);
            window.removeEventListener("offline", offline);
        };
    }, []);

    if (!isOnline) {
        return (
            <div className="internet-container">
                <div className="wifi-icon">📡</div>

                <h1>No Internet Connection</h1>

                <p>
                    Please check your internet connection.
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="retry-btn"
                >
                    Retry
                </button>
            </div>
        );
    }

    return children;
}