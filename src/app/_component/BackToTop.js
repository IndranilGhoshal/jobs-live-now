"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setProgress(percent);
            setShow(scrollTop > 400);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <div
                className="progress-bar-scroll"
                style={{ width: `${progress}%` }}
            />

            {/* Back To Top Button */}
            <button
                className={`back-top ${show ? "show" : ""}`}
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }
                aria-label="Back to Top"
            >
                <ArrowUp size={22} />
            </button>
        </>
    );
}