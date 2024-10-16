import "./products.css";
import essilor from "../../assets/essilor.png";
import zeiss from "../../assets/zeiss.png";
import rodenstock from "../../assets/rodenstock.png";
import hoya from "../../assets/hoya.png";
import transitions from "../../assets/transitions.png";


const Products = () => {
    return (
        <>
            <div className="productsContainer">
                <div className="productsText">
                    <h1>Produtos Inovadores</h1>
                    <p>Na CLAREZA ÓTICA, oferecemos acesso às melhores e mais inovadoras marcas de lentes do mercado. Trabalhamos com Zeiss, Hoya, Rodenstock e Essilor para garantir que você tenha à sua disposição lentes de alta qualidade que proporcionam uma visão clara e confortável. Com tecnologias de ponta, nossas lentes são projetadas para atender às suas necessidades visuais específicas, oferecendo nitidez, durabilidade e conforto.</p>
                    <a href="">Confira nosso catálogo</a>
                </div>

                <div className="animate__animated animate__fadeInUp productsImages">
                    <img src={essilor} alt="Essilor logo" />
                    <img src={zeiss} alt="Zeiss logo" />
                    <img src={rodenstock} alt="Rodenstock logo" />
                    <img src={hoya} alt="Hoya logo" />
                    <img id="transitionsLogo" src={transitions} alt="Transitions logo" />
                </div>
            </div>
            <div className="productsContainerMobile">
                <h1>Produtos Inovadores</h1>
                <p>Na CLAREZA ÓTICA, oferecemos acesso às melhores e mais inovadoras marcas de lentes do mercado. Trabalhamos com Zeiss, Hoya, Rodenstock e Essilor para garantir que você tenha à sua disposição lentes de alta qualidade que proporcionam uma visão clara e confortável. Com tecnologias de ponta, nossas lentes são projetadas para atender às suas necessidades visuais específicas, oferecendo nitidez, durabilidade e conforto.</p>

                <div className="animate__animated animate__fadeInUp productsImagesMobile">
                    <img src={essilor} alt="Essilor logo" />
                    <img src={zeiss} alt="Zeiss logo" />
                    <img id="rodenstockLogo" src={rodenstock} alt="Rodenstock logo" />
                    <img id="hoyaLogo" src={hoya} alt="Hoya logo" />
                    <img id="transitionsLogo" src={transitions} alt="Transitions logo" />
                </div>

                <a href="">Confira nosso catálogo</a>

            </div>

        </>


    );
}

export default Products;
