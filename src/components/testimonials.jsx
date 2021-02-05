import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export class testimonials extends Component {
  render() {
    return (
      <Fade bottom>
        <div id="testimonials">
          <div className="container">
            <div className="section-title text-center">
              <h2>What our clients say</h2>
            </div>
            <div className="row">
              {this.props.data
                ? this.props.data.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-4">
                      <div className="testimonial">
                        <div className="testimonial-image">
                          {" "}
                          <img src={d.img} alt="" />{" "}
                        </div>
                        <div className="testimonial-content">
                          <p>"{d.text}"</p>
                          <div className="testimonial-meta"> - {d.name} </div>
                        </div>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default testimonials;
