import "../css/navigation.css";
import ThemeChanger from "./ThemeChanger";
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
          <a className="navbar-brand page-scroll" style={{"text-shadow":"5px 2px 4px skyblue","font-style":"oblique"}}href="#page-top">
            <span className="ayush">Geo</span>Magnify
          </a>{" "}
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
              <a href="#page-top" className="page-scroll" >
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <ThemeChanger />
      </div>
    </nav>
    
  );
};
