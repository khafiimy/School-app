import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="col-3">
          <div className="navbar-logo">
            <p className="logo">School-app</p>
          </div>
          <ul className="navbar-menus">
            <li className="navbar-menu">Home</li>
            <li className="navbar-menu">About</li>
            <li className="navbar-menu">Contact</li>
          </ul>
          <div className="menu-right">
            <p className="btn-primary-rounded">Get in touch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
