import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>رسالتنا و رؤيتنا</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>رؤيتنا</h3>
                <div className="list-style">
                  {/* <div className="col-lg-6 col-sm-6 col-xs-12"> */}
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  {/* </div> */}
                  <h3>رسالتنا</h3>
                  {/* <div className="col-lg-6 col-sm-6 col-xs-12"> */}
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  {/* </div> */}
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
