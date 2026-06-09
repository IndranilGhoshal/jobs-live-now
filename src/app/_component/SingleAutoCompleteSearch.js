'use client'

import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

// 🔥 SSR OFF
const Select = dynamic(() => import("react-select"), { ssr: false });

const SingleAutoCompleteSearch = ({ list, value, setvaluelist, error }) => {

  const [options, setoptions] = useState([]);

  useEffect(() => {
    let temp = list.map(l => ({
      value: l.name,
      label: l.name
    }));
    setoptions(temp);
  }, [list]);

  const handleChange = (selected) => {
    setvaluelist(selected);
  };

  // 🔥 ERROR STYLE
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
      instanceId="single-select"
      options={options}
      isSearchable={true}
      value={value}
      onChange={handleChange}
      className="basic-multi-select"
      classNamePrefix="select"
      styles={customStyles}   // 🔥 APPLY HERE
    />
  );
};

export default SingleAutoCompleteSearch;