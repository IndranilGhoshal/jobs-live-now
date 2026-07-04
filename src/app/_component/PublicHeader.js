
"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import '../../../public/css/public_style.css'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { title } from "../utils/common-text";
import { Megaphone } from 'lucide-react';
import ThemeToggle from "./ThemeToggle";
import {
    House,
    Award,
    IdCard,
    ClipboardCheck,
    BookOpenCheck,
    GraduationCap,
    Blocks,
} from "lucide-react";

const icons = {
    "house": House,
    "award": Award,
    "id-card": IdCard,
    "clipboard-check": ClipboardCheck,
    "book-open-check": BookOpenCheck,
    "graduation-cap": GraduationCap,
    "blocks": Blocks,
};

export default function PublicHeader({ menus, marquees }) {
    const menu = menus ? JSON.parse(menus) : null;
    const marquee = marquees ? JSON.parse(marquees) : null;
    const pathname = usePathname();


    const onnavremoveclass = () => {
        const element = document.getElementById("nav");
        element.classList.remove("show");
        const elem = document.getElementById('nav-responsive-button');
        elem.classList.remove("collapsed");
    }


    return (
        <>
            <header className="public-header">
                <div className='container'>

                    {/* ================= TOP BAR ================= */}
                    <div className="top-bar">
                        <h1 className="site-title">
                            <Link href="/" className="site-title-link">{title.toUpperCase()}</Link>
                        </h1>
                        <h2 className="top-sub-bar">Trusted Source for Jobs Updates</h2>
                        <p className="top-sub-bar m-0">सबसे आगे अपडेट</p>
                    </div>

                    {/* ================= NAVBAR ================= */}
                    <nav className="navbar navbar-expand-lg" aria-label="Main Navigation">
                        <div className="container-fluid">

                            {/* Logo (Left) */}
                            <Link
                                href="/"
                                className="navbar-brand d-flex align-items-center"
                                prefetch={true}
                            >
                                <Image
                                    className="logo-img"
                                    src={logo}
                                    alt="Jobs Live Now Government Jobs Portal"
                                    width={120}
                                    height={40}
                                    priority
                                />
                            </Link>

                            {/* ================= TOGGLE ================= */}
                            <button
                                id="nav-responsive-button"
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#nav"
                                aria-controls="nav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>

                            </button>


                            {/* Menu (CENTER) */}
                            <div className="collapse navbar-collapse" id="nav">
                                <ul className="navbar-nav mx-auto">
                                    {
                                        menu.map((item, i) => {
                                            const Icon = icons[item.icon];

                                            return (
                                                <li
                                                    key={i}
                                                    className="nav-item"
                                                    onClick={onnavremoveclass}
                                                >
                                                    <Link
                                                        href={item.path}
                                                        className={`nav-link ${pathname === item.path ? "active-nav" : ""
                                                            }`}
                                                    >
                                                        <div className="show-div">
                                                            {Icon && <Icon size={20} />}
                                                            <span>{item.menu}</span>
                                                        </div>

                                                        <div className="show-div-for-tab navbtn">
                                                            <div className="navbtnicon">
                                                                {Icon && <Icon size={20} />}
                                                            </div>

                                                            <div className="navbtntext">
                                                                {item.menu}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                                {/* Mobile Theme Toggle */}
                                <div className="mobile-theme-toggle d-lg-none">
                                    <ThemeToggle mobile />
                                </div>
                            </div>

                            {/* Desktop Theme Toggle */}
                            <div className="theme-toggle-wrapper d-none d-lg-flex">
                                <ThemeToggle />
                            </div>

                        </div>
                    </nav>

                    {/* ================= BREAKING NEWS ================= */}

                    <div className="breaking-wrapper">

                        <span className="breaking-label">
                            <Megaphone size={18} /> 
                            <span>Latest Update</span>
                        </span>

                        <Marquee
                            speed={50}
                            gradient={false}
                            pauseOnHover={true}
                            className="breaking"
                        >

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: marquee,
                                }}
                            />

                        </Marquee>

                    </div>

                </div>
            </header>
        </>
    )
}
