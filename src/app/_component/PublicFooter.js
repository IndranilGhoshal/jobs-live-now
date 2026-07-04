import React from 'react'
import '../../../public/css/public_style.css'
import Link from 'next/link'
import { title, year } from '../utils/common-text'

export default function PublicFooter() {
    return (
        <>
            <div className='container'>
                <footer className="footer">
                    <div className="footer-container">

                        <div className="footer-col">
                            <h3 className="footer-title">{title}</h3>
                            <p className="footer-text">
                                {title} provides latest Goverment Jobs Forms, Result, Admit Cards,
                                Answer Keys and Syllabus updates across India.
                            </p>
                        </div>

                        <div className="footer-col">
                            <h3 className="footer-title">Categories</h3>
                            <ul className="footer-list">
                                <li><Link href={`/top-online-form`}>Top Online Form</Link></li>
                                <li><Link href={`/category/admit-card`}>Admit Card</Link></li>
                                <li><Link href={`/category/results`}>Results</Link></li>
                                <li><Link href={`/category/answer-key`}>Answer Key</Link></li>
                                <li><Link href={`/category/syllabus`}>Syllabus</Link></li>
                                <li><Link href={`/category/admission-form`}>Admission Form</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3 className="footer-title">Free Online Tools</h3>
                            <ul className="footer-list">
                                <li><Link href={`/tools/age-calculator`}>Age Calculator</Link></li>
                                <li><Link href={`/tools/image-resizer`}>Image Resizer</Link></li>
                                <li><Link href={`/tools/biodata-maker`}>Biodata Maker</Link></li>
                                <li><Link href={`/tools/image-to-pdf`}>Image To PDF</Link></li>
                                <li><Link href={`/tools/typing-test`}>Typing Test</Link></li>
                                <li><Link href={`/tools/image-signature-joiner`}>Image Signature Joiner</Link></li>
                                <li><Link href={`/tools/name-date-on-image`}>Name & Date on Image</Link></li>
                                <li><Link href={`/tools/pdf-to-image`}>PDF to Image</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3 className="footer-title">Quick Info</h3>
                            <ul className="footer-list">
                                <li><Link href={`/`}>Home</Link></li>
                                <li><Link href={`/about-us`}>About Us</Link></li>
                                <li><Link href={`/contact-us`}>Contact Us</Link></li>
                                <li><Link href={`/privacy-policy`}>Privacy Policy</Link></li>
                                <li><Link href={`/terms-and-conditions`}>Terms & Conditions</Link></li>
                                <li><Link href={`/disclaimer`}>Disclaimer</Link></li>
                                <li><Link href={`/disclaimer`}>Editorial Policy</Link></li>
                                <li><Link href={`/disclaimer`}>Fact Check Policy</Link></li>
                                <li><Link href={`/disclaimer`}>DMCA Policy</Link></li>
                                <li><Link href={`/disclaimer`}>Cookie Policy</Link></li>
                                <li><Link href={`/site-map`}>Site Map</Link></li>
                            </ul>
                        </div>

                    </div>

                    <div className="footer-bottom">
                        <p>© {year} {title} | All Rights Reserved</p>
                    </div>
                </footer>
            </div>
        </>
    )
}
