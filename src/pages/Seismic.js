import "../pages/Engineering.css";
const Seismic = () => {
  return (
    <div className="alpha">
      <div className="title">
        <h1>Seismic Refraction</h1>
      </div>

      <div className="landing">
        <div className="gama">
          <h2>Introduction</h2>
          <p className="para-text">
            Seismic Refraction surveys are used for varoius purposes to map the
            bedrock depth and evaluate rock rippability. Seismic refraction
            measurements are applicable in mapping subsurface conditions for
            various uses including geologic, geotechnical, hydrologic,
            environmental, mineral exploration, petroleum exploration, and
            archaeological investigations. Seismic Refraction investigations are
            commonly used to determine layer thickness and/or the subsurface
            compressional wave velocity of the overburden and underlying bedrock
            or to water table, stratigraphy, lithology, structure, and
            fractures. This inherently shallow technique requires that
            compressional seismic wave velocities increase with depth so wave
            refraction occurs.
            <br />
            Refraction surveys, the predominant seismic method measures seismic
            wave velocities of materials. A source (e.g., sledge hammer, gun
            device, weight, or explosives) is used to create and emit waves into
            the subsurface. These waves travel at material specific velocities,
            are refracted at various interfaces, and eventually are received by
            geophones installed on surface that convert them into an electrical
            signal that is displayed on a seismograph.
          </p>
        </div>
        <div className="img1">
          <img
            id="ert-img"
            src="img/services/seismic.gif"
            alt="No image found"
          />
        </div>
      </div>
    </div>
  );
};
export default Seismic;
