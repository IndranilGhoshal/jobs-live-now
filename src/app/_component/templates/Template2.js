import moment from "moment";

export default function Template2({
    formData,
    academic,
    professional,
    workExperience
}) {

    return (
        <>
            <div className="resume-header-template-3">
                <h3>Biodata</h3>
            </div>
            <div className="resume-template-2">

                {/* Header */}

                <div className="resume-header-template-2">

                    <div>

                        <h1>
                            {formData.name}
                        </h1>

                        <p>
                            {formData.address}
                        </p>

                        <p>
                            Mobile :
                            {" " + formData.mobile}
                        </p>

                        <p>
                            Email :
                            {" " + formData.email}
                        </p>

                    </div>

                    {
                        formData.photo && (
                            <img
                                src={formData.photo}
                                alt="photo"
                                className="resume-photo"
                            />
                        )
                    }

                </div>

                {/* Objective */}

                <div className="resume-section-box">

                    <h3>
                        Career Objective
                    </h3>

                    <p>

                        {
                            formData.customObjective ||
                            formData.careerObjective
                        }

                    </p>

                </div>

                {/* Academic */}

                <div className="resume-section-box">

                    <h3>
                        Academic Qualification
                    </h3>

                    <table className="resume-table">

                        <thead>

                            <tr>

                                <th>Exam</th>
                                <th>Board</th>
                                <th>Year</th>
                                <th>Marks</th>
                                <th>Division</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                academic.map(
                                    (
                                        item,
                                        index
                                    ) => (

                                        <tr key={index}>

                                            <td>
                                                {item.exam}
                                            </td>

                                            <td>
                                                {item.board}
                                            </td>

                                            <td>
                                                {item.passingYear}
                                            </td>

                                            <td>
                                                {item.marks}
                                            </td>

                                            <td>
                                                {item.division}
                                            </td>

                                        </tr>

                                    )
                                )
                            }

                        </tbody>

                    </table>

                </div>

                {/* Professional */}

                {
                    professional[0].exam == "" ||
                        professional[0].board == "" ||
                        professional[0].passingYear == "" ||
                        professional[0].marks == "" ||
                        professional[0].division == "" ?
                        <>
                        </>
                        :
                        <>
                            <div className="resume-section-box">

                                <h3>
                                    Professional Qualification
                                </h3>

                                <table className="resume-table">

                                    <thead>

                                        <tr>

                                            <th>Exam</th>
                                            <th>Board</th>
                                            <th>Year</th>
                                            <th>Marks</th>
                                            <th>Division</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {
                                            professional.map(
                                                (
                                                    item,
                                                    index
                                                ) => (

                                                    <tr key={index}>

                                                        <td>
                                                            {item.exam}
                                                        </td>

                                                        <td>
                                                            {item.board}
                                                        </td>

                                                        <td>
                                                            {item.passingYear}
                                                        </td>

                                                        <td>
                                                            {item.marks}
                                                        </td>

                                                        <td>
                                                            {item.division}
                                                        </td>

                                                    </tr>

                                                )
                                            )
                                        }

                                    </tbody>

                                </table>

                            </div>
                        </>
                }



                {/* Work Experience */}

                {
                    workExperience[0] == "" ?
                        <>
                        </>
                        :
                        <>
                            <div className="resume-section-box">

                                <h3>
                                    Work Experience
                                </h3>

                                <ul>

                                    {
                                        workExperience.map(
                                            (
                                                item,
                                                index
                                            ) => (

                                                <li key={index}>
                                                    {item}
                                                </li>

                                            )
                                        )
                                    }

                                </ul>

                            </div>
                        </>
                }

                {/* Personal Details */}

                <div className="resume-section-box">

                    <h3>
                        Personal Details
                    </h3>

                    <p>
                        Father Name :
                        {" " + formData.fatherName}
                    </p>

                    <p>
                        Mother Name :
                        {" " + formData.motherName}
                    </p>

                    <p>
                        Date of Birth :
                        {" " + moment(formData.dob).format("DD-MM-YYYY")}
                    </p>

                    <p>
                        Gender :
                        {" " + formData.gender}
                    </p>

                    <p>
                        Nationality :
                        {" " + formData.nationality}
                    </p>

                    <p>
                        Marital Status :
                        {" " + formData.maritalStatus}
                    </p>

                    <p>
                        Languages :
                        {" " + formData.languageKnown}
                    </p>

                    <p>
                        Hobbies :
                        {" " + formData.hobbies}
                    </p>

                </div>

                {/* Declaration */}

                <div className="resume-section-box">

                    <h3>
                        Declaration
                    </h3>

                    <p>

                        I hereby declare that all
                        the information furnished
                        above is true and correct
                        to the best of my knowledge.

                    </p>

                </div>

                {/* Footer */}

                <div className="resume-footer">

                    <div>
                        <div>
                            Date:
                        </div>
                        <div>
                            Place:
                        </div>
                    </div>

                    <div>
                        ({formData.name})
                    </div>

                </div>

            </div>
        </>
    );

}