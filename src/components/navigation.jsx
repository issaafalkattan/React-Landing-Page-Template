import "../css/navigation.css";
import ThemeChanger from "./ThemeChanger";
import {NavLink} from 'react-router-dom';
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <NavLink className="navbar-brand page-scroll" style={{"text-shadow":"5px 2px 4px skyblue","font-style":"oblique"}} to="/page-top">
            <span className="ayush">Geo</span>Magnify
          </NavLink>{" "}
          {/* <h5 style={{ color: "green", textTransform: "none" }}>
            Understand earth better
          </h5> */}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right" >
            <li style={{"font-weight":"bolder","color":"black"}}>
              <NavLink to="/page-top" id="a" className="page-scroll" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" id="a" className="page-scroll">
                About
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/services" id="a" className="page-scroll">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" id="a" className="page-scroll">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" id="a" className="page-scroll">
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" id="a" className="page-scroll">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <ThemeChanger />
      </div>
    </nav>
    
  );
};
