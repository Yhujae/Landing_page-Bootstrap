import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const boxStyle = {
  backgroundColor: '#191919',
  color: 'white',
  borderTop: 'red 5px solid',
  margin: '1.5rem',
  padding: '20px',
};

const socialLinkStyle = {
  display: 'inline-block',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '5px',
  textAlign: 'center',
  lineHeight: '40px',
  transition: 'background-color 0.3s',
};

const backToTopStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#cc1616',
  padding: '1rem',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '24px',
};

const buttonStyle = {
  marginTop: '-4px',
  backgroundColor: '#cc1616',
  fontWeight: 'bold',
  padding: '0.8rem',
  border: 'none',
  borderRadius: '0',
  cursor: 'pointer',
  transition: 'background-color 0.6s ease-out',
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Define a reusable function to handle onMouseEnter and onMouseLeave events for anchor tags
const handleAnchorHover = (e) => {
  e.target.style.color = e.type === 'mouseenter' ? '#cc1616' : 'grey';
};

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <div className="footer-top" style={{ backgroundColor: 'black', marginTop: '4rem' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-info" style={boxStyle}>
              <h4>Style Sprint</h4>
              <p>
                A108 Adam Street <br />
                AB 535022, Nigeria<br /><br />
                <strong>Phone:</strong> +2340000543321 <br />
                <strong>Email:</strong> contact@hotmail.com <br />
              </p>
              <div className="text-white social-links mt-3">
                <div
                  style={{ ...socialLinkStyle }}
                  className="social-link"
                >
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '1.5rem', color: 'white' }} 
                    />
                  </a>
                </div>
                <div
                  style={{ ...socialLinkStyle }}
                  className="social-link"
                >
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1.5rem', color: 'white' }} />
                  </a>
                </div>
                <div
                  style={{ ...socialLinkStyle }}
                  className="social-link"
                >
                  <a href="#" className="instagram">
                    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.5rem', color: 'white' }} />
                  </a>
                </div>
                <div
                  style={{ ...socialLinkStyle }}
                  className="social-link"
                >
                  <a href="#" className="google-plus">
                    <FontAwesomeIcon icon={faSkype} style={{ fontSize: '1.5rem', color: 'white' }} />
                  </a>
                </div>
                <div
                  style={{ ...socialLinkStyle }}
                  className="social-link"
                >
                  <a href="#" className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem', color: 'white' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-light width-100 pt-4 col-lg-2 col-md-6 footer-links">
            <h6 style={{ textAlign: 'left', marginLeft:'2rem' }}>Useful Links</h6>
            <ul style={{ color: 'pink', textAlign: 'left', listStyleType: 'none', lineHeight: '2' }}>
              <li>
                <FontAwesomeIcon icon={faArrowCircleRight} />{' '}
                <a
                  style={{ color: 'gray', textDecoration: 'none' }}
                  onMouseEnter={handleAnchorHover}
                  onMouseLeave={handleAnchorHover}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowCircleRight} />{' '}
                <a
                  style={{ color: 'gray', textDecoration: 'none' }}
                  onMouseEnter={handleAnchorHover}
                  onMouseLeave={handleAnchorHover}
                  href="#"
                >
                  About us
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowCircleRight} />{' '}
                <a
                  style={{ color: 'gray', textDecoration: 'none' }}
                  onMouseEnter={handleAnchorHover}
                  onMouseLeave={handleAnchorHover}
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowCircleRight} />{' '}
                <a
                  style={{ color: 'gray', textDecoration: 'none' }}
                  onMouseEnter={handleAnchorHover}
                  onMouseLeave={handleAnchorHover}
                  href="#"
                >
                  Terms of service
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowCircleRight} />{' '}
                <a
                  style={{ color: 'gray', textDecoration: 'none' }}
                  onMouseEnter={handleAnchorHover}
                  onMouseLeave={handleAnchorHover}
                  href="#"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="text-light pt-4 col-lg-2 col-md-6 footer-links">
            <h6 style={{ textAlign: 'left', marginLeft:'2rem' }}>Our Services</h6>
            <ul style={{ color: 'pink', textAlign: 'left', listStyleType: 'none', textDecoration: 'none', lineHeight: '2' }}>
              <li>
                <FontAwesomeIcon icon={faArrowCircleRight} />{' '}
                <a
                  onMouseEnter={handleAnchorHover}
                  onMouseLeave={handleAnchorHover}
                  style={{ color: 'gray', textDecoration: 'none' }}
                  href="#"
                >
                 Shopping Cart
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowCircleRight} />{' '}
                <a
                  style={{ color: 'gray', textDecoration: 'none' }}
                  onMouseEnter={handleAnchorHover}
                  onMouseLeave={handleAnchorHover}
                  href="#"
                >
                 User Accounts
                </a>
              </li>
        
              <li>
                <FontAwesomeIcon icon={faArrowCircleRight} />{' '}
                <a
                  style={{ color: 'gray', textDecoration: 'none' }}
                  onMouseEnter={handleAnchorHover}
                  onMouseLeave={handleAnchorHover}
                  href="#"
                >
                 Online Community
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowCircleRight} />{' '}
                <a
                  style={{ color: 'gray', textDecoration: 'none' }}
                  onMouseEnter={handleAnchorHover}
                  onMouseLeave={handleAnchorHover}
                  href="#"
                >
               Customer Support
                </a>
              </li>
            </ul>
          </div>
          <div className="text-light pt-4 col-lg-4 col-md-6 footer-newsletter">
            <h6>Our Newsletter</h6>
            <p>Subscriber Exclusives</p>
            <form action="" method="post">
              <input type="email" name="email" style={{ padding: '0.65rem', width:'300px' }} />
              <input
                className="btn btn-outline-light btn-get-started scrollto"
                style={buttonStyle}
                type="submit"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'red';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#cc1616';
                  e.target.style.color = 'white';
                }}
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
      <hr style={{ height: '2px', width: '50rem', backgroundColor: 'gray', margin: 'auto', marginTop: '1rem' }}></hr>
      <div className="container pt-3">
        <div className="copyright p-2" style={{ color: '#777777' }}>
          <p>  &copy; {currentYear} <strong><span>StyleSprint</span></strong>. All Rights Reserved</p>
        </div>
      </div>
      {showBackToTop && (
        <a href="#"  onClick={scrollToTop} style={backToTopStyle} className="back-to-top d-flex  align-items-center justify-content-end active"
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'red';
          e.target.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#cc1616';
          e.target.style.color = 'white';
        }}>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      )}
    </div>
  );
}

export default Footer;
