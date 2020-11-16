import React, { Component } from "react";
import amplitude from 'amplitude-js'

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-3 col-md-offset-2 col-sm-6 team">
                    <div className="thumbnail">
                      {" "}
                      <img 
                        src={d.img} 
                        alt="..." 
                        className="team-img" 
                        style={{
                          borderRadius: 120, 
                          border: `5px solid #${i ? 'd15637' : '4c969a'}`
                        }}
                      />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                        { 
                          !i 
                          ? 
                            <a 
                              href='https://twitter.com/SantiagoMQui' 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={() => amplitude.getInstance().logEvent('TEAM', {social: 'SANTIAGO_TWITTER'})}
                            >
                              <i className="fab fa-twitter" style={{ fontSize: 24, marginRight: 12 }} />
                            </a> 
                          : null 
                        } { 
                          !i 
                          ? 
                            <a 
                              href='https://github.com/Santiago8888' 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={() => amplitude.getInstance().logEvent('TEAM', {social: 'SANTIAGO_GIT'})}
                            >
                              <i className="fab fa-github" style={{ fontSize: 24, marginLeft: 12, color:'black' }}/>
                            </a> 
                          : null 
                        } { 
                          i 
                          ? 
                            <a 
                              href='https://www.linkedin.com/in/paola-holgu%C3%ADn-hoffman-703261162' 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={() => amplitude.getInstance().logEvent('TEAM', {social: 'PAOLA_LINKEDIN'})}
                            >
                              <i className="fab fa-linkedin" style={{ fontSize: 24 }}/>
                            </a> 
                          : null 
                        }
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
