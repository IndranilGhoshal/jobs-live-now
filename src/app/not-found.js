import Link from "next/link";

export default function NotFound() {
    return (
        <div className="nf-container">
            <div className="bg-circle circle1"></div>
            <div className="bg-circle circle2"></div>
            <div className="bg-circle circle3"></div>

            <div className="nf-content">
                <div className="floating-icon">🔍</div>

                <h1 className="error-code">404</h1>

                <h2 className="nf-title">
                    Oops! Page Not Found
                </h2>

                <p className="nf-description">
                    The page you are looking for might have been removed,
                    renamed, or is temporarily unavailable.
                </p>

                <div className="button-group">
                    <Link href="/" className="home-btn">
                        🏠 Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}