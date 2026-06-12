"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../_component/header";
import Footer from "../_component/Footer";
import "../../../public/css/style.css";
import toast, { Toaster } from "react-hot-toast";
import { adminpath } from "../utils/common-text";

export default function LoginPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // Check login status
    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await fetch("/api/admin/me", {
                    credentials: "include",
                    cache: "no-store",
                });
                const data = await res.json();
                if (data?.success && data?.status == "302") {
                    router.replace(adminpath+"/dashboard");
                }
            } catch (error) {
                console.error(error);
            }
        }

        checkAuth();
    }, [router]);


    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        setErrorMsg("");
    };

    async function login() {
        setErrorMsg("");
        if (!form.email.trim() || !form.password) {
            setErrorMsg("Please fill all fields.");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("/api/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email.trim().toLowerCase(),
                    password: form.password,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(
                    data.error || "Login failed."
                );
                return;
            }
            router.replace(adminpath+"/dashboard");
            router.refresh();

        } catch (error) {
            console.error(error);
            toast.error(
                "Server error. Please try again."
            );
        } finally {
            setLoading(false);
        }
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            login();
        }
    }

    return (
        <>
            <Header />

            <div className="main">
                <div className="login-dv">
                    <div className="login-card-box">

                        <div className="login-card-box-header">
                            Admin Login
                        </div>

                        {/* Email */}
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                value={form.email}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                required
                            />
                            <label>Email Address</label>
                            <span className="input-icon">
                                📧
                            </span>
                        </div>

                        {/* Password */}
                        <div className="input-group mt-3">
                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                value={form.password}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                required
                            />
                            <label>Password</label>
                            <span className="input-icon">
                                🔒
                            </span>
                        </div>

                        {/* Error Message */}
                        {errorMsg && (
                            <div className="errorMsg text-center">
                                {errorMsg}
                            </div>
                        )}

                        {/* Button */}
                        <button
                            type="button"
                            disabled={loading}
                            onClick={login}
                            className={`login-btn ${loading ? "loading" : ""
                                }`}
                        >
                            {loading
                                ? "Logging in..."
                                : "🔐 Login"}
                        </button>

                    </div>
                </div>
            </div>

            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}