import React, { Component } from "react";
import amplitude from 'amplitude-js'

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-md-offset-1 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title1 : "Loading"} <br/>
                    {this.props.data ? this.props.data.title2 : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a href="#services" className="btn btn-custom btn-lg page-scroll" onClick={() => amplitude.getInstance().logEvent('TOP_CTA')}>
                    Get Started
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
