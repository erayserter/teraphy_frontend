import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./Navbar.scss";

const SECTIONS = ["home", "about", "suits", "testimonials", "offers", "galery"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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
          <div className="navbar__contact">
            <div className="navbar__contact-location app__flex">
              <img
                src="https://img.icons8.com/ios/50/undefined/marker--v2.png"
                alt=""
              />
              <a
                target="_blank"
                href="https://www.google.com.tr/maps/place/Villa+Therapy/@36.2596816,29.4298438,19.17z/data=!4m5!3m4!1s0x14c1d327c63a9831:0x66b1d2bee0eceaba!8m2!3d36.2599089!4d29.4299934?hl=en&amp;authuser=0"
                rel="noreferrer"
              >
                Villa Therapy, Kaş, Kalkan
              </a>
            </div>
            <div className="navbar__contact-phone app__flex">
              <img src="https://img.icons8.com/material-outlined/24/undefined/iphone--v1.png" />
              <a href="tel:+90-555-537-27-77">+90 555 537 2777</a>
            </div>
          </div>
        </div>
        <div className="navbar__menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {SECTIONS.map((item) => (
                  <li className="app__flex" key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div></div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
