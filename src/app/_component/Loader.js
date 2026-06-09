export default function Loader() {
  return (
    <div className="page-loader">
      <div className="loader-box">
        <div className="loader-ring"></div>

        <h2 className="loader-title">Jobs Live Now</h2>

        <p className="loader-text">Loading Latest Jobs...</p>

        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}