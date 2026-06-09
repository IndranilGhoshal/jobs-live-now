'use client'

import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

// 🔥 SSR OFF
const Select = dynamic(() => import("react-select"), { ssr: false });

/* ================= CUSTOM OPTION ================= */
const CustomOption = (props) => {
    const { innerProps, label, isSelected, data } = props;

    return (
        <div
            {...innerProps}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 12px",
                cursor: "pointer",
                backgroundColor: isSelected ? "#e6f0ff" : "white"
            }}
        >
            <input
                type="checkbox"
                checked={isSelected}
                readOnly
                style={{
                    width: "16px",
                    height: "16px",
                    cursor: "pointer"
                }}
            />

            <span style={{ fontSize: "14px" }}>
                {label}
            </span>
        </div>
    );
};

/* ================= MAIN COMPONENT ================= */
export default function MultipleAutoCompleteSearch({
    list,
    value,
    setvaluemultiplelist,
    error
}) {

    const [options, setoptions] = useState([]);

    useEffect(() => {
        const temp = list.map(l => ({
            value: l.name,
            label: l.name
        }));
        setoptions(temp);
    }, [list]);

    const handleChange = (selected) => {
        setvaluemultiplelist(selected);
    };

    /* ================= ERROR STYLE ================= */
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: error ? "1px solid red" : provided.border,
            boxShadow: error
                ? "0 0 6px rgba(255,0,0,0.4)"
                : state.isFocused
                    ? "0 0 6px rgba(0,114,255,0.3)"
                    : provided.boxShadow,
            "&:hover": {
                border: error ? "1px solid red" : provided.border
            }
        })
    };

    return (
        <Select
            instanceId="multi-select"   // 🔥 hydration fix
            isMulti
            options={options}
            isSearchable={true}
            value={value}
            onChange={handleChange}
            components={{ Option: CustomOption }}
            hideSelectedOptions={false}
            closeMenuOnSelect={false}
            styles={customStyles}   // 🔥 ERROR BORDER APPLY
        />
    );
}