import "../css/navigation.css";
// import ThemeChanger from "./ThemeChanger";
import { NavLink } from "react-router-dom";
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
            
        
          <NavLink
            className="navbar-brand page-scroll"
            // style={{
            //   "text-shadow": "5px 2px 4px skyblue",
            //   "font-style": "oblique",
            // }}
            to="/home"
          >
            <img src="img/logo.png" alt="logo"  id="logo-nav" style={{"width":"30rem","height":"8rem","position":"absolute","top":".9rem","mix-blend-mode":"multiply"}}/>
           
            {/* <span className="ayush">Geo</span>Magnify */}
          </NavLink>{" "}
          {/* <h5 style={{ color: "green", textTransform: "none" }}>
            Understand earth better
          </h5> */}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li style={{ "font-weight": "bolder", color: "black" }}>
              <NavLink to="/home"  className="page-scroll hidden-xs">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/home"  className="page-scroll visible-xs"  data-toggle="collapse" data-target=".navbar-collapse">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"  className="page-scroll hidden-xs">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"  className="page-scroll visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/services"  className="page-scroll hidden-xs">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/services"  className="page-scroll visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio"  className="page-scroll hidden-xs">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio"  className="page-scroll visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
                Gallery
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/testimonials" id="a" className="page-scroll">
                Testimonials
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/contact"  className="page-scroll hidden-xs">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact"  className="page-scroll visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <ThemeChanger /> */}
      </div>
    </nav>
  );
};
