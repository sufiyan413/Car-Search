import React from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
        />
        <div className="search-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
            alt="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

