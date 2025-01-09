import React, { useState } from "react";
import "./navbar.css";
import whiteLogo from "../../assets/whiteLogo.png";
import { NavLink } from "react-router-dom";
import menuToggle from "../../assets/menuToggle.svg"
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { links } from "../../utils/options";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const linksMenu = links.slice(1);

    return (
        <div className="navbarContainer">
            <NavLink to="/clarezaotica">
                <img src={whiteLogo} alt="Logo" />
            </NavLink>
            <div className="menuToggle" onClick={() => setMenuOpen(true)}>
                <img src={menuToggle} alt="Abrir menu"/>
            </div>
            {
                !isMenuOpen ?
                <div className="navbarLinks">
                    {linksMenu.map((link, key) => (
                        <div key={key} className="navbarCardLinks">
                            <NavLink to={link.link} activeclassname="activeLink">
                                {link.text}
                            </NavLink>
                        </div>
                    ))}
                </div>
                :
                <NavbarMobile setMenuOpen={setMenuOpen}/>
            }

        </div>
    );
}

export default Navbar;
