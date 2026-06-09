"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import BiodataPreview from "./BiodataPreview";

import template1 from "../../../public/images/template1.jpg";
import template2 from "../../../public/images/template2.jpg";
import template3 from "../../../public/images/template3.jpg";
import Image from "next/image";

export default function BiodataMaker() {

    const resumeRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        mobile: "",
        email: "",
        dob: "",
        fatherName: "",
        motherName: "",
        nationality: "",
        gender: "",
        maritalStatus: "",
        languageKnown: "",
        hobbies: "",
        zip: "",
        careerObjective: "Secure a responsible career opportunity to fully utilize my talent and skills to grow, while making a significant contribution to the success of the company.",
        customObjective: "",
        photo: null,
    });

    const [academic, setAcademic] = useState([
        {
            exam: "",
            board: "",
            passingYear: "",
            marks: "",
            division: ""
        }
    ]);

    const [professional, setProfessional] = useState([
        {
            exam: "",
            board: "",
            passingYear: "",
            marks: "",
            division: ""
        }
    ]);


    const [workExperience, setWorkExperience] = useState([""]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    };

    const addAcademic = () => {

        setAcademic([
            ...academic,
            {
                exam: "",
                board: "",
                passingYear: "",
                marks: "",
                division: ""
            }
        ]);

    };

    const addProfessional = () => {

        setProfessional([
            ...professional,
            {
                exam: "",
                board: "",
                passingYear: "",
                marks: "",
                division: ""
            }
        ]);

    };

    const addWorkExperience = () => {

        setWorkExperience([
            ...workExperience,
            ""
        ]);

    };


    const [careerObjectiveArray, setCareerObjectiveArray] = useState([
        { value: 'Secure a responsible career opportunity to fully utilize my talent and skills to grow, while making a significant contribution to the success of the company.' },
        { value: 'Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization.' },
        { value: 'Urge for a position in an aggressively growing organization where my technical & functional expertise can be effectively utilized and possess good analytical abilities, quick grasping power, zeal for learning new things and excellent communication skills.' },
        { value: 'To seek a good & responsible job in professionally managed organization where in my conceptual and functional skills are effectively utilized in a way that contributes to the organization growth coupled with personal growth within the organization.' },
        { value: 'To make a good position in a reputed company and work enthusiastically in team which provides steady career growth along with job satisfaction, challenges and give value contribution in the success and to build a challenging career with honesty and loyalty by translating my experience knowledge ,skills and abilities into value for an organization.' },
        { value: 'To contribute my best to the organization irrespective of the kind of project undertaken and to utilize my skills and to perform the job to the best of my ability with the zeal and willing to learn.' },
    ])


    const handleDelete = (
        index,
        state,
        setState
    ) => {

        if (state.length === 1) return;

        setState(
            state.filter((_, i) => i !== index)
        );

    };


    const [template, setTemplate] = useState("0");
    const [error, setError] = useState(false)
    const [submitbutton, setSetSubmitButton] = useState(true)


    const tempset = (val) => {
        setError(false)
        setSetSubmitButton(true)
        if (
            formData.name == "" ||
            formData.address == "" ||
            formData.mobile == "" ||
            formData.email == "" ||
            formData.dob == "" ||
            formData.fatherName == "" ||
            formData.motherName == "" ||
            formData.nationality == "" ||
            formData.gender == "" ||
            formData.maritalStatus == "" ||
            formData.languageKnown == "" ||
            formData.hobbies == "" ||
            formData.zip == "" ||
            formData.photo == null ||
            academic[0].exam == "" ||
            academic[0].board == "" ||
            academic[0].passingYear == "" ||
            academic[0].marks == "" ||
            academic[0].division == ""
        ) {
            setError(true)
            setSetSubmitButton(true)
        } else {
            setTemplate(val)
            setSetSubmitButton(false)
        }
    }



    const handleAcademicChange = (
        index,
        field,
        value
    ) => {

        const updated = [...academic];

        updated[index][field] = value;

        setAcademic(updated);

    };

    const handleProfessionalChange = (
        index,
        field,
        value
    ) => {

        const updated = [...professional];

        updated[index][field] = value;

        setProfessional(updated);

    };

    const handleWorkExperienceChange = (
        index,
        value
    ) => {

        const updated = [...workExperience];

        updated[index] = value;

        setWorkExperience(updated);

    };

    const downloadPDF = async () => {

        const element =
            document.getElementById(
                "resume-preview"
            );

        const canvas =
            await html2canvas(
                element,
                {
                    scale: 2,
                    useCORS: true
                }
            );

        const imgData =
            canvas.toDataURL(
                "image/png"
            );

        const pdf =
            new jsPDF(
                "p",
                "mm",
                "a4"
            );

        const pdfWidth = 210;

        const pageHeight = 297;

        const imgWidth = 210;

        const imgHeight =
            (canvas.height *
                imgWidth) /
            canvas.width;

        let heightLeft =
            imgHeight;

        let position = 0;

        pdf.addImage(
            imgData,
            "PNG",
            0,
            position,
            imgWidth,
            imgHeight
        );

        heightLeft -=
            pageHeight;

        while (
            heightLeft > 0
        ) {

            position =
                heightLeft -
                imgHeight;

            pdf.addPage();

            pdf.addImage(
                imgData,
                "PNG",
                0,
                position,
                imgWidth,
                imgHeight
            );

            heightLeft -=
                pageHeight;

        }

        pdf.save(
            `${formData.name || "resume"}.pdf`
        );

    };


    return (
        <>
            <div className="resume-form-card">
                {/* Personal Details */}

                <div className="resume-section">

                    <h4 className="resume-section-title">
                        Personal Information
                    </h4>
                    <div className="mb-2">
                        <label>Full Name <span className="astrist"> *</span></label>
                        <input
                            className={`form-control ${error && formData.name == "" ? "error-border" : ""}`}
                            placeholder=""
                            name="name"
                            onChange={handleChange}
                        />
                        {
                            error && formData.name == "" ? <span className="error-text">Full Name Required</span> : <></>
                        }
                    </div>

                    <div className="mb-2">
                        <label>Full Address <span className="astrist"> *</span></label>
                        <textarea
                            className={`form-control ${error && formData.address == "" ? "error-border" : ""}`}
                            placeholder=""
                            name="address"
                            rows="4"
                            onChange={handleChange}
                        />
                        {
                            error && formData.address == "" ? <span className="error-text">Full Address Required</span> : <></>
                        }
                    </div>

                    <div className="mb-2">
                        <label>Mobile Number <span className="astrist"> *</span></label>
                        <input
                            className={`form-control ${error && formData.mobile == "" ? "error-border" : ""}`}
                            placeholder=""
                            name="mobile"
                            onChange={handleChange}
                        />
                        {
                            error && formData.mobile == "" ? <span className="error-text">Mobile Number Required</span> : <></>
                        }
                    </div>
                    <div className="mb-2">
                        <label>Email Address <span className="astrist"> *</span></label>
                        <input
                            className={`form-control ${error && formData.email == "" ? "error-border" : ""}`}
                            placeholder=""
                            name="email"
                            onChange={handleChange}
                        />
                        {
                            error && formData.email == "" ? <span className="error-text">Email Address Required</span> : <></>
                        }
                    </div>
                    <div className="mb-2">
                        <label>Date of Birth <span className="astrist"> *</span></label>
                        <input
                            type="date"
                            className={`form-control ${error && formData.dob == "" ? "error-border" : ""}`}
                            name="dob"
                            onChange={handleChange}
                        />
                        {
                            error && formData.dob == "" ? <span className="error-text">Date of Birth Required</span> : <></>
                        }
                    </div>
                    <div className="mb-2">
                        <label>Father Name <span className="astrist"> *</span></label>
                        <input
                            className={`form-control ${error && formData.fatherName == "" ? "error-border" : ""}`}
                            placeholder=""
                            name="fatherName"
                            onChange={handleChange}
                        />
                        {
                            error && formData.fatherName == "" ? <span className="error-text">Father Name Required</span> : <></>
                        }
                    </div>
                    <div className="mb-2">
                        <label>Mother Name <span className="astrist"> *</span></label>
                        <input
                            className={`form-control ${error && formData.motherName == "" ? "error-border" : ""}`}
                            placeholder=""
                            name="motherName"
                            onChange={handleChange}
                        />
                        {
                            error && formData.motherName == "" ? <span className="error-text">Mother Name Required</span> : <></>
                        }
                    </div>
                    <div className="mb-2">
                        <label>Nationality <span className="astrist"> *</span></label>
                        <input
                            className={`form-control ${error && formData.nationality == "" ? "error-border" : ""}`}
                            placeholder=""
                            name="nationality"
                            onChange={handleChange}
                        />
                        {
                            error && formData.nationality == "" ? <span className="error-text">Nationality Required</span> : <></>
                        }
                    </div>
                    <div className="mb-2">
                        <label>Gender <span className="astrist"> *</span></label>
                        <select
                            className={`form-select ${error && formData.gender == "" ? "error-border" : ""}`}
                            name="gender"
                            onChange={handleChange}
                        >
                            <option value="">
                                Select
                            </option>
                            <option value="Male">
                                Male
                            </option>
                            <option value="Female">
                                Female
                            </option>
                        </select>
                        {
                            error && formData.gender == "" ? <span className="error-text">Gender Required</span> : <></>
                        }
                    </div>
                    <div className="mb-2">
                        <label>Marital Status <span className="astrist"> *</span></label>
                        <select
                            className={`form-select ${error && formData.maritalStatus == "" ? "error-border" : ""}`}
                            name="maritalStatus"
                            onChange={handleChange}
                        >
                            <option value="">
                                Select
                            </option>
                            <option value="Married">
                                Married
                            </option>
                            <option value="Unmarried">
                                Unmarried
                            </option>
                        </select>
                        {
                            error && formData.maritalStatus == "" ? <span className="error-text">Marital Status Required</span> : <></>
                        }
                    </div>
                    <div className="mb-2">
                        <label>Language Known <span className="astrist"> *</span></label>
                        <input
                            className={`form-control ${error && formData.languageKnown == "" ? "error-border" : ""}`}
                            placeholder=""
                            name="languageKnown"
                            onChange={handleChange}
                        />
                        {
                            error && formData.languageKnown == "" ? <span className="error-text">Language Known Required</span> : <></>
                        }
                    </div>
                    <div className="mb-2">
                        <label>Hobbies <span className="astrist"> *</span></label>
                        <input
                            className={`form-control ${error && formData.hobbies == "" ? "error-border" : ""}`}
                            placeholder=""
                            name="hobbies"
                            onChange={handleChange}
                        />
                        {
                            error && formData.hobbies == "" ? <span className="error-text">Hobbies Required</span> : <></>
                        }
                    </div>
                    <div className="mb-2">
                        <label>Zip Code <span className="astrist"> *</span></label>
                        <input
                            className={`form-control ${error && formData.zip == "" ? "error-border" : ""}`}
                            placeholder=""
                            name="zip"
                            onChange={handleChange}
                        />
                        {
                            error && formData.zip == "" ? <span className="error-text">Zip Code Required</span> : <></>
                        }
                    </div>

                </div>

                {/* Career Objective */}

                <div className="resume-section mt-3">

                    <h4 className="resume-section-title">
                        Career Objective <span style={{ color: 'red' }}> *</span>
                    </h4>


                    {
                        careerObjectiveArray.map((item, i) => (
                            <div key={i} className="mb-2">

                                <input
                                    type="radio"
                                    checked={item.value == formData.careerObjective && formData.customObjective == ""}
                                    className="from-control"
                                    name="careerObjective"
                                    value={item.value}
                                    onChange={handleChange}
                                />

                                <span className="ms-2">
                                    {item.value}
                                </span>
                            </div>
                        ))
                    }
                    <div><b>Or</b></div>
                    <label>Write Your Own Objective</label>
                    <textarea
                        className="form-control"
                        placeholder=""
                        name="customObjective"
                        rows="4"
                        onChange={handleChange}
                    />

                    {
                        error && (formData.customObjective || formData.careerObjective) == "" ? <span className="error-text">Career Objective Required</span> : <></>
                    }

                </div>

                {/* Academic Qualification */}

                <div className="resume-section add-more mt-3">

                    <h4 className="resume-section-title">
                        Academic Qualification <span style={{ color: 'red' }}> *</span>
                    </h4>

                    {
                        academic.map((item, index) => (

                            <div
                                key={index}
                                className="row mb-2"
                            >
                                <div className="col-md-12 div-numb">
                                    Academic Qualification No. {index+1}:
                                </div>

                                <div className="col-md-2">
                                    <input
                                        className={`form-control ${error && item.exam == "" ? "error-border" : ""}`}
                                        placeholder="Exam"
                                        value={item.exam}
                                        onChange={(e) =>
                                            handleAcademicChange(
                                                index,
                                                "exam",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-3">
                                    <input
                                        className={`form-control ${error && item.board == "" ? "error-border" : ""}`}
                                        placeholder="Board / University"
                                        value={item.board}
                                        onChange={(e) =>
                                            handleAcademicChange(
                                                index,
                                                "board",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-2">
                                    <input
                                        className={`form-control ${error && item.passingYear == "" ? "error-border" : ""}`}
                                        placeholder="Year"
                                        value={item.passingYear}
                                        onChange={(e) =>
                                            handleAcademicChange(
                                                index,
                                                "passingYear",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-2">
                                    <input
                                        className={`form-control ${error && item.marks == "" ? "error-border" : ""}`}
                                        placeholder="%"
                                        value={item.marks}
                                        onChange={(e) =>
                                            handleAcademicChange(
                                                index,
                                                "marks",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-3">
                                    <select
                                        className={`form-select ${error && item.division == "" ? "error-border" : ""}`}
                                        value={item.division}
                                        onChange={(e) =>
                                            handleAcademicChange(
                                                index,
                                                "division",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">
                                            Division
                                        </option>
                                        <option value="1st">
                                            1st
                                        </option>
                                        <option value="2nd">
                                            2nd
                                        </option>
                                        <option value="3rd">
                                            3rd
                                        </option>
                                    </select>
                                </div>

                                <div className="col-md-12 mt-2">
                                    {
                                        error &&
                                            (item.exam == "" ||
                                                item.board == "" ||
                                                item.passingYear == "" ||
                                                item.marks == "" ||
                                                item.division == "")
                                            ?
                                            <span className="error-text">Academic Qualification Required</span> : <></>
                                    }
                                </div>

                                <div className="col-md-12 mt-2">

                                    {
                                        index !== 0 && academic.length > 1 && (
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                    handleDelete(
                                                        index,
                                                        academic,
                                                        setAcademic
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        )
                                    }

                                </div>

                            </div>

                        ))
                    }

                    <button
                        className="btn btn-success"
                        onClick={addAcademic}
                    >
                       + Add New
                    </button>

                </div>

                {/* Professional Qualification */}

                <div className="resume-section add-more mt-3">

                    <h4 className="resume-section-title">
                        Professional Qualification
                    </h4>

                    {
                        professional.map((item, index) => (

                            <div
                                key={index}
                                className="row mb-2"
                            >
                                <div className="col-md-12 div-numb">
                                    Professional Qualification No. {index+1}:
                                </div>

                                <div className="col-md-2">
                                    <input
                                        className="form-control"
                                        placeholder="Exam"
                                        value={item.exam}
                                        onChange={(e) =>
                                            handleProfessionalChange(
                                                index,
                                                "exam",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        placeholder="Board / University"
                                        value={item.board}
                                        onChange={(e) =>
                                            handleProfessionalChange(
                                                index,
                                                "board",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-2">
                                    <input
                                        className="form-control"
                                        placeholder="Year"
                                        value={item.passingYear}
                                        onChange={(e) =>
                                            handleProfessionalChange(
                                                index,
                                                "passingYear",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-2">
                                    <input
                                        className="form-control"
                                        placeholder="%"
                                        value={item.marks}
                                        onChange={(e) =>
                                            handleProfessionalChange(
                                                index,
                                                "marks",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-3">
                                    <select
                                        className="form-select"
                                        value={item.division}
                                        onChange={(e) =>
                                            handleProfessionalChange(
                                                index,
                                                "division",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">
                                            Division
                                        </option>
                                        <option value="1st">
                                            1st
                                        </option>
                                        <option value="2nd">
                                            2nd
                                        </option>
                                        <option value="3rd">
                                            3rd
                                        </option>
                                    </select>
                                </div>

                                <div className="col-md-12 mt-2">

                                    {
                                        index !== 0 && professional.length > 1 && (
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                    handleDelete(
                                                        index,
                                                        professional,
                                                        setProfessional
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        )
                                    }

                                </div>

                            </div>

                        ))
                    }

                    <button
                        className="btn btn-success"
                        onClick={addProfessional}
                    >
                        + Add New
                    </button>

                </div>

                {/* Work Experience */}

                <div className="resume-section add-more mt-3">

                    <h4 className="resume-section-title">
                        Work Experience
                    </h4>

                    {
                        workExperience.map((item, index) => (
                            <div
                                key={index}
                                className="row mb-2"
                            >
                                <div className="col-md-12 div-numb">
                                    Work Experience No. {index+1}:
                                </div>

                                <div className="col-md-12">
                                    <input
                                        className="form-control"
                                        placeholder="Work Experience"
                                        value={item}
                                        onChange={(e) =>
                                            handleWorkExperienceChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-12 mt-2">

                                    {
                                        index !== 0 && workExperience.length > 1 && (
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                    handleDelete(
                                                        index,
                                                        workExperience,
                                                        setWorkExperience
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        )
                                    }

                                </div>
                            </div>

                        ))
                    }

                    <button
                        className="btn btn-success"
                        onClick={addWorkExperience}
                    >
                        + Add New
                    </button>

                </div>

                {/* Photo Upload */}

                <div className="resume-section mt-3">

                    <h4 className="resume-section-title">
                        Passport Photo <span style={{ color: 'red' }}> *</span>
                    </h4>

                    <input
                        type="file"
                        accept="image/*"
                        className={`form-control ${error && formData.photo == null ? "error-border" : ""}`}
                        onChange={(e) => {

                            const file =
                                e.target.files[0];

                            if (file) {

                                setFormData(prev => ({
                                    ...prev,
                                    photo:
                                        URL.createObjectURL(file)
                                }));

                            }

                        }}
                    />

                    {
                        error && formData.photo == null ? <span className="error-text">Photo Required</span> : <></>
                    }

                </div>


                {/* Choose Resume Format */}
                <div className="resume-section mt-3">
                    <div className="template-selector">

                        <h4>
                            Choose Biodata Format
                        </h4>

                        <div className="template-grid">

                            {[{ value: "1", url: template1 }, { value: "2", url: template2 }, { value: "3", url: template3 }].map((item, i) => (

                                <div className="temp-div cp" key={i} onClick={() => tempset(String(item.value))}>

                                    <Image
                                        className="temp-img"
                                        src={item.url}
                                        alt="logo"
                                        width={274}
                                        height={360}
                                        priority
                                    />

                                    <button

                                        className={`template-btn ${template === String(item.value)
                                            ? "active"
                                            : ""
                                            }`}

                                    >

                                        Biodata {item.value}

                                    </button>
                                </div>

                            ))}

                        </div>

                    </div>
                </div>


                <div ref={resumeRef} id="resume-preview" className="resume-section mt-3">
                    <BiodataPreview
                        template={template}
                        formData={formData}
                        academic={academic}
                        professional={professional}
                        workExperience={workExperience}
                    />
                </div>

                <button
                    className="biodata-btn"
                    disabled={submitbutton}
                    onClick={downloadPDF}
                >
                    Generate Biodata
                </button>
            </div>

        </>

    );

}