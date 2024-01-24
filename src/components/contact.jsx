import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
// import ReCAPTCHA from "react-google-recaptcha";
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
    // using REGEX
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  
  const [{ name, email, message, location,adults, kids, date, time}, setState] = useState(initialState);
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [privacyAgreementError, setPrivacyAgreementError] = useState('');
  // const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

   
   if (name === 'name' && value.length > 50) {
    return; 
  }

  
  if (name === 'message' && value.length > 200) {
    return; 
  }

 
  if (name === 'contact_number' && value.length > 15) {
    return; 
  }
    //this are used to prevent DOS attacks
  

    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  const handlePrivacyCheckboxChange = () => {
    setPrivacyAgreementError('');
    setPrivacyAgreement(!privacyAgreement);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setting sanitations to prevent XSS attacks
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

    // if (!recaptchaValue) {
    //   alert("Please verify that you are not a robot.");
    //   return;
    // }
    if (!privacyAgreement) {
      setPrivacyAgreementError('Please acknowledge the Privacy Act 2020.');
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
              <div className="section-title shining-button">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible. (Please be advised that Manna Kitchen Ormiston will never ask for your bank card information/physical address via email,phone and human live chat support)
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
                <div className="form-group">
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="privacyAgreement"
            checked={privacyAgreement}
            onChange={handlePrivacyCheckboxChange}
            required
            style={{ transform: 'scale(1.8)',  marginRight: '8px' }}
          /> 
          Under the New Zealand  Data Protection Regulation and also adhering to Privacy Act 2020, we need your approval for the use of personal information for us to communicate back to you (e.g. your name and email).
        </label>
        {privacyAgreementError && (
          <p className="help-block text-danger">{privacyAgreementError}</p>
        )}
      </div>
      <div className="form-group">
        <a href="https://www.legislation.govt.nz/act/public/2020/0031/latest/LMS23223.html" target="_blank" rel="noopener noreferrer">
          Read the Privacy Act 2020 NZ (Please be advised that Manna Kitchen Ormiston will never ask for your bank card information/physical address via email,phone and human live chat support)
        </a>

      </div>
                {/* <ReCAPTCHA
           sitekey="6Lfcj0EpAAAAAMIkOUhRMiZWVyJiRWR04t0ndIBN"
          onChange={(value) => setRecaptchaValue(value)}
            /> */}
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg shining-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
  <p>
    <span>
      <i className="fa fa-map-marker"></i> Address
    </span>{" "}
    <a href={props.data ? props.data.mapLink : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.892834148585!2d174.9124798!3d-36.9646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4ce59519bff5%3A0xa7eca17053996fe7!2s240%20Ormiston%20Road%2C%20Flat%20Bush%2C%20Auckland%202019!5e0!3m2!1sen!2snz!4v1705868431727!5m2!1sen!2snz"} target="_blank" rel="noopener noreferrer">
      {props.data ? props.data.address : "loading"}
    </a>
  </p>
</div>
            <div className="contact-item">
                <p>
                  <span>
                 <i className="fa fa-phone"></i> Phone
                 </span>{" "}
                 <a href={`tel:${props.data ? props.data.phone : "loading"}`}>
                 {props.data ? props.data.phone : "loading"}
                </a>
               </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Opening Hours
                </span>{" "}
                {props.data ? (
      <a href={props.data.openingHoursLink ? props.data.openingHoursLink : "#"} target="_blank" rel="noopener noreferrer">
        {props.data.openinghours}
      </a>
    ) : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <a href={`mailto:${props.data ? props.data.email : "loading"}`}>
      {props.data ? props.data.email : "loading"}
    </a>
              </p>
            </div>

             {/* Google Maps Section */}
                <div className="col-md-12 contact-map">
            <h3>Google Maps</h3>
            <div className="map-container">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.892834148585!2d174.9124798!3d-36.9646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4ce59519bff5%3A0xa7eca17053996fe7!2s240%20Ormiston%20Road%2C%20Flat%20Bush%2C%20Auckland%202019!5e0!3m2!1sen!2snz!4v1705868431727!5m2!1sen!2snz"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
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
                  {/* <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li> */}
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
