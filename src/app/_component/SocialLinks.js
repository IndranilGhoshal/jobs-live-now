import Link from "next/link";
import {
    Users,
    BellRing,
    BriefcaseBusiness,
    ClipboardCheck,
    FileCheck2,
    GraduationCap,
    MessageCircle,
    PlayCircle,
    ShieldCheck,
    Rocket,
} from "lucide-react";

import { fbpagelink, wpgrouplink, ytlink } from "../utils/common-text";

export default function SocialLinks() {
    return (
        <div className="col-md-12 mt-4">
            <div className="social-links-box">

                <div className="social-header">

                    <span className="social-badge">
                        <Users size={16} strokeWidth={2.2} />
                        Join Our Community
                    </span>

                    <h2 className="social-title">
                        <BellRing size={24} strokeWidth={2.2} />
                        Never Miss a Government Job Update
                    </h2>

                    <p className="social-subtitle">
                        Get Daily Government Job Notifications, Online Forms,
                        Results, Admit Cards, Answer Keys, Syllabus and
                        Admission Updates directly on your phone.
                    </p>

                </div>

                <div className="social-buttons">

                    <Link
                        href={wpgrouplink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn whatsapp"
                    >
                        <MessageCircle size={20} strokeWidth={2.2} />
                        <span>Join WhatsApp</span>
                    </Link>

                    <Link
                        href={fbpagelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn facebook"
                    >
                        <Users size={20} strokeWidth={2.2} />
                        <span>Follow Facebook</span>
                    </Link>

                    <Link
                        href={ytlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn youtube"
                    >
                        <PlayCircle size={20} strokeWidth={2.2} />
                        <span>Subscribe on YouTube</span>
                    </Link>

                </div>

                <div className="social-note">

                    <span>
                        <ShieldCheck size={16} strokeWidth={2.2} />
                        Free Updates
                    </span>

                    <span>
                        <Rocket size={16} strokeWidth={2.2} />
                        Fast Notifications
                    </span>

                    <span>
                        <BellRing size={16} strokeWidth={2.2} />
                        Never Miss an Important Update
                    </span>

                </div>

            </div>
        </div>
    );
}