import React from 'react';
import "./Post.css";
import image_1 from "../../../assets/post/post-1-image-1.jpg";
import image_2 from "../../../assets/post/post-1-image-2.jpg";

const Post1 = () => {
    return (
        <div className="post-container">
            <div className="post-content">
                <h1 className="post-title">A importância das lentes de qualidade para a saúde ocular</h1>
                <h2 className="post-subtitle">Sua visão merece o melhor: descubra por que lentes de qualidade são essenciais</h2>
                <p className="post-text">
                    Você sabia que as <strong>lentes dos seus óculos</strong> são muito mais do que simples pedaços de vidro? Na verdade, elas desempenham um papel crucial na <strong>saúde dos seus olhos</strong>. A Clareza Ótica, especialista em lentes de marca com preços acessíveis, explica por que investir em <strong>lentes de qualidade</strong> é fundamental para o seu bem-estar visual.
                </p>
                <div className="image-container">
                    <img src={image_1} alt="Proteção contra raios UV e luz azul" className="post-image" />
                </div>
                <h3 className="post-section-title">Proteção contra raios UV e luz azul</h3>
                <p className="post-text">
                    Lentes de alta qualidade oferecem <strong>proteção contra raios UV</strong> e <strong>luz azul nociva</strong> emitida por dispositivos eletrônicos. Essa proteção é essencial para prevenir danos à retina e reduzir o risco de desenvolver problemas oculares a longo prazo.
                </p>
                <div className="image-container">
                    <img src={image_2} alt="Clareza visual incomparável" className="post-image" />
                </div>
                <h3 className="post-section-title">Clareza visual incomparável</h3>
                <p className="post-text">
                    Com lentes premium, você experimenta uma <strong>nitidez visual excepcional</strong>. Isso não apenas melhora sua qualidade de vida, mas também reduz a fadiga ocular e as dores de cabeça associadas ao esforço visual excessivo.
                </p>
                <h3 className="post-section-title">Durabilidade e resistência</h3>
                <p className="post-text">
                    Lentes de qualidade são mais <strong>resistentes a arranhões e impactos</strong>, garantindo que seus óculos durem mais e mantenham sua eficácia ao longo do tempo. Isso significa menos trocas e, consequentemente, economia a longo prazo.
                </p>
                <h3 className="post-section-title">Adaptação personalizada para suas necessidades</h3>
                <p className="post-text">
                    Na Clareza Ótica, entendemos que cada pessoa tem necessidades visuais únicas. Por isso, oferecemos <strong>lentes personalizadas</strong> que se adaptam perfeitamente ao seu estilo de vida, seja você um profissional que passa horas em frente ao computador ou um entusiasta de atividades ao ar livre.
                </p>
                <h3 className="post-section-title">Invista na sua saúde ocular hoje</h3>
                <p className="post-text">
                    Não comprometa sua visão. Escolha lentes de qualidade da Clareza Ótica e experimente a diferença na sua <strong>saúde ocular</strong> e qualidade de vida. Visite-nos hoje e descubra como podemos ajudá-lo a cuidar dos seus olhos com as melhores lentes do mercado a preços acessíveis.
                </p>
            </div>
        </div>
    );
};

export default Post1;