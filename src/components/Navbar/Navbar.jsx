import React, { useEffect, useState } from "react";
import "./navbar.css";
import whiteLogo from "../../assets/whiteLogo.png";
import { NavLink } from "react-router-dom";
import menuToggle from "../../assets/menuToggle.svg"
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { links } from "../../utils/options";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const linksMenu = links.slice(1);

    const handleLinkClick = (link) => {
        setMenuOpen(false); // Fecha o menu mobile
        window.location.href = link; // Força o refresh da página
    };
    
    return (
        <div className="navbarContainer">
            <a href="/" onClick={() => handleLinkClick("/")}>
                <img src={whiteLogo} alt="Logo" />
            </a>
            <div className="menuToggle" onClick={() => setMenuOpen(true)}>
                <img src={menuToggle} alt="Abrir menu" />
            </div>
            {!isMenuOpen ? (
                <div className="navbarLinks">
                    {linksMenu.map((link, key) => (
                        <div key={key} className="navbarCardLinks">
                            <a href={link.link} onClick={() => handleLinkClick(link.link)}>
                                {link.text}
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <NavbarMobile setMenuOpen={setMenuOpen} />
            )}
        </div>
    );

}
export default Navbar;
