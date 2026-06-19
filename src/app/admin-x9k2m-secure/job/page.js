"use client";
import UsePagination from "@/app/_component/UsePagination";
import { adminpath } from "@/app/utils/common-text";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Page() {

    const router = useRouter();

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // ================= DELETE POPUP STATE =================
    const [deletePopup, setDeletePopup] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    // 🔥 pagination state
    const [limit, setlimit] = useState('10')
    const [page, setPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState("");

    // ================= FETCH API =================
    useEffect(() => {
        fetchJobs(currentPage);
    }, [currentPage]);

    const fetchJobs = async (pageNumber, searchText = search) => {
        try {
            setLoading(true);
            setJobs([])
            const skip = (pageNumber - 1) * limit;
            const res = await fetch("/api/job", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ limit, skip, search: searchText, list: true })
            });

            const data = await res.json();
            if (data.success) {
                let totalPage = Math.ceil(data.listlength / limit);
                setPage(totalPage);
                const formatted = data.data.map((item) => {
                    const titleField = item.fields.find(f => f.fieldName == "Job Advertisement Title");
                    const orgField = item.fields.find(f => f.fieldName == "Organisation Name");
                    const dateField = item.fields.find(f => f.fieldType == "daterange");
                    const pathField = item.slug;
                    return {
                        id: item._id,
                        title: titleField?.value || "-",
                        org: orgField?.value || "-",
                        date: dateField?.value?.end || "-",
                        path: pathField || "-"
                    };
                });

                setJobs(formatted);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        setCurrentPage(1);
        fetchJobs(1, value);
    };

    // ================= PAGINATION =================
    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    // ================= OPEN DELETE POPUP =================
    const openDeletePopup = (id) => {
        setDeleteId(id);
        setDeletePopup(true);
    };

    // ================= CLOSE DELETE POPUP =================
    const closeDeletePopup = () => {
        setDeletePopup(false);
        setDeleteId(null);
    };

    // ================= DELETE FUNCTION =================
    const deleteJob = async () => {
        try {
            setDeleteLoading(true);
            const res = await fetch("/api/job", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: deleteId, status: "2", onstatus: true, })
            });
            const data = await res.json();
            if (data.success) {
                toast.success(data.message);
                fetchJobs(currentPage);
                closeDeletePopup();
            } else {
                toast.error(data.message);
            }

        } catch (err) {

            toast.error("Delete failed");
            console.log(err);

        } finally {
            setDeleteLoading(false);
        }
    };

    const gotodetailspage = (item) => {
        let path = `/${item.path}`;
        window.open(path, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="job-page job-lst">

            {/* HEADER */}
            <div className="job-header">
                <div className="title-wrapper">
                    <div className="title-icon">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>

                    <div>
                        <h2>Job List</h2>
                        <p>Manage all published job posts</p>
                    </div>
                </div>

                <div className="table-header">
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>

                        <input
                            type="text"
                            placeholder="Search by job title or organisation..."
                            value={search}
                            onChange={handleSearch}
                            className="search-input"
                        />
                    </div>
                </div>

                <div className="fab-container">
                    <span className="fab-text">Add Job</span>
                    <button
                        className="fab-btn"
                        onClick={() => router.push(adminpath + "/add-job")}
                    >
                        <span className="fab-icon">+</span>
                    </button>
                </div>
            </div>

            {/* TABLE */}
            <div className="table-container">

                <table className="job-table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Organisation</th>
                            <th>Last Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="4" className={`job-no-data`}>

                                    {/* 🔥 LOADING ANIMATION */}
                                    <div className="table-loader">

                                        <div className="loader-box">
                                            <div className="loader-circle"></div>

                                            <h3>Loading Jobs...</h3>

                                            <p>Please wait a moment</p>
                                        </div>

                                    </div>

                                </td>
                            </tr>
                        ) : jobs.length > 0 ? (
                            jobs.map((job, index) => (
                                <tr key={index}>
                                    <td data-label="Job Title">
                                        <span data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={job.title}>{job.title}</span>
                                    </td>
                                    <td data-label="Organisation">
                                        <span data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={job.org}>{job.org}</span>
                                    </td>
                                    <td data-label="Last Date"><span>{job.date}</span></td>
                                    <td data-label="Action" className="actions">
                                        <button className="icon-btn icon-view" onClick={() => { gotodetailspage(job) }}>👁</button>

                                        <button
                                            className="icon-btn icon-edit"
                                            onClick={() => router.push(adminpath + `/edit-job/${job.id}`)}
                                        >
                                            ✏️
                                        </button>

                                        <button
                                            className="icon-btn icon-delete"
                                            onClick={() => openDeletePopup(job.id)}
                                        >
                                            🗑
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className={`job-no-data`}>

                                    {/* 🔥 NO DATA ANIMATION */}
                                    <div className="no-data-box">

                                        <div className="no-data-icon">
                                            📂
                                        </div>

                                        <h3>No Jobs Found</h3>

                                        <p>
                                            No job data available right now
                                        </p>

                                    </div>

                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* ================= PAGINATION ================= */}
                {!loading && jobs.length > 0 && <UsePagination handleChangePage={handleChangePage} page={page} currentPage={currentPage} />}

            </div>

            {deletePopup && (
                <div className="popup-overlay dlt-modal">

                    <div className="delete-popup">

                        <h3>Delete Job ?</h3>

                        <p>
                            Are you sure you want to delete this job?
                        </p>

                        <div className="popup-actions">

                            <button
                                className="cancel-btn"
                                onClick={closeDeletePopup}
                            >
                                Cancel
                            </button>

                            <button
                                className="delete-btn"
                                onClick={deleteJob}
                                disabled={deleteLoading}
                            >
                                {
                                    deleteLoading
                                        ? "Deleting..."
                                        : "Delete"
                                }
                            </button>

                        </div>

                    </div>

                </div>
            )}

        </div>

    );
}