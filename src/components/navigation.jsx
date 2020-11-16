import React, { Component } from "react";
import amplitude from 'amplitude-js'

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
            <a className="navbar-brand page-scroll" href="#page-top" onClick={() => amplitude.getInstance().logEvent('NAVBAR', { tab: 'Brand' })}>
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
                <a href="#features" className="page-scroll" onClick={() => amplitude.getInstance().logEvent('NAVBAR', { tab: 'Mission' })}>
                  Mission
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll" onClick={() => amplitude.getInstance().logEvent('NAVBAR', { tab: 'About' })}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll" onClick={() => amplitude.getInstance().logEvent('NAVBAR', { tab: 'Services' })}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll" onClick={() => amplitude.getInstance().logEvent('NAVBAR', { tab: 'Blog' })}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll" onClick={() => amplitude.getInstance().logEvent('NAVBAR', { tab: 'Clients' })}>
                  Clients
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll" onClick={() => amplitude.getInstance().logEvent('NAVBAR', { tab: 'Team' })}>
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll" onClick={() => amplitude.getInstance().logEvent('NAVBAR', { tab: 'Contact' })}>
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
