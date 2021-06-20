import "../pages/Engineering.css";
const Microgravity = () => {
  return (
    <div className="alpha">
      <div className="title">
        <h1>Microgravity</h1>
      </div>

      <div className="landing">
        <div className="gama">
          <h2>Introduction</h2>
          <p className="para-text">
            The microgravity method, which detects both the lateral and vertical
            variations in the rock density, will have limitation over this site
            in terms of depth and resolution. In addition, the analysis and
            presentation of the results will be in the form of contour plots of
            the residual Bouguer Anomaly and to convert these into cross-section
            they need to be modeled but the solution are not unique, i.e.
            several models for the same anomaly as the cause of the low gravity
            areas are the cumulative effects of both shallow and deeper low
            density areas.
          </p>
        </div>
        <div className="img1">
          <img src="img/services/microgravity.jpg" alt="No image found" />
        </div>
      </div>
    </div>
  );
};
export default Microgravity;
