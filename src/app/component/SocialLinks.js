import Link from 'next/link'
import React from 'react'
import { fbpagelink, wpgrouplink, ytlink } from '../utils/common-text'

export default function SocialLinks() {
    return (
        <>
            {/* ================= SOCIAL LINKS ================= */}
            <div className="col-md-12 mt-4 text-center">

                <strong>
                    Quick Links :
                </strong>

                <div className="mt-2">

                    <Link
                        href={wpgrouplink}
                        target="_blank"
                    >
                        WhatsApp
                    </Link>

                    {" || "}

                    <Link
                        href={fbpagelink}
                        target="_blank"
                    >
                        Facebook
                    </Link>

                    {" || "}

                    <Link
                        href={ytlink}
                        target="_blank"
                    >
                        Youtube
                    </Link>

                </div>
            </div>

        </>
    )
}
