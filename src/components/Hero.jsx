import React, {useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'aos/dist/aos.css';
import AOS from 'aos';



function Hero() {
  useEffect(() => {
    // Initialize AOS library with custom animations
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate elements once
    });
  }, []);
  const backgroundImageUrl = '/freestocks-_3Q3tsJ01nc-unsplash.jpg';

  const sectionStyle = {
    background: `url(${backgroundImageUrl}) no-repeat top center fixed`,
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
  };

  const textStyle = {
    top: '50%',
    left: '2%', // Adjust the value to move the text further to the left
    transform: 'translateY(-60%)',
    color: 'white',
    padding: '20px',
    maxWidth: '60rem',
    textAlign: 'start',
    fontFamily: 'Raleway, sans-serif',
  };

  const buttonStyle = {
    color: 'white',
    fontWeight: '600',
    transition: 'background-color 0.6s ease-out', // Add a transition for background color
    border: '2px solid gray', // Add a border to the button
  };

  const handleButtonMouseEnter = (event) => {
    event.target.style.backgroundColor = '#e82d2d'; // Change the background color to red on hover
    
  };

  const handleButtonMouseLeave = (event) => {
    event.target.style.backgroundColor = ''; // Reset the background color on leave
    event.target.style.color = 'white'
    
   };

  return (
    <section id="hero" className="d-flex align-items-center " style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div
        className="container position-absolute aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="500"
        style={textStyle}
      >
        <h1 data-aos="fade-up" style={{ fontWeight: 'bold' }}>
          WELCOME TO STYLE SPRINT
        </h1>
        <h4 data-aos="fade-up" style={{ color: '#ffffff' }}>
          {/* Where Fashion Meets Convenience */}
          Unleashing Your Inner Fashionista
        </h4>
        <a
          href="#about"
          className="btn btn-outline-light btn-get-started p-3 mt-2  aos-init aos-animate" data-aos="fade-up "
          style={buttonStyle}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          GET STARTED
        </a>
      </div>
    </section>
  );
}

export default Hero;
