"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle({ mobile = false }) {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <button
            className={`theme-toggle ${mobile ? "mobile" : ""}`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle Theme"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}

            {mobile && (
                <span>
                    {isDark ? "Light Mode" : "Dark Mode"}
                </span>
            )}
        </button>
    );
}