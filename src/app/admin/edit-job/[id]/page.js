"use client";

import MultipleAutoCompleteSearch from "@/app/_component/MultipleAutoCompleteSearch";
import SingleAutoCompleteSearch from "@/app/_component/SingleAutoCompleteSearch";

import dynamic from "next/dynamic";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { toast } from "react-hot-toast";

import {
    DragDropContext,
    Droppable,
    Draggable
} from "@hello-pangea/dnd";

const Editor = dynamic(() => import("@/app/_component/Editor"), {
    ssr: false
});

export default function Page() {

    const router = useRouter();
    const params = useParams();

    const { id } = params;

    const [field, setField] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const [btnloading, setBtnLoading] = useState(false);

    // ================= FETCH SINGLE JOB =================
    useEffect(() => {

        const fetchJob = async () => {

            try {

                setLoading(true);

                const res = await fetch("/api/job", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: id, details: true })
                });

                const data = await res.json();

                if (data.success) {
                    setField(data.data.fields);
                }

            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchJob();
        }

    }, [id]);

    // ================= CHANGE =================
    const handleChange = (index, value) => {

        const updated = [...field];

        updated[index].value = value;

        setField(updated);

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

    // ================= MULTI SELECT =================
    const setvaluemultiplelist = (selected, index) => {

        const updated = [...field];

        updated[index].value = selected;

        setField(updated);

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

    // ================= DATE CHANGE =================
    const handleDateChange = (index, key, value) => {

        const updated = [...field];

        updated[index].value = {
            ...updated[index].value,
            [key]: value
        };

        setField(updated);

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

    // ================= ADD EXTRA FIELD =================
    const addExtraField = (index) => {

        const newField = {
            fieldName: "Extra Field",
            fieldType: "texteditor",
            value: "",
            isMandotary: true,
            icon: "📝",
            isExtra: true
        };

        const updated = [...field];

        updated.splice(index + 1, 0, newField);

        setField(updated);
    };

    // ================= REMOVE FIELD =================
    const removeField = (index) => {

        const updated = [...field];

        updated.splice(index, 1);

        setField(updated);

        setErrors(prev => {

            const newErrors = { ...prev };

            delete newErrors[index];

            return newErrors;
        });
    };

    // ================= RENAME FIELD =================
    const renameField = (index, name) => {

        const updated = [...field];

        updated[index].fieldName = name;

        setField(updated);

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

    // ================= SINGLE VALIDATION =================
    const validateSingleField = (f) => {

        // EXTRA FIELD VALIDATION
        if (f.isExtra) {

            if (!f.fieldName || f.fieldName.trim() === "") {
                return "Field name is required";
            }

            if (
                !f.value ||
                f.value.replace(/<[^>]*>/g, "").trim() === ""
            ) {
                return `${f.fieldName || "Field"} is required`;
            }
        }

        // NORMAL VALIDATION
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

            if (
                new Date(f.value.start) >
                new Date(f.value.end)
            ) {
                return "End date must be after start date";
            }
        }

        if (f.fieldType === "texteditor") {

            if (
                !f.value ||
                f.value.replace(/<[^>]*>/g, "").trim() === ""
            ) {
                return `${f.fieldName} is required`;
            }
        }

        return "";
    };

    // ================= VALIDATE ALL =================
    const validateFields = () => {

        let err = {};

        field.forEach((f, i) => {

            const errorMsg = validateSingleField(f);

            if (errorMsg && errorMsg !== "") {
                err[i] = errorMsg;
            }

        });

        return err;
    };

    // ================= UPDATE JOB =================
    const updateJob = async () => {
        const validationErrors = validateFields();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            toast.error("Please fix all errors");
            return;
        }
        try {
            setBtnLoading(true);
            let titlename = ''
            for (let f of field) {
                if (f.fieldName == "Job Advertisement Title") {
                    titlename = f.value
                }
            }
            const res = await fetch("/api/job", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: id, name: titlename, fields: field, edit: true })
            });
            const data = await res.json();
            if (data.success) {
                toast.success(data.message);
                setTimeout(() => {
                    router.push("/admin/categories");
                }, 1000);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        } finally {
            setBtnLoading(false);
        }
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

                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >

                                    {field.map((item, i) => (

                                        <Draggable
                                            key={i}
                                            draggableId={String(i)}
                                            index={i}
                                        >

                                            {(provided) => (

                                                <div
                                                    className="field-box"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                >

                                                    {/* HEADER */}
                                                    <div className="field-header">

                                                        {/* DRAG */}
                                                        <span
                                                            {...provided.dragHandleProps}
                                                            className="drag-handle"
                                                        >
                                                            ☰
                                                        </span>

                                                        {/* TITLE */}
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

                                                            <h3>
                                                                {item.icon} {item.fieldName}

                                                                {item.isMandotary && (
                                                                    <span className="required-star">*</span>
                                                                )}
                                                            </h3>

                                                        )}

                                                        {/* ACTION */}
                                                        <div className="field-actions">

                                                            <button
                                                                type="button"
                                                                onClick={() => addExtraField(i)}
                                                            >
                                                                +
                                                            </button>

                                                            {item.isExtra && (

                                                                <button
                                                                    type="button"
                                                                    className="dlt-ext"
                                                                    onClick={() => removeField(i)}
                                                                >
                                                                    x
                                                                </button>

                                                            )}

                                                        </div>

                                                    </div>

                                                    {/* TEXT */}
                                                    {item.fieldType === "text" && (

                                                        <input
                                                            type="text"
                                                            value={item.value}
                                                            placeholder={item.placeholder}
                                                            onChange={(e) =>
                                                                handleChange(i, e.target.value)
                                                            }
                                                            className={errors[i] ? "input error" : "input"}
                                                        />

                                                    )}

                                                    {/* SINGLE */}
                                                    {item.fieldType === "singleselect" && (

                                                        <SingleAutoCompleteSearch
                                                            list={item.selectvalue}
                                                            value={item.value}
                                                            setvaluelist={(val) =>
                                                                handleChange(i, val)
                                                            }
                                                            error={!!errors[i]}
                                                        />

                                                    )}

                                                    {/* MULTI */}
                                                    {item.fieldType === "multiselect" && (

                                                        <MultipleAutoCompleteSearch
                                                            list={item.selectvalue}
                                                            value={item.value}
                                                            setvaluemultiplelist={(val) =>
                                                                setvaluemultiplelist(val, i)
                                                            }
                                                            error={!!errors[i]}
                                                        />

                                                    )}

                                                    {/* EDITOR */}
                                                    {item.fieldType === "texteditor" && (

                                                        <Editor
                                                            value={item.value}
                                                            onChange={(data) =>
                                                                handleChange(i, data)
                                                            }
                                                            error={errors[i]}
                                                        />

                                                    )}

                                                    {/* DATE RANGE */}
                                                    {item.fieldType === "daterange" && (

                                                        <div className="date-range">

                                                            <input
                                                                type="date"
                                                                value={item.value?.start || ""}
                                                                max={item.value?.end || ""}
                                                                onChange={(e) =>
                                                                    handleDateChange(
                                                                        i,
                                                                        "start",
                                                                        e.target.value
                                                                    )
                                                                }
                                                                className={errors[i] ? "input error" : "input"}
                                                            />

                                                            <span className="date-separator">
                                                                to
                                                            </span>

                                                            <input
                                                                type="date"
                                                                value={item.value?.end || ""}
                                                                min={item.value?.start || ""}
                                                                onChange={(e) =>
                                                                    handleDateChange(
                                                                        i,
                                                                        "end",
                                                                        e.target.value
                                                                    )
                                                                }
                                                                className={errors[i] ? "input error" : "input"}
                                                            />

                                                        </div>

                                                    )}

                                                    {/* ERROR */}
                                                    {errors[i] && (
                                                        <div className="error-text">
                                                            {errors[i]}
                                                        </div>
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

                    <button
                        onClick={updateJob}
                        disabled={btnloading}
                    >
                        {
                            btnloading
                                ? "Updating..."
                                : "Update Job"
                        }
                    </button>

                )}

            </div>
        </>

    );
}