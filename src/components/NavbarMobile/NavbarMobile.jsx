import React, { useEffect } from "react";
import "./navbar_mobile.css";
import close from "../../assets/close.png"
import logo from "../../assets/yellowLogo.png"
import { links } from "../../utils/options";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/arrow.png"

const NavbarMobile = ({ setMenuOpen }) => {

    useEffect(() => {
        document.body.classList.add("no-scroll");
    
        return () => {
          document.body.classList.remove("no-scroll");
        };
      }, []);



  const handleLinkClick = (link) => {
    setMenuOpen(false); // Fecha o menu mobile
    window.location.href = link; // Força o refresh da página
};



return (
    <div className="navbarMobileContainer">
        <div className="navbarMobileContent">
            <img id="navbarMobileCloseButton" onClick={() => setMenuOpen(false)} src={close} alt="Fechar" />
            <div className="navbarMobile">
                <img id="navbarMobileLogo" src={logo} alt="Logo Clareza ótica" />
                <div className="navbarMobileLinks">
                    {links.map((link, key) => (
                        <a
                            href={link.link}
                            key={key}
                            className="navbarMobileCardLink"
                            onClick={() => handleLinkClick(link.link)}
                        >
                            <img src={link.icon} alt={`${link.text} icone`} />
                            <p>{link.text}</p>
                            <img id="navbarMobileArrow" src={arrow} alt="ir para link" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
}

export default NavbarMobile;
