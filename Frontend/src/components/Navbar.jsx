// Navbar.js
import React from "react";
import "./Navbar.css"; // Import CSS file for styling

function Navbar({ toggleSection }) {
  return (
    <nav>
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>

      <label id="overlay" htmlFor="sidebar-active"></label>

      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>
        <img className="navimg" src="brand.png" alt="" />
        <a className="home-link" href="#" onClick={() => toggleSection("home")}>
          Home
        </a>
        <a href="#" onClick={() => toggleSection("about")}>
          About
        </a>
        <a href="#" onClick={() => toggleSection("contact")}>
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
