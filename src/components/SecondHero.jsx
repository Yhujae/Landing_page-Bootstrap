import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

function SecondHero() {
  const backgroundImageUrl = '/pics-11.jpg';

  const sectionStyle = {
    background: `url(${backgroundImageUrl}) no-repeat  center  fixed`,
    backgroundSize: ' cover',
    height: '70vh',
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
    maxWidth: '100vw',
    textAlign: 'center',
    fontFamily: 'Raleway, sans-serif',
  };

  const buttonStyle = {
    color: 'white',
    fontWeight: '200',
    transition: 'background-color 0.6s ease-out', // Add a transition for background color
    border: '2px solid gray', // Add a border to the button
  };

  const handleButtonMouseEnter = (event) => {
    event.target.style.backgroundColor = '#cc1616'; // Change the background color to red on hover

    
  };

  const handleButtonMouseLeave = (event) => {
    event.target.style.backgroundColor = ''; // Reset the background color on leave
    event.target.style.color = 'white'
  

    
   };

  return (
    <section id="hero" className="d-flex align-items-center" style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div
        className="container position-absolute aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="500"
        style={textStyle}
      >
       
        <h4    className=" aos-init aos-animate" data-aos="fade-up" 
        style={{ fontWeight: '00', color: '#ffffff' }}>
        Discover your fashion story with us today.
        </h4>
        <h6 className='mt-4'> Your Destination for Trendy Fashion...</h6>
        <a
          href="#about"
          className="btn btn-outline-light btn-get-started p-3 mt-2 scrollto  aos-init aos-animate" data-aos="fade-up"
          style={buttonStyle}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
       BUY NOW
        </a>
      </div>
    </section>
  );
}

export default SecondHero;
