import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const boxShadow = "0 0 15px rgba(0, 0, 0, 0.1)"; // Box shadow style
const headingStyle = {
  marginTop: "7rem",
  color: "#000000",
  fontWeight: "bold",
  textShadow: "-20px -20px 3px rgba(0, 0, 0, 0.1)",
};

const buttonStyle = {
  marginTop: "1rem",
  backgroundColor: "#cc1616",
  fontWeight: "bold",
  padding: "0.3rem 1rem",
  border: "red 2px bold",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "1rem",
  transition: "background-color 0.6s ease-out",
};

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="contact" className="container mt-4">
      <h2
        className="aos-init aos-animate"
        data-aos="fade-up"
        style={headingStyle}
      >
        CONTACT
      </h2>
      <div className="row mt-3 aos-init aos-animate" data-aos="fade-up">
        <div className="col-md-4">
          <div
            className="p-3 mt-3"
            style={{ height: "160px", boxShadow: boxShadow }}
          >
            <FontAwesomeIcon
              icon={faMapLocationDot}
              style={{ fontSize: "2rem", color: "#e82d2d" }}
            />
            <h4
              style={{ color: "#777777", marginTop: "5px", fontWeight: "bold" }}
            >
              Our Address
            </h4>
            <p style={{ color: "#777777" }}>
              B208 Aguyiam Street, FCT, Abuja 535022
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="p-3  mt-3"
            style={{ height: "180px", boxShadow: boxShadow }}
          >
            <FontAwesomeIcon
              icon={faEnvelopeCircleCheck}
              style={{ fontSize: "2rem", color: "#e82d2d" }}
            />
            <h4
              style={{ color: "#777777", marginTop: "5px", fontWeight: "bold" }}
            >
              Email Us
            </h4>
            <p style={{ color: "#777777" }}>contact@hotmail.com</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="p-3  mt-3"
            style={{ height: "160px", boxShadow: boxShadow }}
          >
            <FontAwesomeIcon
              icon={faPhone}
              style={{ fontSize: "2rem", color: "#e82d2d" }}
            />
            <h4
              style={{ color: "#777777", marginTop: "5px", fontWeight: "bold" }}
            >
              Call Us
            </h4>
            <p style={{ color: "#777777" }}>+23481000003345</p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-6  aos-init aos-animate" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969252.421810581!2d4.389279175535705!3d9.082304270558407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043ff5ea6ac96eb%3A0x483d2186ba9e7ff2!2sNigeria!5e0!3m2!1sen!2sus!4v1605176805585!5m2!1sen!2sus"
            style={{
              width: "30rem",
              height: "400px",
              frameborder: "0",
              border: "0",
              allowfullscreen: "",
              ariaHidden: "false",
              tabIndex: "0",
            }}
          ></iframe>
        </div>

        <div
          className="col-lg-6 p-4  aos-init aos-animate"
          data-aos="fade-left"
          style={{ boxShadow: boxShadow }}
        >
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div> */}
            <div className="text-center mt-4">
              <button
                className="btn btn-outline-light btn-get-started p-3 mt-2 scrollto"
                style={buttonStyle}
                type="submit"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "red";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#cc1616";
                  e.target.style.color = "white";
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
