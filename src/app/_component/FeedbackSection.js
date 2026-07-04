"use client";

import { useEffect, useState } from "react";
import {
    ThumbsUp,
    Meh,
    ThumbsDown,
    MessageCircleMore,
    HeartHandshake,
    BadgeCheck
} from "lucide-react";

export default function FeedbackSection({ slug }) {

    const [loading, setLoading] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const [showThanks, setShowThanks] = useState(false);

    const [loadingType, setLoadingType] = useState(null);

    const [counts, setCounts] = useState({

        helpful: 0,

        partial: 0,

        improve: 0,

    });

    useEffect(() => {

        loadFeedback();

        const voted = localStorage.getItem(`feedback-${slug}`);

        if (voted) {

            setSubmitted(true);

        }

    }, [slug]);



    const loadFeedback = async () => {

        try {

            const res = await fetch(`/api/feedback?slug=${slug}`);

            const data = await res.json();

            setCounts(data);

        } catch (err) {

            console.log(err);

        }

    };



    const submitFeedback = async (type) => {

        if (submitted || loading) return;

        setLoading(true);

        try {

            const res = await fetch("/api/feedback", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    slug,

                    type

                })

            });

            if (!res.ok) {

                throw new Error("Failed");

            }

            localStorage.setItem(`feedback-${slug}`, type);

            setSubmitted(true);

            setShowThanks(true);

            setCounts(prev => ({

                ...prev,

                [type]: prev[type] + 1

            }));
            
            setLoadingType(null)

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    }



    return (

        <section className="user-feedback">

            <div className="feedback-header">

                <h2>
                    <MessageCircleMore size={26} />
                    Was this article helpful?
                </h2>

                <p>

                    Your feedback helps us improve our articles and provide

                    better government job updates.

                </p>

            </div>



            <div className="feedback-actions">

                <button

                    className="feedback-btn helpful"

                    disabled={submitted || loading}

                    onClick={() => { submitFeedback("helpful"); setLoadingType("helpful"); }}

                >

                    {

                        loadingType === "helpful" ?

                            <div className="feedback-loader"></div>

                            :

                            <>

                                <ThumbsUp />

                                <strong>Helpful</strong>

                                <span>{counts.helpful} Votes</span>

                            </>

                    }

                </button>



                <button

                    className="feedback-btn partial"

                    disabled={submitted || loading}

                    onClick={() => { submitFeedback("partial"); setLoadingType("partial"); }}

                >

                    {

                        loadingType === "partial" ?

                            <div className="feedback-loader"></div>

                            :

                            <>

                                <Meh />

                                <strong>Partially Helpful</strong>

                                <span>{counts.partial} Votes</span>

                            </>

                    }

                </button>



                <button

                    className="feedback-btn improve"

                    disabled={submitted || loading}

                    onClick={() => { submitFeedback("improve"); setLoadingType("improve"); }}

                >

                    {

                        loadingType === "improve" ?

                            <div className="feedback-loader"></div>

                            :

                            <>

                                <ThumbsDown />

                                <strong>Needs Improvement</strong>

                                <span>{counts.improve} Votes</span>

                            </>

                    }

                </button>

            </div>



            {
                showThanks && (

                    <div className="feedback-success">

                        <HeartHandshake size={22} />

                        <span>
                            Thank you for your valuable feedback!
                        </span>

                    </div>

                )
            }

            {
                submitted && !showThanks && (

                    <div className="feedback-already">

                        <BadgeCheck size={22} />

                        <span>
                            You have already shared your feedback.
                        </span>

                    </div>

                )
            }

        </section>

    );

}