import "../pages/Engineering.css";
const Ground = () => {
  return (
    <div className="alpha">
      <div className="title">
        <h1>Ground Penetrating Radar</h1>
      </div>

      <div className="landing">
        <div className="gama">
          <h2>Introduction</h2>
          <p className="para-text">
            GPR is an easy-to-deploy geophysical technique that produces
            high-resolution images of the shallow subsurface in a manner
            analogous to reflection seismic. It is usually used as a surface
            technique although borehole radar is used in specialist
            applications. Like many geophysical techniques, GPR can provide very
            useful data if applied in the appropriate context. Hence, any
            sub-surface investigation that requires shallow, high-resolution
            imaging may benefit by GPR survey.
            <br />
            This technique involves a short duration; high frequency
            electromagnetic impulse being transmitted by the radar transducer
            into the subsurface. Whenever a contrast in dielectric properties of
            the subsurface is encountered, some of the transmitted impulse is
            reflected back to the surface, where it is detected by a receiver
            housed in the transducer. The strength of the reflected signal is
            proportional to the magnitude of the contrast in properties.
          </p>
        </div>
        <div className="img1">
          <img src="img/services/ground.jpg" alt="No image found" />
        </div>
      </div>
    </div>
  );
};
export default Ground;
