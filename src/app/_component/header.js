"use client";
import React from 'react'
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { title } from '../utils/common-text';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <div className="top-bar">
                <h1 className="site-title">
                    <Link href="/" className="site-title-link">{title.toUpperCase()}</Link>
                </h1>
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
