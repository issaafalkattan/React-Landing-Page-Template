import { NavLink } from "react-router-dom";
import "../css/about.css";

export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            {/* <img src='img/about.jpg' className='img-responsive' alt='' /> */}
            <div className="img-container">

            </div>
            {' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>About Us</h2>
              {/* <p>{props.data ? props.data.paragraph : 'loading...'}</p> */}
              <h3>Geo Magnify: Understand Earth Better</h3>
              <h4>“We are committed to quality service delivery”</h4>
              <p>GeoMagnify is a cohort of highly experienced geoscience engineers
                 who have conducted different field surveys in several countries. 
                 Geomagnify is an umbrella organisation, which brings together the wide
                  spectrum of experiences of geoscience people with the vision to deliver
                   high end services in order to enhance the understanding of our earth for
                    our clients so that they can achieve their objectives with greater efficiency.
             </p>
              <h3 id="has">Services we offer currently:</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {/* {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'} */}

                      <li><NavLink to="/multichannel" className="about-link">Multi Channel Analysis of Surface wave (MAWS)</NavLink></li>
                      <li><NavLink to="/seismic" className="about-link">Seismic Refraction</NavLink></li>
                      <li><NavLink to="/downhole" className="about-link" >Downhole</NavLink></li>
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {/* {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'} */}
                      <li><NavLink to="/ert" className="about-link">Electric Resistivity Tomography (ERT)</NavLink></li>
                      <li><NavLink to="/ground" className="about-link">Ground Penetrating Radar (GPR)</NavLink></li>
                      <li><NavLink to="/crosshole" className="about-link">Crosshole</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
