
"use client";

import React, {
    useEffect,
    useState,
} from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import '../../../public/css/public_style.css'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { title } from "../utils/common-text";
import { useApi } from "../utils/api";

export default function PublicHeader() {
    const { postData, getData } = useApi();
    const pathname = usePathname();
    const [marqueeText, setMarqueeText] = useState("");
    const [menus, setMenus] = useState([]);
    // ================= FETCH MARQUEE =================

    const fetchMarquee = async () => {
        try {
            let data = await postData (`/api/marquee`, {details: true})
            if (data.success) {
                setMarqueeText(data?.data?.marquee || "");
            }else{
                setMarqueeText("");
            }
        } catch (error) {
            console.log(error);
        }
    };


    const fetchMenus = async () => {
        try {
            const data = await getData(`/api/public-menu`);
            if (data.success) {
                setMenus(data?.data || []);
            } else {
                setMenus([]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // ================= USE EFFECT =================

    useEffect(() => {
        fetchMenus();
        fetchMarquee();

    }, []);


    const onnavremoveclass = () =>{
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
                                    alt="logo"
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
                                        menus.map((item, i) => (
                                            <li key={i} className="nav-item" onClick={()=>{onnavremoveclass()}}>
                                                <Link
                                                    href={item.path}
                                                    className={`nav-link ${pathname === item.path ? "active-nav" : ""}`}
                                                >
                                                    {item.icon+" "+item.menu}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* ================= BREAKING NEWS ================= */}

                    <div className="breaking-wrapper">

                        <span className="breaking-label">
                            📢 Latest Update
                        </span>

                        <Marquee
                            speed={50}
                            gradient={false}
                            pauseOnHover={true}
                            className="breaking"
                        >

                            {marqueeText}

                        </Marquee>

                    </div>

                </div>
            </header>
        </>
    )
}
