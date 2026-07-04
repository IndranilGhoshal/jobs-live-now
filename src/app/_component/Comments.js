"use client";

import { MessagesSquare, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Comments = ({ slug, title, description }) => {

    const [comments, setComments] = useState([]);

    const [fetching, setFetching] = useState(false);
    const [posting, setPosting] = useState(false);

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    // ================= FETCH COMMENTS =================
    const fetchComments = async () => {

        try {

            setFetching(true);
            setError("");
            const res = await fetch(`/api/comments?slug=${slug}`);
            const data = await res.json();
            setComments(data.comments ? data.comments : []);

        } catch (err) {

            setError(err.message);
            setComments([]);

        } finally {

            setFetching(false);

        }

    };

    useEffect(() => {
        if (slug) fetchComments();
    }, [slug]);

    // ================= HANDLE CHANGE =================
    const handleChange = (e) => {

        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    };

    // ================= SUBMIT COMMENT =================
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.message.trim()
        ) return;

        try {

            setPosting(true);
            setSuccess("");
            setError("");

            const res = await fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    slug,
                    ...form
                })
            });

            if (!res.ok) throw new Error("Failed to post comment");

            const data = await res.json();

            if (data.success) {
                setForm({
                    name: "",
                    email: "",
                    message: ""
                });

                setSuccess("🎉 Comment posted successfully!");

                setTimeout(() => setSuccess(""), 3000);

                fetchComments()

            } else {
                setSuccess("Server Error");
            }
        } catch (err) {

            setError(err.message);

        } finally {

            setPosting(false);

        }

    };

    const getAvatarGradient = (name = "") => {
        const gradients = [
            "linear-gradient(135deg,#3b82f6,#60a5fa)",
            "linear-gradient(135deg,#ef4444,#f97316)",
            "linear-gradient(135deg,#10b981,#14b8a6)",
            "linear-gradient(135deg,#8b5cf6,#ec4899)"
        ];

        const index = name
            .split("")
            .reduce((acc, c) => acc + c.charCodeAt(0), 0) % gradients.length;

        return gradients[index];
    };

    // ================= UI =================
    return (

        <section className="comments-section">

            {/* TITLE */}
            <h2 className="comments-title">
                <MessagesSquare size={26} />
                <span>{title || "Join the Discussion"}</span>
            </h2>

            <p className="comments-desc">
                {description || "Share your thoughts and questions below."}
            </p>

            {/* FORM */}
            <form className="comment-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                />

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                />

                <textarea
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your comment..."
                    required
                />

                <button type="submit" disabled={posting}>

                    {posting ? (
                        <>
                            <LoaderCircle size={18} className="spin" />
                            Posting...
                        </>
                    ) : (
                        "Post Comment"
                    )}

                </button>

            </form>

            {/* SUCCESS / ERROR */}
            {success && (
                <div className="comment-success">
                    {success}
                </div>
            )}

            {error && (
                <div className="comment-error">
                    ⚠️ {error}
                </div>
            )}

            {/* COMMENTS LIST */}
            <div className="comment-list">

                {fetching ? (

                    <div className="comments-loading">
                        Loading comments...
                    </div>

                ) : comments.length === 0 ? (

                    <div className="no-comment">
                        No comments yet. Be the first!
                    </div>

                ) : (

                    <div className="comment-box">
                        <h4>Comments:</h4>
                        {
                            comments.map((item, i) => (

                                <div className="comment-card" key={i}>

                                    <div className="comment-header">

                                        <div className="avatar" style={{ background: getAvatarGradient(item.name) }}>
                                            {item.name?.charAt(0).toUpperCase()}
                                        </div>

                                        <div>

                                            <h4>{item.name}</h4>

                                            <span>
                                                {item.createdAt
                                                    ? new Date(item.createdAt).toLocaleString("en-IN", {
                                                        day: "numeric",
                                                        month: "short",
                                                        year: "numeric"
                                                    })
                                                    : "Just now"}
                                            </span>

                                        </div>

                                    </div>

                                    <p>{item.message}</p>

                                </div>

                            ))
                        }
                    </div>

                )}

            </div>

        </section>

    );

};

export default Comments;