"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from '../component/header';
import Footer from '../component/Footer';
import "../../../public/css/style.css";

export default function page() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            router.push("/admin/dashboard");
        }
    }, []);

    // 🔐 LOGIN FUNCTION
    async function login() {

        if (!email || !password) {
            setErrorMsg("Please fill all fields!");
            return;
        }

        setErrorMsg("");
        setLoading(true);

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error);
                setLoading(false);
                return;
            }

            // ✅ Save token
            localStorage.setItem("token", data.token);

            // Redirect
            router.push("/admin/dashboard");

        } catch (err) {
            setErrorMsg("Something went wrong!");
        }

        setLoading(false);
    }
    return (
        <>
            <Header />

            <div className="main">
                <div className="login-dv">

                    <div className="login-card-box">
                        <div className="login-card-box-header">Admin Login</div>

                        {/* EMAIL */}
                        <div className="input-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label>Email Address</label>
                            <span className="input-icon">📧</span>
                        </div>

                        {/* PASSWORD */}
                        <div className="input-group mt-3">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label>Password</label>
                            <span className="input-icon">🔒</span>
                        </div>

                        {/* ERROR */}
                        {errorMsg && <div className="errorMsg">{errorMsg}</div>}

                        {/* BUTTON */}
                        <button
                            className={`login-btn ${loading ? "loading" : ""}`}
                            onClick={login}
                        >
                            {loading ? "Logging in..." : "🔐 Login"}
                        </button>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}
