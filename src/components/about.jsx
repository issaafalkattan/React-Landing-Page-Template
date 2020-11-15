import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2 style={{textAlign:'center'}}>About Us</h2>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <p>
                  We believe a brand is the <span style={{color:'4c969a', fontWeight:500}}>projection</span> of your values, culture and mission.
                  Leaders have the ability to <span style={{color:'4c969a', fontWeight:500}}>express</span> with confidence who they are, 
                  what they are good at, and where do they want to go. 
                  At <span style={{color:'4c969a', fontWeight:500}}>SocialQ</span> we are proud to help you develop 
                  into a mission-oriented <span style={{color:'d15637', fontWeight:500}}>leader</span>.
                </p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
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
}

export default about
