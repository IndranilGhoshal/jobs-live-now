"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const percent =
                docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setProgress(percent);
        };

        window.addEventListener("scroll", updateProgress);
        updateProgress();

        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    }, []);

    return (
        <div className="reading-progress">
            <div
                className="reading-progress-bar"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}