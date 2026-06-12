"use client";
import UsePagination from "@/app/_component/UsePagination";
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
    const [offset, setoffset] = useState('0')

    // ================= FETCH API =================
    useEffect(() => {
        fetchJobs(limit, offset);
    }, [limit, offset]);

    const fetchJobs = async (l, s) => {
        try {
            setLoading(true);
            setJobs([])
            const res = await fetch("/api/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ limit: l, skip: s, list: true })
            });

            const data = await res.json();
            if (data.success) {
                let totalPage = Math.ceil(data.listlength / limit);
                setPage(totalPage);

                // 🔥 IMPORTANT: map API data → table format
                const formatted = data.data.map((item) => {
                    const titleField = item.fields.find(f => f.fieldName == "Job Advertisement Title");
                    const orgField = item.fields.find(f => f.fieldName == "Organisation Name");
                    const categoryField = item.fields.find(f => f.fieldName == "Job Category");
                    const pathField = item.slug;
                    return {
                        id: item._id,
                        title: titleField?.value || "-",
                        org: orgField?.value || "-",
                        category: categoryField?.value?.value || "-",
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

    // ================= PAGINATION =================
    const handleChangePage = (e, val) => {
        let offeset = (val - 1) * limit;
        setoffset(offeset);
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

                // 🔥 REMOVE FROM STATE
                fetchJobs(limit, offset);

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
                <h2>📄 Categories List</h2>

                <div className="fab-container">
                    <span className="fab-text">Add Categories</span>
                    <button
                        className="fab-btn"
                        onClick={() => router.push("/admin/add-categories")}
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
                            <th>Category</th>
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
                                    <td data-label="Category"><span>{job.category}</span></td>
                                    <td data-label="Action" className="actions">
                                        <button className="icon-btn icon-view" onClick={() => { gotodetailspage(job)}}>👁</button>

                                        <button
                                            className="icon-btn icon-edit"
                                            onClick={() => router.push(`/admin/edit-job/${job.id}`)}
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
                {!loading && jobs.length > 0 && <UsePagination handleChangePage={handleChangePage} page={page} />}

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