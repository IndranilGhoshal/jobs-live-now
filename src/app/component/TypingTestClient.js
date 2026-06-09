"use client";

import { useEffect, useState, useRef } from "react";
import { lessonstextarray } from "./json/TypingTestLesson";
import { countWords } from "../utils/common";

const lessons = lessonstextarray;

export default function TypingTestClient() {
    const [selectedLesson, setSelectedLesson] = useState(1);
    const [selectedTime, setSelectedTime] = useState(60);

    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [input, setInput] = useState("");
    const [timeLeft, setTimeLeft] = useState(60);
    const [isRunning, setIsRunning] = useState(false);

    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [showResult, setShowResult] = useState(false);

    const textRef = useRef(null);
    const [boxHeight, setBoxHeight] = useState("auto");

    // load first lesson
    useEffect(() => {
        setText(lessons[0].text);
        setTitle(lessons[0].title);
    }, []);

    // sync height
    useEffect(() => {
        if (textRef.current) {
            setBoxHeight(textRef.current.offsetHeight + "px");
        }
    }, [text]);

    // timer
    useEffect(() => {
        let timer;

        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }

        if (timeLeft === 0 && isRunning) {
            calculateResult();
        }

        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const handleChange = (e) => {
        if (!isRunning) setIsRunning(true);
        setInput(e.target.value);
    };

    const calculateResult = () => {
        setIsRunning(false);

        const timeSpent = (selectedTime - timeLeft) / 60;

        const words = input.trim()
            ? input.trim().split(/\s+/).length
            : 0;

        const calculatedWpm = Math.round(
            words / (timeSpent || 1 / 60)
        );

        let correct = 0;

        for (let i = 0; i < input.length; i++) {
            if (input[i] === text[i]) {
                correct++;
            }
        }

        const calculatedAccuracy =
            input.length > 0
                ? Math.round((correct / input.length) * 100)
                : 0;

        setWpm(calculatedWpm);
        setAccuracy(calculatedAccuracy);
        setShowResult(true);
    };

    const restart = () => {
        setInput("");
        setWpm(0);
        setAccuracy(100);
        setShowResult(false);
        setTimeLeft(selectedTime);
        setIsRunning(false);
    };

    return (
        <div className="type-card">
            {/* SELECTORS */}
            <div className="row g-3 mb-4">

                <div className="col-md-6">
                    <label className="form-label">Select Lesson:</label>
                    <select
                        className="form-select"
                        value={selectedLesson}
                        onChange={(e) => {
                            const id = Number(e.target.value);

                            setSelectedLesson(id);

                            const lesson = lessons.find(
                                (item) => item.id === id
                            );

                            setText(lesson.text);
                            setTitle(lesson.title);
                            setInput("");
                            setShowResult(false);
                        }}
                    >
                        {lessons.map((lesson) => (
                            <option key={lesson.id} value={lesson.id}>
                                {lesson.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Select Time:</label>
                    <select
                        className="form-select"
                        value={selectedTime}
                        onChange={(e) => {
                            const time = Number(e.target.value);
                            setSelectedTime(time);
                            setTimeLeft(time);
                        }}
                    >
                        <option value={30}>30 Seconds</option>
                        <option value={60}>1 Minute</option>
                        <option value={120}>2 Minutes</option>
                        <option value={300}>5 Minutes</option>
                        <option value={600}>10 Minutes</option>
                        <option value={900}>15 Minutes</option>
                        <option value={1800}>30 Minutes</option>
                        <option value={2700}>45 Minutes</option>
                        <option value={3600}>60 Minutes</option>
                    </select>
                </div>
            </div>

            {/* STATS */}
            <div className="stats-typ d-flex gap-3 mb-4 flex-wrap">
                <span className="badge bg-primary p-2">
                    Time: {timeLeft} Sec
                </span>
                <span className="badge bg-success p-2">
                    WPM: {wpm}
                </span>
                <span className="badge bg-warning text-dark p-2">
                    Accuracy: {accuracy}%
                </span>
            </div>

            {/* INFO */}
            {text && (
                <div className="mb-3">
                    <div><b>Title:</b> {title}</div>
                    <div><b>Total Words:</b> {countWords(text)}</div>
                </div>
            )}

            {/* MAIN AREA */}
            <div className="row g-3 mb-4">

                {/* TEXT */}
                <div className="col-md-6">
                    <div
                        ref={textRef}
                        className="alert alert-light border"
                        style={{
                            fontSize: "17px",
                            lineHeight: "1.8",
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        {text.split("").map((char, index) => {
                            let color = "#333";
                            let fontWeight = "400"

                            if (index < input.length) {
                                color =
                                    input[index] === char
                                        ? "green"
                                        : "red";

                                fontWeight =
                                    input[index] === char
                                        ? "600"
                                        : "600";
                            } else {
                                color = "#999";
                                fontWeight = "300"
                            }

                            return (
                                <span key={index} style={{ color, fontWeight }}>
                                    {char}
                                </span>
                            );
                        })}
                    </div>
                </div>

                {/* INPUT (FIXED - NO OVERLAY BUG) */}
                <div className="col-md-6">
                    <textarea
                        className="form-control"
                        style={{
                            height: boxHeight,
                            resize: "none",
                            fontSize: "17px",
                            lineHeight: "1.8",
                        }}
                        placeholder="Start typing here..."
                        value={input}
                        onChange={handleChange}
                        disabled={showResult}
                        autoFocus
                    />
                </div>

                {/* BUTTONS */}
                <div className="col-md-12">
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-success"
                            onClick={calculateResult}
                            disabled={!input.length}
                        >
                            Submit Test
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={restart}
                        >
                            Restart
                        </button>
                    </div>
                </div>
            </div>

            {/* RESULT */}
            {showResult && (
                <div className="card mt-4 border-success">
                    <div className="card-body text-center">

                        <h3 className="text-success mb-4">
                            Typing Test Result
                        </h3>

                        <div className="row">

                            <div className="col-md-4">
                                <h5>WPM</h5>
                                <p className="fs-2 fw-bold text-primary">
                                    {wpm}
                                </p>
                            </div>

                            <div className="col-md-4">
                                <h5>Accuracy</h5>
                                <p className="fs-2 fw-bold text-success">
                                    {accuracy}%
                                </p>
                            </div>

                            <div className="col-md-4">
                                <h5>Typed Words</h5>
                                <p className="fs-2 fw-bold">
                                    {input.trim().split(/\s+/).filter(Boolean).length}
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}