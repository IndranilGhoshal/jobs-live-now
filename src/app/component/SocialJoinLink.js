import React from 'react'
import { wpgrouplink } from '../utils/common-text'

export default function SocialJoinLink() {
    return (
        <div className="index-share-box">
            <a
                href={wpgrouplink}
                target="_blank"
                rel="noreferrer"
                className="whatsapp"
            >
                <i className="fa-brands fa-whatsapp"></i> Join WhatsApp
            </a>

        </div>
    )
}
