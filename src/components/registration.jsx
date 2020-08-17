import React, { Component } from 'react'

export class regestration extends Component {
  render() {
    return (
        <div id="about" style={{background: '#f6f6f6'}}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">  
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}} >
            <img src={require('../consulting.svg')} alt=""  style={{width: '200px'}}/>
          <div className="about-text">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdixc67eJy53q1R-FR67dxhRua26YONFdfF1N1kFnE0wdHF2Q/viewform?vc=0&c=0&w=1">
              <h4 style={{fontSize:"24px", marginTop:'15px',cursor: 'pointer'}}>  الحصول على استشارة قانونية</h4>
            </a>
              </div>
             </div>
            </div>
            <div className="col-xs-12 col-md-6">
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}} >
            <img src={require('../registration.svg')} alt="" style={{width: '200px'}} />
              <div className="about-text">
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdiJtAPBj9qoWUY-7cog-bKdfH9Q6GNN6rwuGSjuDHCZ2H9pA/viewform?vc=0&c=0&w=1">
              <h4 style={{fontSize:"24px", marginTop:'15px',cursor: 'pointer'}} > التسجيل في المركز</h4>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default regestration
