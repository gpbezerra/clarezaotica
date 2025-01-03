import React from "react";
import "./navbar_mobile.css";
import close from "../../assets/close.png"
import logo from "../../assets/yellowLogo.png"
import { links } from "../../utils/options";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/arrow.png"

const NavbarMobile = ({ setMenuOpen }) => {
  let url = window.location.pathname;
  return (
    <div className="navbarMobileContainer">
      <div className="navbarMobileContent">
        <img id="navbarMobileCloseButton" onClick={() => setMenuOpen(false)} src={close} alt="Fechar" />
        <div className="navbarMobile">
          <img id="navbarMobileLogo" src={logo} alt="Logo Clareza ótica" />
          <div className="navbarMobileLinks">
            {links.map((link, key) => (
              <NavLink onClick={() => setMenuOpen(false)} to={link.link} key={key} className="navbarMobileCardLink">
                <img src={link.icon} alt={`${link.text} icone`} />
                <p>{link.text}</p>
                <img id="navbarMobileArrow" src={arrow} alt="ir para link" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
