import React, { Component } from "react";
import amplitude from 'amplitude-js'

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
          <a 
            target="_blank"
            className="btn btn-custom btn-lg" 
            href="https://calendly.com/socialq/30min" 
            style={{backgroundImage:'none', backgroundColor:'d15637'}}
            onClick={() => amplitude.getInstance().logEvent('SCHEDULE_CALL')}
          > Free Consultation </a>
        </div>
      </div>
    );
  }
}

export default Services;
