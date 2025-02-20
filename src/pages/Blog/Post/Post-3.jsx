import React from 'react';
import "./Post.css";
import image_1 from "../../../assets/post/post-3-image-1.jpg";
import image_2 from "../../../assets/post/post-3-image-2.jpg";

const Post3 = () => {
    return (
        <div className="post-container">
            <div className="post-content">
                <h1 className="post-title">Lentes personalizadas para diferentes profissões: Qual a melhor para você?</h1>
                <h2 className="post-subtitle">Visão clara e confortável no trabalho: descubra as lentes ideais para sua profissão</h2>
                <p className="post-text">
                    Cada profissão tem suas próprias demandas visuais. Na Clareza Ótica, entendemos que <strong>lentes personalizadas</strong> podem fazer toda a diferença no seu desempenho e conforto diário. Vamos explorar as melhores opções de lentes para diferentes carreiras.
                </p>
                <div className="image-container">
                    <img src={image_1} alt="Lentes personalizadas para profissionais" className="post-image" />
                </div>
                <h3 className="post-section-title">Profissionais de tecnologia e escritórios</h3>
                <p className="post-text">
                    Se você trabalha muitas horas na frente do computador, lentes com <strong>filtro AntiBlue</strong> são essenciais para proteger seus olhos da luz azul emitida pelas telas. Além disso, lentes com <strong>tratamento antirreflexo</strong> ajudam a reduzir o brilho, proporcionando mais conforto.
                </p>
                <h3 className="post-section-title">Profissionais de saúde</h3>
                <p className="post-text">
                    Profissionais de saúde precisam de <strong>lentes resistentes a impactos e arranhões</strong>, além de opções que facilitem a visão nítida em diferentes distâncias. Lentes multifocais podem ser uma excelente escolha para quem lida com leitura frequente e movimentos rápidos do olhar.
                </p>
                <div className="image-container">
                    <img src={image_2} alt="Lentes para profissionais de saúde" className="post-image" />
                </div>
                <h3 className="post-section-title">Profissionais que trabalham ao ar livre</h3>
                <p className="post-text">
                    Para quem passa grande parte do tempo ao ar livre, as lentes com <strong>proteção UV</strong> são indispensáveis. Opções fotossensíveis, que escurecem sob a luz solar, oferecem proteção e conforto em qualquer ambiente.
                </p>
                <h3 className="post-section-title">Artistas e designers</h3>
                <p className="post-text">
                    Artistas e designers precisam de <strong>lentes que ofereçam alta definição de cores</strong> e clareza visual. Tratamentos antirreflexo e lentes de alta precisão ajudam a garantir uma visão sem distorções, essencial para trabalhos detalhados.
                </p>
                <h3 className="post-section-title">Escolha suas lentes com a Clareza Ótica</h3>
                <p className="post-text">
                    Na Clareza Ótica, oferecemos uma ampla gama de <strong>lentes personalizadas</strong> para atender às necessidades específicas de cada profissão. Conte conosco para ajudá-lo a encontrar a solução ideal para sua visão e conforto no trabalho.
                </p>
                <h3 className="post-section-title">Cuide da sua visão e melhore seu desempenho</h3>
                <p className="post-text">
                    Não comprometa sua produtividade e bem-estar. Invista em lentes personalizadas da Clareza Ótica e sinta a diferença no seu dia a dia profissional.
                </p>
            </div>
        </div>
    );
};

export default Post3;
