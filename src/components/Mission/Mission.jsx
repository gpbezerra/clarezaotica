import "./mission.css";
import 'animate.css';
import logo from "../../assets/yellowLogo.png";

const Mission = () => {
    return (
        <div className="missionContainer">
            <div className="missionText">
                <p>Nossa missão é proporcionar a você uma visão clara e confortável, utilizando apenas as melhores marcas de lentes do mercado. </p>
                <p>Especialistas em Zeiss, Hoya, Rodenstock e Essilor, oferecemos uma consultoria personalizada para encontrar a solução ideal para suas necessidades visuais, tudo com um atendimento diferenciado e preços competitivos</p>
            </div>
            <div  className="missionImage animate__animated animate__backInRight animate__delay-1s">
                <img src={logo} alt="Logo clareza óticaa" />
            </div>
        </div>
    );
}

export default Mission;
