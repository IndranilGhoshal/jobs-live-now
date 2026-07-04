import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaYoutube } from "react-icons/fa";
import { fbpagelink, wpgrouplink, ytlink } from "../utils/common-text";

export default function SocialLinks() {
    return (
        <div className="col-md-12 mt-4">
            <div className="social-links-box">

                <div className="social-header">

                    <span className="social-badge">
                        👥 Join Our Community
                    </span>

                    <h2 className="social-title">
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
                        <FaWhatsapp size={20} />
                        <span>Join WhatsApp</span>
                    </Link>

                    <Link
                        href={fbpagelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn facebook"
                    >
                        <FaFacebookF size={18} />
                        <span>Follow Facebook</span>
                    </Link>

                    <Link
                        href={ytlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn youtube"
                    >
                        <FaYoutube size={20} />
                        <span>Subscribe on YouTube</span>
                    </Link>

                </div>

                <p className="social-note">
                    ✅ Free Updates &nbsp;•&nbsp; 🚀 Fast Notifications &nbsp;•&nbsp; 🔔 Never Miss an Important Update
                </p>

            </div>
        </div>
    );
}