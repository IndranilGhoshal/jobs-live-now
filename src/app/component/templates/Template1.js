import moment from "moment";

export default function Template1({
    formData,
    academic,
    professional,
    workExperience
}) {

    return (
        <>
            <div className="resume-header-template-1">
                <h3>Biodata</h3>
            </div>

            <div className="resume-template-1">



                {/* Sidebar */}

                <div className="resume-sidebar">

                    {
                        formData.photo && (
                            <img
                                src={formData.photo}
                                alt="photo"
                                className="resume-photo"
                            />
                        )
                    }

                    <h3 className="text-center">
                        {formData.name}
                    </h3>

                    <div className="sidebar-section">

                        <h4>Contact</h4>

                        <p>{formData.mobile}</p>

                        <p>{formData.email}</p>

                    </div>

                    <div className="sidebar-section">

                        <h4>Personal Info</h4>

                        <p>
                            Father Name : {" " + formData.fatherName}
                        </p>

                        <p>
                            Mother Name : {" " + formData.motherName}
                        </p>

                        <p>
                            Date of Birth : {" " + moment(formData.dob).format("DD-MM-YYYY")}
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

                    <div className="sidebar-section">

                        <h4>Address</h4>

                        <p>
                            {formData.address}, Pin - {formData.zip}
                        </p>

                    </div>

                </div>

                {/* Content */}

                <div className="resume-content">

                    <div className="resume-block">

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

                    <div className="resume-block">

                        <h3>
                            Academic Qualification
                        </h3>

                        <table className="table table-bordered">

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
                                        (item, index) => (

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
                                <div className="resume-block">

                                    <h3>
                                        Professional Qualification
                                    </h3>

                                    <table className="table table-bordered">

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
                                                professional.map(
                                                    (item, index) => (

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


                    {
                        workExperience[0] == "" ?
                            <>
                            </>
                            :
                            <>
                                <div className="resume-block">

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

                                                    <li
                                                        key={index}
                                                    >

                                                        {item}

                                                    </li>

                                                )
                                            )
                                        }

                                    </ul>

                                </div>
                            </>
                    }




                    <div>
                        <b>Declaration:</b>
                        <p>Thereby declare that all the statement made in this resume are true, complete and correct to the Knowledge.</p>
                    </div>

                    <div className="dt-ps-btm">
                        <div className="dt-ps">
                            <p>Date:</p>
                            <p>Place:</p>
                        </div>
                        <div className="dt-ps-nm">
                            <p>({formData.name})</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );

}