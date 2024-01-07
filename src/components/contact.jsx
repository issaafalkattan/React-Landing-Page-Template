import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import dompurify from 'dompurify'

const initialState = {
  name: "",
  email: "",
  message: "",
  contact_number: "",
  adults: "",
  kids: "",
  dietary_requirements: "",
  date: "",
  time: "",
  location: "",
  notes: "",
};

export const Contact = (props) => {

  
  const validateEmail = (email) => {
    // Uses a regular expression to validate the email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  
  const [{ name, email, message, location,adults, kids, date, time}, setState] = useState(initialState);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const sanitizedName = dompurify.sanitize(name);
    const sanitizedEmail = dompurify.sanitize(email);
    const sanitizedMessage = dompurify.sanitize(message);
    const sanitizedLocation = dompurify.sanitize(location);
    const sanitizedAdults = dompurify.sanitize(adults);
    const sanitizedKids = dompurify.sanitize(kids);
    const sanitizedDate = dompurify.sanitize(date);
    const sanitizedTime = dompurify.sanitize(time);
    if (
      !sanitizedName ||
      !sanitizedEmail ||
      !validateEmail(sanitizedEmail) ||
      !sanitizedMessage ||
      !sanitizedLocation ||
      !sanitizedAdults ||
      !sanitizedKids ||
      !sanitizedDate ||
      !sanitizedTime
    ) {
      alert("Please fill in all required fields with valid information.");
      return;
    }

    if (!recaptchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }
    const emailjspublickey = process.env.REACT_APP_EMAILJS_PUBLICKEY
    const emailjstemplateid = process.env.REACT_APP_EMAILJS_TEMPLATEID
    const emailjsserviceid = process.env.REACT_APP_EMAILJS_SERVICEID
    emailjs
      .sendForm(emailjsserviceid,emailjstemplateid, e.target, emailjspublickey)
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          alert("Your message has been sent successfully. Thank you! Please check your email for updates.")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage"  onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                    
                  <div className="col-md-6">
                    <div className="form-group">
                    <label htmlFor="contact_number">Phone Number:</label>
                      <input type="tel" name="contact_number" id="contact_number" placeholder="Contact Number" className="form-control" required onChange={handleChange} autoComplete="off" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                      <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="location">Select Location of Restaurant:</label>
                        <select
                          id="location"
                          name="location"
                          className="form-control"
                          value={location}
                          onChange={handleChange}
                          required
                          autoComplete="off"
                        >
                          <option value="">Select Location </option>
                          <option value="Ormiston">Ormiston</option>
                          <option value="Onehunga">Onehunga</option>
                        </select>
                      </div>
                    </div>
                  <div className="col-md-6">
                    <div className="form-group">
                    <label htmlFor="adults">Number of Adults in reservation:</label>
                    <input type="number" name="adults" id="adults" placeholder="Number of Adults" className="form-control" required onChange={handleChange} autoComplete="off" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                    <label htmlFor="kids">Number of Kids in reservation:</label>
                    <input type="number" name="kids" id="kids" placeholder="Number of Kids" className="form-control" required onChange={handleChange} autoComplete="off" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="date">Date of Booking:</label>
                    <input type="date" name="date" id="date" placeholder="Date of Booking" className="form-control" required onChange={handleChange} autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                    <label htmlFor="time">Time of Arrival:</label>
                    <input type="time" name="time" id="time" placeholder="Time of Arrival" className="form-control" required onChange={handleChange} autoComplete="off" />
                    </div>
                  </div>
                  
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <p className="help-block text-danger"></p>
                    </div>

                  
                  </div>
                </div>
                <div className="form-group">
                <label htmlFor="message">Any Request/Occasion would you like us to know?:</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    autoComplete="off"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <ReCAPTCHA
           sitekey="6Lfcj0EpAAAAAMIkOUhRMiZWVyJiRWR04t0ndIBN"
          onChange={(value) => setRecaptchaValue(value)}
            />
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
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
                  <i className="fa fa-map-marker" href='https://www.google.com/maps/place/240+Ormiston+Road,+Flat+Bush,+Auckland+2019/@-36.9646119,174.9099049,17z/data=!3m1!4b1!4m6!3m5!1s0x6d0d4ce59519bff5:0xa7eca17053996fe7!8m2!3d-36.9646162!4d174.9124798!16s%2Fg%2F11h0_ngc26?hl=en&entry=ttu'></i> Address
                 
                </span>
                
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Opening Hours
                </span>{" "}
                {props.data ? props.data.openinghours : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
            
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
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
            &copy; 2024 Manna Kitchen. Developed by{" "}
            <a href="https://patrick-t-portfolio.vercel.app/" rel="nofollow">
              Patrick Tricenio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
