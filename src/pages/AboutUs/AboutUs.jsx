import foto1 from "../../assets/sobre-nos/foto-cida-1.jpg"
import foto2 from "../../assets/sobre-nos/foto-cida-2.jpg"
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <>
            <div className="aboutUs-container">
                <div className="aboutUs-content-1">
                    <div className="aboutUs-content-1-text">
                        <h1>Sobre nós</h1>
                        <p>Cida Araújo, capixaba com alma carioca, é apaixonada por esportes, viagens e natureza. Com o objetivo de enxergar melhor cada segundo da vida, e ajudar outras pessoas a fazerem o mesmo, entrou  no mercado óptico em 2006.</p>
                        <p>Em 2024, buscando oferecer ainda mais conforto e comodidade para seus clientes, criou a CLAREZA ÓTICA, pioneira em oferecer apenas as melhores marcas de lentes, com valores 25% abaixo do mercado, através de negociações estratégicas com as empresas ópticas</p>
                    </div>
                    <div className="aboutUs-content-1-image">
                        <img src={foto2} alt="Imagem cida Araújo" />
                    </div>
                </div>

                <div className="aboutUs-content-1">
                    <div className="aboutUs-content-2-image">
                        <img src={foto1} alt="Imagem cida Araújo" />
                    </div>
                    <div className="aboutUs-content-1-text">
                        <h1>Experiência no mercado</h1>
                        <p>Cida atuou no mercado de ótica em loja presencial por mais de 15 anos. Com uma vasta experiência em lentes para óculos, lentes de contato e armações, ela enxergou um diferencial neste nicho para o futuro.</p>
                        <p>Para transformar essa visão em realidade, convidou Rosilene, que trabalhou na área de serviço de oftalmologia por 12 anos ao lado de médicos experientes e clínicas reconhecidas no Rio de Janeiro </p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AboutUs;