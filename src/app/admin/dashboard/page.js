

import React from 'react'

export default function Dashboard() {
  
  return (
    <>
      <div className="stats">
        <div className="stat-card">
          <h4>Applied Jobs</h4>
          <p>12</p>
        </div>

        <div className="stat-card">
          <h4>Saved Jobs</h4>
          <p>8</p>
        </div>

        <div className="stat-card">
          <h4>New Jobs</h4>
          <p>25</p>
        </div>
      </div>

      <div className="job-list">
        <h3>Latest Jobs</h3>

        <div className="job-item">
          <span>SSC CHSL 2026</span>
          <button className="apply-btn">Apply</button>
        </div>

        <div className="job-item">
          <span>Railway Group D</span>
          <button className="apply-btn">Apply</button>
        </div>

        <div className="job-item">
          <span>Bank Clerk Recruitment</span>
          <button className="apply-btn">Apply</button>
        </div>

      </div>
    </>
  )
}
