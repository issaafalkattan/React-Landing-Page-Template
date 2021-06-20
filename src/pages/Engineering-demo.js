import "./Engineering.css";
import ayush from "../img/ayush.jpg";
import geotechnical from "../img/geotechnical.jpg";
const Engineering = () => {
  return (
    <div className="alpha">
      <div className="title">
        <h1>Geophysics</h1>
      </div>
      <div className="intro-part">
      <h2>Introduction</h2>
      </div>
      
      <div className="landing">
        <div className="gama">
          <h2>Engineering Geophysics:</h2>

          <p className="para-text">
            Engineering Geophysical methods provide accurate data about the
            structure of the subsurface - valuable information in the field of
            engineering. <br />
            Engineering geophysics is concerned with resolution, details and
            quantification of specific subsurface condition with the purpose of
            detailed information of location and distribution of weak and poor
            material undesirable for foundation or Tunnel or Road alignment or
            Open pit mines.
          </p>
        </div>
        <div className="img1">
          <img src={ayush} alt="Geophysics" />
        </div>
      </div>
        {/* <div className="content-data">
          <div className="img2">
            <img src={geotechnical} alt="Geophysics" />
          </div>
          <div className="content-text">
            <h2>2.Environment Geophysics:</h2>
            <p className="para-text">
              Environmental geophysics is a relatively new field. It is
              primarily used to identify, map or predict the presence and
              potential movement of surface water and groundwater and to
              identify contaminants in the soil within the upper ~500of the
              Earth's surface. This is the region of the earth that has a direct
              and daily impact on our lives. It can also be used to help locate
              sites for underground waste disposal, examine archaeological sites
              or even assist the police in their investigations of possible
              burial sites.
            </p>
          </div>
        </div> */}
      </div>
  );
};
export default Engineering;
