import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const headingStyle = {
  marginTop: "7rem",
  color: "#000000",
  fontWeight: "bold",
  textShadow: "-20px -20px 3px rgba(0, 0, 0, 0.1)",
};
function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="about">
      <h2
        className="container aos-init aos-animate"
        data-aos="fade-up"
        style={headingStyle}
      >
        ABOUT US
      </h2>
      <div className="container mt-4">
        <div className="row text-start">
          <div
            className="col-lg-6 order-1 order-lg-2 aos-init aos-animate"
            data-aos="fade-left"
          >
            <img src="/pics-4.jpg" className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-2 mt-3 pt-lg-0 order-2 order-lg-1 content aos-init aos-animate"
            data-aos="fade-right"
          >
            <h4 style={{ color: "#ce1c668c" }}>
              Discover Your Style Story with Style Sprint
            </h4>

            <p style={{ lineHeight: "2" }}>
              Welcome to Style Sprint , where style meets creativity. We're
              passionate about fashion and dedicated to bringing you the latest
              trends, exclusive insights, and inspiration from the world of
              haute couture. Our mission is to empower you to express your
              unique style and feel confident in every outfit. Explore our
              curated collection of clothing, accessories, and fashion tips, and
              join us in celebrating the art of self-expression through the
              language of fashion. Discover your fashion story with us today!
            </p>
            <div style={{ lineHeight: "2" }}>
              <p>
                {" "}
                <ArrowRightCircle size={24} color="red" /> Discover the story
                behind our passion for fashion.{" "}
              </p>
              <p>
                {" "}
                <ArrowRightCircle size={24} color="red" /> Meet our team of
                fashion enthusiasts, designers, and trendsetters who curate the
                latest styles and offer expert fashion advice to help you
                elevate your personal style.
              </p>
              <p>
                {" "}
                <ArrowRightCircle size={24} color="red" /> Join a vibrant
                community of fashion lovers, explore trendsetting ideas, and
                find the inspiration you need to express your individuality
                through clothing and accessories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
