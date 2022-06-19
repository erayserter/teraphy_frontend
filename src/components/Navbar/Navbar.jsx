import React from "react";

import { images } from "../../constants";

import "./Navbar.scss";

const SECTIONS = ["home", "about", "suits", "testimonials", "offers", "galery"];

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={images.therapy_logo} alt="" />
        </div>
        <div className="navbar__navigation">
          <ul className="navbar__navigation-links">
            {SECTIONS.map((section) => {
              return (
                <li className="app__flex" key={`link-${section}`}>
                  <div />
                  <a href={`#${section}`}>{section}</a>
                </li>
              );
            })}
          </ul>
          <div className="navbar__navigation-contact">
            <div className="navigation-contact__location"></div>
            <div className="navigation-contact__phone"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
