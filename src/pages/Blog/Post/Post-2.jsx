import React from 'react';
import "./Post.css";
import image_1 from "../../../assets/post/post-2-image-1.jpg";
import image_2 from "../../../assets/post/post-2-image-2.jpg";

const Post2 = () => {
    return (
        <div className="post-container">
            <div className="post-content">
                <h1 className="post-title">Proteção AntiBlue: Cuidando dos seus olhos na era digital</h1>
                <h2 className="post-subtitle">Seus olhos merecem proteção na era das telas: descubra a importância da tecnologia AntiBlue</h2>
                <p className="post-text">
                    Na era digital, passamos horas diante de <strong>dispositivos eletrônicos</strong>, expondo nossos olhos a níveis elevados de <strong>luz azul</strong>. A Clareza Ótica apresenta a solução ideal para proteger sua visão: a <strong>tecnologia AntiBlue</strong>. Entenda por que essa proteção é essencial para sua <strong>saúde ocular</strong>.
                </p>
                <div className="image-container">
                    <img src={image_1} alt="Proteção AntiBlue para telas" className="post-image" />
                </div>
                <h3 className="post-section-title">Por que a luz azul é prejudicial?</h3>
                <p className="post-text">
                    A exposição prolongada à <strong>luz azul</strong> pode causar <strong>fadiga ocular</strong>, distúrbios do sono e, a longo prazo, danos à retina. As lentes com tecnologia AntiBlue filtram essa luz nociva, reduzindo os riscos e proporcionando maior conforto visual.
                </p>
                <div className="image-container">
                    <img src={image_2} alt="Lentes com tecnologia AntiBlue" className="post-image" />
                </div>
                <h3 className="post-section-title">Benefícios das lentes AntiBlue</h3>
                <p className="post-text">
                    Com as lentes AntiBlue, você experimenta uma <strong>proteção superior</strong>, garantindo:
                </p>
                <ul className="post-list">
                    <li>Redução da fadiga ocular durante o uso prolongado de dispositivos.</li>
                    <li>Melhora na qualidade do sono, minimizando a interferência da luz azul.</li>
                    <li>Prevenção de danos oculares a longo prazo.</li>
                </ul>
                <h3 className="post-section-title">A Clareza Ótica cuida da sua visão</h3>
                <p className="post-text">
                    Na Clareza Ótica, nos dedicamos a oferecer o melhor em <strong>lentes de qualidade</strong> com tecnologia avançada, como o filtro AntiBlue, para proteger seus olhos e melhorar sua qualidade de vida. 
                </p>
                <h3 className="post-section-title">Cuide dos seus olhos hoje</h3>
                <p className="post-text">
                    Proteja sua visão com as lentes AntiBlue da Clareza Ótica. Visite-nos e descubra como podemos ajudar você a enfrentar a era digital com conforto e segurança.
                </p>
            </div>
        </div>
    );
};

export default Post2;
