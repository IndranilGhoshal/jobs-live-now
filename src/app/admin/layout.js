'use client'

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import '../../../public/css/style.css'
import Image from "next/image";
import avatar from "../../../public/images/profile_avatar.png";
import { Toaster } from "react-hot-toast";
import logo from "../../../public/images/logo.png";
import { getLocalStorageData } from "../utils/common";

export default function AdminLayout({ children }) {

    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const profileRef = useRef(null);

    // ✅ Logout
    const logout = () => {
        localStorage.removeItem("token")
        goto("/login");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            goto("/login");
        }
    }, []);

    // ✅ Outside click close (PROFILE MENU)
    useEffect(() => {
        function handleClick(e) {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setProfileOpen(false);
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const goto = (path) => {
        router.push(path);
    }

    return (
        <>
            <div className="dashboard">

                {/* SIDEBAR */}
                <div className={`sidebar ${menuOpen ? "active" : ""}`}>
                    <div className="sidebar-header">
                        <Image
                            className="logo-img"
                            src={logo}
                            alt="logo"
                            width={120}
                            height={40}
                            loading="eager"
                        />
                        <span className="close-btn" onClick={() => setMenuOpen(false)}>✖</span>
                    </div>

                    <a onClick={() => { goto('/admin/dashboard') }}>🏠 Dashboard</a>
                    <a onClick={() => { goto('/admin/marquee') }}>📄 Highlight Marquee</a>
                    <a onClick={() => { goto('/admin/job') }}>📄 Job</a>
                    <a onClick={() => { goto('/admin/categories') }}>📄 Categories</a>
                </div>

                {/* OVERLAY */}
                <div
                    className={`overlay ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                ></div>

                {/* CONTENT */}
                <div className="content">

                    <div className="topbar">

                        {/* MENU BUTTON */}
                        <div className="menu-toggle" onClick={() => setMenuOpen(true)}>☰</div>

                        <h2>Welcome 👋</h2>

                        {/* PROFILE MENU */}
                        <div className="profile-menu" ref={profileRef}>

                            <div
                                className="profile-trigger"
                                onClick={() => setProfileOpen(!profileOpen)}
                            >
                                <Image
                                    src={avatar}
                                    alt="avatar"
                                    width={35}
                                    height={35}
                                />

                                <span>{getLocalStorageData('admin')?.name ? getLocalStorageData('admin')?.name : "Admin"}</span>
                            </div>

                            <div className={`profile-dropdown ${profileOpen ? "active" : ""}`}>

                                <a href="#">👤 My Profile</a>

                                <a href="#">⚙️ Settings</a>

                                <a onClick={logout}>🚪 Logout</a>

                            </div>

                        </div>

                    </div>

                    {children}

                </div>

            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    )
}