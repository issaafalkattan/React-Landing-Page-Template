import React, { useState } from "react";
import amplitude from 'amplitude-js'

export const Contact = () =>{
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  Please fill out the form below to send us an email and we
                  will get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required="required"
                        value={name}
                        onChange={({target})=>setName(target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        required="required"
                        value={email}
                        onChange={({target})=>setEmail(target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={message}
                    onChange={({target})=>setMessage(target.value)}
              ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button 
                  type="submit" 
                  className="btn btn-custom btn-lg"
                  onClick={() => {
                    amplitude.getInstance().logEvent('MESSAGE', { name, email, message })
                    setMessage(' ')
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-envelope"></i> Email
                </span>{" "}
                info@branding.gq
              </p>
              <p>
                <span>
                  <i className="fa fa-calendar"></i> Calendly
                </span>{" "}
                <a 
                  href="https://calendly.com/socialq/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => amplitude.getInstance().logEvent('CONTACT', {contact: 'calendly'})}
                  style={{color:'white'}}
                >SocialQ</a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a 
                      onClick={() => amplitude.getInstance().logEvent('CONTACT', {contact: 'linkedin'})}
                      href='https://www.linkedin.com/company/socialqu' 
                      target="_blank" 
                      rel="nofollow"
                    >
                      <i className="fab fa-linkedin-in" style={{color:'white', fontSize:30}}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2020 SocialQ. Design by{" "}
            <a 
              href="https://www.linkedin.com/in/dannewmark/" 
              target="_blank" 
              rel="nofollow"
              onClick={() => amplitude.getInstance().logEvent('CONTACT', {contact: 'dan_design'})}
            >
              Dan Newmark
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
