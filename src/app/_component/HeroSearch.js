"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function HeroSearch({exactcategory}) {

    const router = useRouter();

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState("");

    const wrapperRef = useRef(null);

    const fetchJobs = async (keyword = "") => {

        try {

            const url = keyword.trim()
                ? `/api/search?q=${encodeURIComponent(keyword)}&exact=${exactcategory}`
                : `/api/search?exact=${exactcategory}`;

            const response = await fetch(url);

            const data = await response.json();

            setResults(data);

            if (isFocused && !error) {

                setShowDropdown(true);

            }

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        if (!isFocused || error) return;

        const timer = setTimeout(() => {

            fetchJobs(search);

        }, 300);

        return () => clearTimeout(timer);

    }, [search, isFocused, error]);

    useEffect(() => {

        function handleClickOutside(event) {

            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {

                setShowDropdown(false);

                setIsFocused(false);

                // যদি কিছু select না করা থাকে
                // তাহলে input clear করে দাও

                if (!selectedJob) {

                    setSearch("");

                }

            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, [selectedJob]);

    // ==========================
    // Search Button
    // ==========================

    const handleSearch = async () => {

        const keyword = search.trim();

        // Blank input check
        if (!keyword) {

            setShowDropdown(false);
            setError("Please enter a keyword.");
            return;

        }

        setError("");

        // Autocomplete থেকে select করা থাকলে
        if (selectedJob) {

            router.push(`/${selectedJob.slug}`);
            return;

        }

        try {

            // Exact match check
            const response = await fetch(
                `/api/search?q=${encodeURIComponent(keyword)}&exact=${exactcategory}`
            );

            const data = await response.json();

            if (!response.ok) {

                setShowDropdown(false);
                setResults([]);
                setError("Something went wrong.");
                return;

            }

            if (data.length === 0) {

                setShowDropdown(false);
                setResults([]);
                setError("No matching job found.");
                return;

            }

            setResults(data);

            if (isFocused && !error) {

                setShowDropdown(true);

            }


        } catch (error) {

            console.error(error);

            setShowDropdown(false);
            setResults([]);
            setError("Something went wrong.");

        }

    };

    // ==========================
    // Keyboard Navigation
    // ==========================

    const handleKeyDown = (e) => {

        if (!showDropdown) return;

        if (e.key === "ArrowDown") {

            e.preventDefault();

            setSelectedIndex((prev) =>
                prev < results.length - 1 ? prev + 1 : prev
            );

        }

        else if (e.key === "ArrowUp") {

            e.preventDefault();

            setSelectedIndex((prev) =>
                prev > 0 ? prev - 1 : 0
            );

        }

        else if (e.key === "Enter") {

            e.preventDefault();

            if (selectedIndex >= 0 && results[selectedIndex]) {

                setSelectedJob(results[selectedIndex]);

                setSearch(results[selectedIndex].name);

                setShowDropdown(false);

            } else {

                handleSearch();

            }

        }

    };

    const shouldShowDropdown =
        isFocused &&
        !error &&
        !selectedJob &&
        (loading || results.length > 0);

    return (

        <div
            className="hero-search"
            ref={wrapperRef}
        >

            <div className="search-box">

                <input
                    type="text"
                    placeholder={"Search "+exactcategory+"..."}
                    value={search}

                    onFocus={async () => {

                        if (error) return;

                        setIsFocused(true);

                        if (selectedJob && search === selectedJob.name) return;

                        setShowDropdown(true);

                        setLoading(true);

                        await fetchJobs(search);

                    }}

                    onChange={(e) => {

                        const value = e.target.value;

                        setSearch(value);

                        setSelectedJob(null);

                        setSelectedIndex(-1);

                        if (error) {

                            setError("");

                        }

                        if (value.trim()) {

                            setShowDropdown(true);

                        }

                    }}



                    onKeyDown={handleKeyDown}
                />

                <button disabled={!search.trim()} onClick={handleSearch}>

                    Search

                </button>

            </div>
            {
                error && (
                    <p className="search-error">
                        {error}
                    </p>
                )
            }

            {
                shouldShowDropdown && (

                    <div className="search-dropdown">

                        {
                            loading && (

                                <div className="search-loading">

                                    <div className="spinner"></div>

                                    <span>Loading jobs...</span>

                                </div>

                            )
                        }

                        {
                            !loading &&
                            results.length === 0 && (

                                <div className="search-empty">

                                    No jobs found.

                                </div>

                            )
                        }

                        {
                            !loading &&
                            results.map((item, index) => (

                                <div
                                    key={item.slug}
                                    className={
                                        selectedIndex === index
                                            ? "search-item active"
                                            : "search-item"
                                    }
                                    onMouseEnter={() => setSelectedIndex(index)}
                                    onClick={() => {

                                        setSelectedJob(item);

                                        setSearch(item.name);

                                        setShowDropdown(false);
                                        setResults([]);

                                    }}
                                >

                                    <div className="search-title">

                                        {item.name}

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                )
            }

        </div>

    );

}