import React, { Component } from "react";
import logo from "../logo.jpeg"

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
            <img className=" logo navbar-brand page-scroll" alt="logo" src={logo} />
            {" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                برامج وخدمات
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                رسالتنا/رؤيتنا
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
               مميزات المركزين
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
            وحدات المركز
                </a>
              </li>
             
              <li>
                <a href="#contact" className="page-scroll">
                  تواصل معنا
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
