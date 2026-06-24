"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import "../../../public/css/style.css";
import { adminpath } from "../utils/common-text";
import { setSessionStorageData } from "../utils/common";
import avatar from "../../../public/images/profile_avatar.png";
import logo from "../../../public/images/logo.png";

export default function AdminLayoutClient({ children }) {
  const router = useRouter();

    const profileRef = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    const menus = [
        {
            name: "Dashboard",
            icon: "🏠",
            path: "/dashboard",
        },
        {
            name: "Highlight Marquee",
            icon: "📄",
            path: "/marquee",
        },
        {
            name: "Job",
            icon: "📄",
            path: "/job",
        },
        {
            name: "Categories",
            icon: "📄",
            path: "/categories",
        },
    ];


    useEffect(() => {
        verifyAdmin();
    }, []);

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

    const verifyAdmin = async () => {
        try {
            const res = await fetch("/api/admin/me", {
                credentials: "include",
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                router.replace("/login");
                return;
            }
            sessionStorage.removeItem('admin')
            setSessionStorageData('admin', data?.result)
            setAdmin(data?.result);
        } catch (error) {
            console.error(error);
            router.replace("/login");
        } finally {
            setLoading(false);
        }
    };


    const logout = async () => {
        try {
            const res = await fetch(
                "/api/admin/logout",
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            const data = await res.json();

            if (!res.ok) {
                toast.error(
                    data.error || "Logout failed"
                );
                return;
            }
            sessionStorage.removeItem('admin')
            router.replace("/login");
        } catch (error) {
            console.error(error);
            toast.error("Logout failed");
        }
    };

    const goto = (path) => {
        router.push(path);
    };

    if (loading) {
        return (
            <div className="admin-loader">
                <div className="loader-card">
                    <Image
                        src={logo}
                        alt="logo"
                        width={120}
                        height={40}
                        className="loader-logo"
                        loading="eager"
                    />

                    <div className="spinner"></div>

                    <h3>Admin Verification</h3>

                    <p>
                        Checking credentials and
                        permissions...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="dashboard">
                <div className={`sidebar ${menuOpen ? "active" : ""}`}>
                    <div className="sidebar-header">
                        <Image
                            className="logo-img"
                            src={logo}
                            alt="logo"
                            width={110}
                            height={50}
                            priority
                        />

                        <span
                            className="menu-toggle"
                            onClick={() =>
                                setMenuOpen(false)
                            }
                        >
                            ✖
                        </span>
                    </div>

                    {menus.map((item, i) => (
                        <a
                            key={i}
                            onClick={() =>
                                goto(adminpath + item.path)
                            }
                        >
                            {item.icon} {item.name}
                        </a>
                    ))}
                </div>

                <div
                    className={`overlay ${menuOpen ? "active" : ""
                        }`}
                    onClick={() =>
                        setMenuOpen(false)
                    }
                />

                <div className="content">
                    <div className="topbar">
                        <div
                            className="menu-toggle"
                            onClick={() =>
                                setMenuOpen(true)
                            }
                        >
                            ☰
                        </div>

                        <h2>
                            Welcome 👋{" "}
                        </h2>

                        <div
                            className="profile-menu"
                            ref={profileRef}
                        >
                            <div
                                className="profile-trigger"
                                onClick={() =>
                                    setProfileOpen(
                                        !profileOpen
                                    )
                                }
                            >
                                <Image
                                    src={avatar}
                                    alt="avatar"
                                    width={35}
                                    height={35}
                                    priority
                                />

                                <span>
                                    {admin?.name || "Admin"}
                                </span>
                            </div>

                            <div
                                className={`profile-dropdown ${profileOpen
                                    ? "active"
                                    : ""
                                    }`}
                            >
                                <a onClick={logout}>
                                    🚪 Logout
                                </a>
                            </div>
                        </div>
                    </div>

                    {children}
                </div>
            </div>

            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    );
}
