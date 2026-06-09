"use client";
import React from 'react'
import Image from "next/image";
import logo from "../../../public/images/logo.png";

export default function Header() {
    return (
        <>
            <div className="top-bar">
                JOBS LIVE NOW
            </div>

            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <Image
                            className="logo-img"
                            src={logo}
                            alt="logo"
                            width={120}
                            height={40}
                            loading="eager"
                        />
                    </a>
                </div>
            </nav>
        </>
    )
}
