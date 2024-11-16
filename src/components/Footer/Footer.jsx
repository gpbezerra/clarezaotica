import "./footer.css"
import logo from "../../assets/yellowLogo.png"
import local from "../../assets/local.png";
import email from "../../assets/email.png"
import insta from "../../assets/insta.png"
import facebook from "../../assets/facebook.png"

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <div className="footerImg">
                    <img src={logo} alt="Logo Clareza" />
                </div>
                <div className="footerText">
                    <h2>Vamos conversar</h2>
                    <div className="footerTextRow">
                        <img id="footerLocalImg" src={local} alt="" />
                        <p>Rio de Janeiro, RJ</p>
                    </div>
                    <div className="footerTextRow">
                        <img id="footerEmailImg" src={email} alt="" />
                        <p>contato@clarezaotica.com.br</p>
                    </div>
                    <h2>Siga-nos nas redes sociais</h2>
                    <div className="footerSocialMedia">
                        <a href="https://www.instagram.com/clarezaotica/"><img src={insta} alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=61558935020053"><img src={facebook} alt="" /></a>
                    </div>
                </div>
            </div>
            <p id="footerRights">©Clareza Ótica Digital 2024. Todos os direitos reservados.</p>
        </div>
    );
};

export default Footer;
