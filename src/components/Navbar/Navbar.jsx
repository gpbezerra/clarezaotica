import React, { useState } from "react";
import "./navbar.css";
import whiteLogo from "../../assets/whiteLogo.png";
import { NavLink } from "react-router-dom";
import menuToggle from "../../assets/menuToggle.svg"

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const links = [
        { link: "/sobrenos", text: "Sobre nós" },
        { link: "/catalogo", text: "Catálogo" },
        { link: "/parceiros", text: "Parceiros" },
        { link: "/duvidas", text: "Dúvidas frequentes" },
        { link: "/contato", text: "Contato" },
        { link: "/blog", text: "Blog" },
    ];

    return (
        <div className="navbarContainer">
            <NavLink exact to="/">
                <img src={whiteLogo} alt="Logo" />
            </NavLink>
            <div className="menuToggle" onClick={() => setMenuOpen(!isMenuOpen)}>
                <img src={menuToggle} alt="" srcset="" />
            </div>
            <div className={`navbarLinks ${isMenuOpen ? "open" : ""}`}>
                {links.map((link, key) => (
                    <div key={key} className="navbarCardLinks">
                        <NavLink exact to={link.link} activeClassName="activeLink">
                            {link.text}
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
