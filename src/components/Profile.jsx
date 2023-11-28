import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div  className="profile ">
      <Dropdown  style={{ marginRight: '4rem', marginTop: '-2rem', padding: '3rem', width: '50px', height: '20px' }} show={showDropdown} onToggle={handleDropdownToggle}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
        
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ marginTop: '0.5rem'}}  >
          <Dropdown.Item href="#/action-1">Signin</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Signout</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Edit Profile</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Profile;
