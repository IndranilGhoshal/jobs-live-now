"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import { slugify, slugToTitle } from "../utils/common";
import SocialLinks from "./SocialLinks";

export default function JobDetailsClient({ job }) {

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 300);

    const data = job ? job : null;

    // ================= NOT FOUND =================
    if (!data) {

        return (
            <div className="container job-dttls main">
                <div className="notfound-container">
                    <div className="notfound-box">
                        <div className="icon">😕</div>

                        <h1>Job Not Found !</h1>

                        <p>
                            Sorry, the job you are looking for does not exist or has been removed.
                        </p>

                        <Link href="/" className="home-btn">
                            🏠 Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        );

    }

    const temp = data.data;

    const array = temp.fields;

    let finalarray = [];


    // ================= GET FIELD =================
    const getField = (name) => {

        return temp?.fields?.find(
            (f) => f.fieldName === name
        );

    };

    // ================= FIELD VALUES =================
    const title = getField("Job Advertisement Title")?.value || "";

    const category = temp?.category || "Admin";

    const advertisementnumber = getField("Job Advertisement Number")?.value || "";

    const organisation = getField("Organisation Name")?.value || "";

    const author = temp?.author || "Admin";

    const tags = getField("Tags")?.value || [];

    const shortInfo = getField("Short Information")?.value || "";

    const postdate = temp?.createdAt || "";




    if (array.length > 0) {
        for (let a of array) {
            if (
                a.fieldName !== "Job Advertisement Title" &&
                a.fieldName !== "Organisation Name" &&
                a.fieldName !== "Job Advertisement Number" &&
                a.fieldName !== "Job Type" &&
                a.fieldName !== "Application Date" &&
                a.fieldName !== "Qualification Allow" &&
                a.fieldName !== "Tags" &&
                a.fieldName !== "Short Information" &&
                a.fieldName !== "Job Category"
            ) {
                finalarray.push(a);
            }
        }
    }

    // ================= LOADING =================
    if (loading) {

        return (
            <div className="container job-dtl main">

                <div className="skeleton skeleton-title mb-3"></div>

                <div className="skeleton skeleton-breadcrumb mb-3"></div>

                <div className="card-box p-3">

                    <div className="skeleton skeleton-heading mb-4"></div>

                    {
                        Array.from({ length: 10 }).map((_, i) => (

                            <div
                                key={i}
                                className="skeleton-row"
                            >

                                <div className="skeleton skeleton-label"></div>

                                <div className="skeleton skeleton-value"></div>

                            </div>

                        ))
                    }
                    <div className="d-flex gap-2 mt-4">

                        <div className="skeleton skeleton-btn"></div>

                        <div className="skeleton skeleton-btn"></div>

                    </div>

                </div>
                <div className="card-box p-3 mt-3">

                    <div className="skeleton skeleton-heading mb-3"></div>

                    {
                        Array.from({ length: 8 }).map((_, i) => (

                            <div
                                key={i}
                                className="skeleton skeleton-line mb-2"
                            ></div>

                        ))
                    }

                </div>

            </div>
        );

    }



    return (
        <>

            <div className="container job-dttls main">

                {/* ================= BREADCRUMB ================= */}
                <div className="breadcrumb-box mb-3">

                    <nav aria-label="breadcrumb">

                        <ol className="breadcrumb mb-0">

                            <li className="breadcrumb-item cp">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>

                            {
                                category == "Jobs" ?
                                    <>
                                        <li className="breadcrumb-item cp">
                                            <Link href="/top-online-form">
                                                Top Online Form
                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="breadcrumb-item">
                                            <Link href={"category/" + slugify(category)}>
                                                {slugToTitle(category)}
                                            </Link>
                                        </li>
                                    </>
                            }



                            <li
                                className="breadcrumb-item single-line-ellipsis active"
                                aria-current="page"
                            >
                                {title}
                            </li>

                        </ol>

                    </nav>

                </div>

                {/* ================= POST DATE ================= */}
                <div className="my-2">

                    <b>Post Date:</b>{" "}

                    {
                        moment(postdate).format("LL")
                    }

                </div>

                {/* ================= TITLE ================= */}
                <div className="text-center">

                    <h1 className="job-main-title">
                        {title}
                    </h1>

                </div>

                {/* ================= AUTHOR + TAG ================= */}
                <div className="my-2">

                    <div>
                        <b>Author:</b> {author}
                    </div>

                    <div>

                        <b>Tag:</b>{" "}

                        {
                            tags?.map((tag, i) => (
                                <span key={i}>

                                    {tag?.label}

                                    {i !== tags.length - 1 && ", "}

                                </span>
                            ))
                        }

                    </div>

                </div>

                {/* ================= SHORT INFO ================= */}
                <div className="my-2 short-info">

                    <b>Short Information: </b>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: shortInfo,
                        }}
                    />

                </div>

                {/* ================= TITLE BOX ================= */}
                <div className="dtl-tlt my-2">

                    <div className="dtl-tlt-txt">
                        {organisation}
                    </div>

                    <div className="dtl-tlt-des">
                        {title}
                    </div>

                    <div className="dtl-tlt-txt">
                        {advertisementnumber}
                    </div>

                </div>

                {/* ================= DETAILS ================= */}
                {
                    finalarray.map((item, i) => (

                        <div key={i} className="card-box">

                            <div className="red-head">
                                {item.fieldName}
                            </div>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: item.value,
                                }}
                            />

                        </div>

                    ))
                }

                <div className="text-center">
                    {/* DISCLAIMER */}
                    <p style={{ fontSize: "14px", color: "#666" }}>
                        Disclaimer: This information is collected from official sources and
                        public notifications. Please verify details from official website
                        before applying.
                    </p>
                </div>

            </div>

            {/* ================= QUICK LINKS ================= */}
            <div className="row m-0">

                <SocialLinks />
            </div>

        </>
    );

}
