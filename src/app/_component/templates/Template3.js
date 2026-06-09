import moment from "moment";

export default function Template3({
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

            <div className="template3-wrapper">

                {/* RIGHT CONTENT */}

                <main className="template3-content">

                    <section>

                        <h3>
                            CAREER OBJECTIVE
                        </h3>

                        <p>
                            {
                                formData.customObjective ||
                                formData.careerObjective
                            }
                        </p>

                    </section>

                    <section>

                        <h3>
                            ACADEMIC QUALIFICATION
                        </h3>

                        <table className="resume-table">

                            <thead>

                                <tr>

                                    <th>Exam</th>
                                    <th>Board</th>
                                    <th>Year</th>
                                    <th>%</th>
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

                    </section>


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

                                <section>

                                    <h3>
                                        PROFESSIONAL QUALIFICATION
                                    </h3>

                                    <table className="resume-table">

                                        <thead>

                                            <tr>

                                                <th>Exam</th>
                                                <th>Institute</th>
                                                <th>Year</th>
                                                <th>%</th>
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

                                </section>

                            </>
                    }


                    {
                        workExperience[0] == "" ?
                            <>
                            </>
                            :
                            <>
                                <section>

                                    <h3>
                                        WORK EXPERIENCE
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

                                </section>
                            </>
                    }



                    <section>

                        <h3>
                            DECLARATION
                        </h3>

                        <p>

                            I hereby declare that all
                            information mentioned above
                            is true and correct to the
                            best of my knowledge.

                        </p>

                    </section>

                    <div className="template3-signature">

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

                </main>

                {/* LEFT SIDEBAR */}

                <aside className="template3-sidebar">

                    {
                        formData.photo && (
                            <img
                                src={formData.photo}
                                alt="Profile"
                                className="template3-photo"
                            />
                        )
                    }

                    <h2 className="template3-name">
                        {formData.name}
                    </h2>

                    <div className="template3-block">

                        <h4>CONTACT</h4>

                        <p>{formData.mobile}</p>

                        <p>{formData.email}</p>

                        <p>{formData.address}</p>

                    </div>

                    <div className="template3-block">

                        <h4>PERSONAL INFO</h4>

                        <p>
                            Father Name : {" " + formData.fatherName}
                        </p>

                        <p>
                            Mother Name : {" " + formData.motherName}
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
                            Marital :
                            {" " + formData.maritalStatus}
                        </p>

                    </div>

                    <div className="template3-block">

                        <h4>LANGUAGES</h4>

                        <p>
                            {formData.languageKnown}
                        </p>

                    </div>

                    <div className="template3-block">

                        <h4>HOBBIES</h4>

                        <p>
                            {formData.hobbies}
                        </p>

                    </div>

                </aside>



            </div>
        </>

    );

}