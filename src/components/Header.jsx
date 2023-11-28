import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Profile from './Profile';

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null); // Track the hovered link

  const handleNavLinkClick = () => {
    // Close the navigation on small screens after a link is clicked
    if (window.innerWidth <= 992) {
      setShowNavbar(false);
    }
  };

  const handleDropdownEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(false);
  };

  const handleSubDropdownEnter = () => {
    setShowSubDropdown(true);
  };

  const handleSubDropdownLeave = () => {
    setShowSubDropdown(false);
  };

  const handleLinkHover = (linkName) => {
    setHoveredLink(linkName); // Set the currently hovered link
  };

  const clearHoveredLink = () => {
    setHoveredLink(null); // Clear the currently hovered link when leaving the link
  };

  const navLinkStyles = {
    color: 'white',
    backgroundColor: 'black',
    padding: '18px',
  };

  const headerStyles = {
    background: 'black',
    height: '80px',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: '999',
  };


  
  // Style for the scrollable dropdown menu
  const scrollableDropdownMenuStyle = {
    maxHeight: '200px',
    overflowY: 'auto',
  };

  return (
    <Navbar
      style={headerStyles}
      expand="lg"
      expanded={showNavbar}
      onToggle={(expanded) => setShowNavbar(expanded)}
    >
      <Navbar.Brand>
        <img
          src="/image 1.png"
          className="img-fluid mb-2rem"
          alt=""
          style={{ marginLeft: '2rem', paddingBottom: '2rem', marginBottom: '-2.4rem', width: '250px', height: '100px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setShowNavbar(!showNavbar)}
        aria-controls="basic-navbar-nav"
        style={{ color: 'gray', marginRight: '2rem' }}
      >
        {showNavbar ? 'X' : <span className="navbar-toggler-icon"></span>}
      </Navbar.Toggle>
    
      <Navbar.Collapse id="basic-navbar-nav">
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
          
          <Nav
            style={{ backgroundColor: 'black', paddingRight: '2rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}
          
          >
            <Nav.Link
              onClick={handleNavLinkClick}
              style={{ ...navLinkStyles, backgroundColor: hoveredLink === 'Home' ? '#cc1616' : 'black' }}
              onMouseEnter={() => handleLinkHover('Home')}
              onMouseLeave={clearHoveredLink}
              href="#hero"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={handleNavLinkClick}
              style={{ ...navLinkStyles, backgroundColor: hoveredLink === 'About' ? '#cc1616' : 'black' }}
              onMouseEnter={() => handleLinkHover('About')}
              onMouseLeave={clearHoveredLink}
              className="nav-link scrollto active"
              href="#about"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={handleNavLinkClick}
              style={{ ...navLinkStyles, backgroundColor: hoveredLink === 'Community' ? '#cc1616' : 'black' }}
              onMouseEnter={() => handleLinkHover('Community')}
              onMouseLeave={clearHoveredLink}
              href="#community"
            >
              Community
            </Nav.Link>
            <Nav.Link
              onClick={handleNavLinkClick}
              style={{ ...navLinkStyles, backgroundColor: hoveredLink === 'Gallery' ? '#cc1616' : 'black' }}
              onMouseEnter={() => handleLinkHover('Gallery')}
              onMouseLeave={clearHoveredLink}
              href="#gallery"
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              onClick={handleNavLinkClick}
              style={{ ...navLinkStyles, backgroundColor: hoveredLink === '' ? '#cc1616' : 'black' }}
              onMouseEnter={() => handleLinkHover('')}
              onMouseLeave={clearHoveredLink}
              href="#"
            >
              Market
            </Nav.Link>

           <Dropdown
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              show={showDropdown}
            >
              <Dropdown.Toggle
                className="border-0"
                style={{
                  ...navLinkStyles,
                  backgroundColor: hoveredLink === 'Dropdown' ? '#cc1616' : 'black',
                }}
                id="dropdown-basic"
              >
                Drop Down
              </Dropdown.Toggle>
              <Dropdown.Menu style={scrollableDropdownMenuStyle} className="mt-1">
                <Dropdown.Item href="#">Drop Down 1</Dropdown.Item>
                <Dropdown
                  onMouseEnter={handleSubDropdownEnter}
                  onMouseLeave={handleSubDropdownLeave}
                  show={showSubDropdown}
                  className="deep-dropdown" // Add a custom class for styling
                >
                  <Dropdown.Toggle
                    className="border-0 bi bi-chevron-right"
                    variant=""
                    id="sub-dropdown"
                  >
                    Deep Drop Down
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Deep Drop Down 1</Dropdown.Item>
                    <Dropdown.Item href="#">Deep Drop Down 2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown.Item href="#">Drop Down 2</Dropdown.Item>
                <Dropdown.Item href="#">Drop Down 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link
              onClick={handleNavLinkClick}
              style={{ ...navLinkStyles, backgroundColor: hoveredLink === 'Contact' ? '#cc1616' : 'black' }}
              onMouseEnter={() => handleLinkHover('Contact')}
              onMouseLeave={clearHoveredLink}
              href="#contact"
            >
              Contact
            </Nav.Link>
          <Profile />
          </Nav>
          </div>
        </Navbar.Collapse>
        </Navbar>
       
  );
}

export default Header;
        
  

