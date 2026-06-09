"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function AgeCalculator() {

    const [dob, setDob] = useState("");

    const [ageDate, setAgeDate] =
        useState("");

    const [result, setResult] =
        useState(null);

    const calculateAge = () => {

        if (!dob || !ageDate) {

            alert(
                "Please select both dates."
            );

            return;

        }

        const birthDate = new Date(dob);

        const currentDate =
            new Date(ageDate);

        let years =
            currentDate.getFullYear() -
            birthDate.getFullYear();

        let months =
            currentDate.getMonth() -
            birthDate.getMonth();

        let days =
            currentDate.getDate() -
            birthDate.getDate();

        if (days < 0) {

            months--;

            const prevMonth =
                new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    0
                );

            days +=
                prevMonth.getDate();

        }

        if (months < 0) {

            years--;

            months += 12;

        }

        setResult({
            years,
            months,
            days,
        });

    };

    return (

        <div className="age-card">

            <div className="date-field">
                <label>Date of Birth <span className="astrist"> *</span></label>

                <div className="date-input-wrapper">
                    <DatePicker
                        selected={dob}
                        onChange={(date) => setDob(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        className="age-datepicker"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        yearDropdownItemNumber={100}
                        scrollableYearDropdown
                        maxDate={new Date()}
                        showPopperArrow={false}
                        popperPlacement="bottom-start" 
                    />

                    <FaCalendarAlt className="calendar-icon" />
                </div>
            </div>


            <div className="date-field">
                <label>Age As On Date <span className="astrist"> *</span></label>

                <div className="date-input-wrapper">
                    <DatePicker
                        selected={ageDate}
                        onChange={(ageDate) => setAgeDate(ageDate)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        className="age-datepicker"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        yearDropdownItemNumber={100}
                        scrollableYearDropdown
                        maxDate={new Date()}
                        minDate={dob}
                        showPopperArrow={false}
                        popperPlacement="bottom-start" 
                    />

                    <FaCalendarAlt className="calendar-icon" />
                </div>
            </div>

            <button
                disabled={!dob || !ageDate}
                onClick={calculateAge}
                className="calculate-btn"
            >
                Calculate Age
            </button>

            {result && (

                <div className="result-box">

                    <h3>
                        Age Result
                    </h3>

                    <div className="result-grid">

                        <div>
                            <span>
                                {
                                    result.years
                                }
                            </span>
                            <p>Years</p>
                        </div>

                        <div>
                            <span>
                                {
                                    result.months
                                }
                            </span>
                            <p>Months</p>
                        </div>

                        <div>
                            <span>
                                {
                                    result.days
                                }
                            </span>
                            <p>Days</p>
                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}