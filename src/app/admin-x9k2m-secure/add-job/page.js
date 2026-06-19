"use client";

import MultipleAutoCompleteSearch from "@/app/_component/MultipleAutoCompleteSearch";
import SingleAutoCompleteSearch from "@/app/_component/SingleAutoCompleteSearch";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import {
    DragDropContext,
    Droppable,
    Draggable
} from "@hello-pangea/dnd";
import { getSessionStorageData, slugify } from "@/app/utils/common";
import { adminpath } from "@/app/utils/common-text";

const Editor = dynamic(() => import("../../_component/Editor"), {
    ssr: false
});

export default function Page() {

    const router = useRouter();
    const [field, setField] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const [btnloading, setBtnLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/job-field");
            const data = await res.json();
            setField(data.data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const publishJob = async (slug) => {
        await fetch("/api/job-publish", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ slug }),
        });

        alert("Job published & indexing triggered");
    }

    // ================= CHANGE =================
    const handleChange = (index, value) => {
        const updated = [...field];
        updated[index].value = value;

        setField(updated);

        // 🔥 REAL-TIME VALIDATION
        const errorMsg = validateSingleField(updated[index]);

        setErrors(prev => ({
            ...prev,
            [index]: errorMsg
        }));
    };

    const setvaluemultiplelist = (selected, index) => {
        const updated = [...field];
        updated[index].value = selected;

        setField(updated);

        const errorMsg = validateSingleField(updated[index]);

        setErrors(prev => ({
            ...prev,
            [index]: errorMsg
        }));
    };

    // ================= ADD =================
    const addExtraField = (index) => {
        const newField = {
            fieldName: "Extra Field",
            fieldType: "texteditor",
            value: "",
            isMandotary: true, // ✅ CHANGE HERE
            icon: "📝",
            isExtra: true
        };

        const updated = [...field];
        updated.splice(index + 1, 0, newField);
        setField(updated);
    };

    // ================= REMOVE =================
    const removeField = (index) => {
        const updated = [...field];
        updated.splice(index, 1);
        setField(updated);
    };

    // ================= RENAME =================
    const renameField = (index, name) => {
        const updated = [...field];
        updated[index].fieldName = name;

        setField(updated);

        // 🔥 VALIDATE AFTER RENAME
        const errorMsg = validateSingleField(updated[index]);

        setErrors(prev => {
            const newErrors = { ...prev };

            if (errorMsg) {
                newErrors[index] = errorMsg;
            } else {
                delete newErrors[index];
            }

            return newErrors;
        });
    };

    // ================= DRAG =================
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(field);
        const [reordered] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reordered);

        setField(items);
    };

    // ================= VALIDATION =================
    const validateSingleField = (f) => {

        // 🔥 EXTRA FIELD VALIDATION (NAME + VALUE)
        if (f.isExtra) {

            // 👉 FIELD NAME VALIDATION
            if (!f.fieldName || f.fieldName.trim() === "") {
                return "Field name is required";
            }

            // 👉 VALUE VALIDATION (editor)
            if (!f.value || f.value.replace(/<[^>]*>/g, '').trim() === "") {
                return `${f.fieldName || "Field"} is required`;
            }
        }

        // 🔥 NORMAL MANDATORY VALIDATION
        if (!f.isMandotary) return "";

        if (f.fieldType === "text") {
            if (!f.value || f.value.trim() === "") {
                return `${f.fieldName} is required`;
            }
        }

        if (f.fieldType === "singleselect") {
            if (!f.value || !f.value.value) {
                return `Select ${f.fieldName}`;
            }
        }

        if (f.fieldType === "multiselect") {
            if (!f.value || f.value.length === 0) {
                return `Select ${f.fieldName}`;
            }
        }

        if (f.fieldType === "daterange") {
            if (!f.value?.start || !f.value?.end) {
                return `${f.fieldName} is required`;
            }

            if (new Date(f.value.start) > new Date(f.value.end)) {
                return `End date must be after start date`;
            }
        }

        if (f.fieldType === "texteditor") {
            if (!f.value || f.value.replace(/<[^>]*>/g, '').trim() === "") {
                return `${f.fieldName} is required`;
            }
        }

        return "";
    };

    const validateFields = () => {
        let err = {};

        field.forEach((f, i) => {
            const errorMsg = validateSingleField(f);

            if (errorMsg && errorMsg !== "") {
                err[i] = errorMsg; // ✅ only real error
            }
        });

        return err;
    };

    const saveDateJob = async () => {
        try {
            setBtnLoading(true);
            const validationErrors = validateFields();
            setErrors(validationErrors);

            if (Object.keys(validationErrors).length > 0) return;

            let name = ''

            for (let [i, f] of field.entries()) {
                
                if (f.fieldName == "Job Advertisement Title") {
                    name = f.value
                }

                if (i === field.length - 1) {
                    let obj = {
                        add: true,
                        name: name,
                        slug: slugify(name),
                        status: "0",
                        category: "Jobs",
                        author: getSessionStorageData('admin')?.name ? getSessionStorageData('admin')?.name : "Admin",
                        fields: field
                    }
                    const res = await fetch("/api/job", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(obj)
                    });

                    const data = await res.json();

                    if (data.success) {
                        await publishJob(slugify(name))
                        toast.success(data.message);
                        router.push(adminpath + "/job")
                    } else {
                        toast.error(data.message);
                    }
                }
            }
        }
        catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        } finally {
            setBtnLoading(false);
        }

    };

    const handleDateChange = (index, key, value) => {
        const updated = [...field];

        updated[index].value = {
            ...updated[index].value,
            [key]: value
        };

        setField(updated);

        // 🔥 FULL OBJECT VALIDATE
        const errorMsg = validateSingleField(updated[index]);

        setErrors(prev => {
            const newErrors = { ...prev };

            if (errorMsg) {
                newErrors[index] = errorMsg;
            } else {
                delete newErrors[index]; // ✅ remove error instantly
            }

            return newErrors;
        });
    };

    return (
        <>
            <div className="page-top-bar">

                <button
                    className="back-btn"
                    onClick={() => router.back()}
                >
                    ← Back
                </button>

            </div>
            <div className="job-form-container">

                {loading ? (
                    <p>Loading...</p>
                ) : (

                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="fields">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>

                                    {field.map((item, i) => (
                                        <Draggable key={i} draggableId={String(i)} index={i}>
                                            {(provided) => (
                                                <div
                                                    className="field-box"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                >

                                                    <div className="field-header">

                                                        {/* DRAG HANDLE */}
                                                        <span
                                                            {...provided.dragHandleProps}
                                                            className="drag-handle"
                                                        >
                                                            ☰
                                                        </span>

                                                        {/* FIELD NAME */}
                                                        <div className="field-title">

                                                            {item.isExtra ? (

                                                                <input
                                                                    type="text"
                                                                    value={item.fieldName}
                                                                    onChange={(e) =>
                                                                        renameField(i, e.target.value)
                                                                    }
                                                                    className={`rename-input ${errors[i] ? "error" : ""}`}
                                                                />

                                                            ) : (

                                                                <h3 className="field-label">

                                                                    {item.icon} {item.fieldName}

                                                                    {item.isMandotary && (
                                                                        <span className="required-star">*</span>
                                                                    )}

                                                                </h3>

                                                            )}

                                                        </div>

                                                        {/* ACTIONS */}
                                                        <div className={`${item.isExtra ? "field-actions-extra" : "field-actions"}`}>

                                                            <button
                                                                type="button"
                                                                onClick={() => addExtraField(i)}
                                                            >
                                                                +
                                                            </button>

                                                            {/* 🔥 NOW EVERY FIELD REMOVE HOBE */}
                                                            <button
                                                                type="button"
                                                                className="dlt-ext"
                                                                onClick={() => removeField(i)}
                                                            >
                                                                x
                                                            </button>

                                                        </div>

                                                    </div>

                                                    {/* FIELD */}
                                                    {item.fieldType === "text" && (
                                                        <input
                                                            type="text"
                                                            value={item.value}
                                                            onChange={(e) => handleChange(i, e.target.value)}
                                                            className={errors[i] ? "input error" : "input"}
                                                        />
                                                    )}

                                                    {item.fieldType === "singleselect" && (
                                                        <SingleAutoCompleteSearch
                                                            list={item.selectvalue}
                                                            value={item.value}
                                                            setvaluelist={(val) => handleChange(i, val)}
                                                            error={!!errors[i]}
                                                        />
                                                    )}

                                                    {item.fieldType === "multiselect" && (
                                                        <MultipleAutoCompleteSearch
                                                            list={item.selectvalue}
                                                            value={item.value}
                                                            setvaluemultiplelist={(val) => setvaluemultiplelist(val, i)}
                                                            error={!!errors[i]}
                                                        />
                                                    )}

                                                    {item.fieldType === "texteditor" && (
                                                        <Editor
                                                            value={item.value}
                                                            onChange={(data) => handleChange(i, data)}
                                                            error={errors[i]}
                                                            editortype = "add-job"
                                                        />
                                                    )}

                                                    {item.fieldType === "daterange" && (
                                                        <div className="date-range">

                                                            <input
                                                                type="date"
                                                                value={item.value?.start || ""}
                                                                max={item.value?.end || ""}
                                                                onChange={(e) => handleDateChange(i, "start", e.target.value)}
                                                                className={errors[i] ? "input error" : "input"}
                                                            />

                                                            <span className="date-separator">to</span>

                                                            <input
                                                                type="date"
                                                                value={item.value?.end || ""}
                                                                min={item.value?.start || ""}
                                                                onChange={(e) => handleDateChange(i, "end", e.target.value)}
                                                                className={errors[i] ? "input error" : "input"}
                                                            />

                                                        </div>
                                                    )}

                                                    {item.isExtra && errors[i] && (
                                                        <div className="error-text">{errors[i]}</div>
                                                    )}

                                                </div>
                                            )}
                                        </Draggable>
                                    ))}

                                    {provided.placeholder}

                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                )}

                {!loading && (
                    <button disabled={btnloading} onClick={saveDateJob}>
                        {
                            btnloading
                                ? "Saving..."
                                : "Save Job"
                        }
                    </button>
                )}

            </div>
        </>
    );
}