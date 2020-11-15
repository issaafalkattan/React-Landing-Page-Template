import React, { Component } from "react";

export class Navigation extends Component {
  render() {
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
            <a className="navbar-brand page-scroll" href="#page-top">
              <img 
                src="/icon.png"
                style={{display:'initial', marginRight:15}}
                class="d-inline-block align-top"
                height="30"
                width="30"
                alt=""
              />
              <span style={{verticalAlign:'middle'}}>Social Q</span>
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Mission
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
                  Blog
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Clients
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
