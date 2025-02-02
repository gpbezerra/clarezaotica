import "./Partners.css";
import crizal from "../../assets/parceiros/crizal.png";
import essilor from "../../assets/parceiros/essilor.png";
import hoya from "../../assets/parceiros/hoya.png";
import rodenstock from "../../assets/parceiros/rodenstock.png";
import transitions from "../../assets/parceiros/transitions.png";
import zeiss from "../../assets/parceiros/zeiss.png";

const partners = [
    {
        name: "ZEISS",
        text: "Com mais de 170 anos de história, a Zeiss é reconhecida mundialmente pela sua tecnologia de ponta em lentes ópticas. Sendo uma das principais empresas de tecnologia médica do mundo, suas lentes são projetadas para proporcionar uma visão excepcional, combinando precisão e inovação. A parceria com a Zeiss nos permite oferecer aos nossos clientes lentes com qualidade inigualável e desempenho superior.",
        image:  zeiss 
    },
    {
        name: "RODENSTOCK",
        text: "A história de sucesso da Rodenstock é caracterizada por desenvolvimentos inovadores e tecnologias de lentes líderes de mercado. Fundada em 1877 e com sede em Munique, Alemanha, suas lentes permitem uma visão mais nítida para todos os ângulos e todos os olhares. Para conseguir isso, a Rodenstock determina a biometria de todo o olho para o cálculo da lente. Todos os dados biométricos relevantes fluem diretamente para o processo de produção de lentes - isso é único na indústria.",
        image:  rodenstock 
    },
    {
        name: "TRANSITIONS",
        text: "A Transitions é pioneira em lentes fotossensíveis, que se adaptam automaticamente às condições de iluminação, bloqueando 100% dos raios UVA e UVB e filtram a luz azul-violeta, em ambientes internos e ao ar livre, proporcionando conforto e proteção a todo momento. Nossa parceria permite que ofereçamos lentes que se ajustam às suas necessidades de forma dinâmica e eficaz.",
        image:  transitions 
    },
    {
        name: "ESSILOR",
        text: "A Essilor é líder mundial em lentes ópticas, oferecendo soluções inovadoras que melhoram a qualidade de vida através da visão. Com mais de 170 anos de expertise, a Essilor é conhecida por suas lentes que combinam tecnologia avançada e conforto.",
        image:  essilor 
    },
    {
        name: "HOYA",
        text: "A Hoya é uma marca globalmente renomada por sua expertise em lentes e inovação tecnológica. Com mais de 75 anos de experiência, a Hoya desenvolve lentes que combinam conforto e clareza visual com tecnologias avançadas. Nossa colaboração com a Hoya garante que você tenha acesso às mais recentes inovações em lentes.",
        image:  hoya 
    },
    {
        name: "CRIZAL",
        text: "A Crizal é renomada por suas lentes com proteção avançada contra arranhões, reflexos e sujeira. Com sua tecnologia de revestimento superior, a Crizal proporciona lentes mais duráveis e fáceis de manter, melhorando a clareza visual e o conforto.",
        image:  crizal 
    },
];

const Partners = () => {
    return (
        <>
            <div className="partners-container">
                <div className="partners-title">
                    <h1>Parceiros</h1>
                    <p>Na CLAREZA ÓTICA, temos o orgulho de trabalhar com as mais renomadas marcas de lentes do mercado, que são sinônimo de qualidade e inovação. Nossos parceiros são líderes na indústria óptica, oferecendo produtos que atendem aos mais altos padrões de excelência. Conheça um pouco mais sobre cada um deles:</p>
                </div>
                <div className="partners-content">
                    {partners.map((partner) => {
                        return (
                            <div className="partners-card">
                                <div className="partners-card-image">
                                    <img src={partner.image} alt={partner.name} />
                                </div>
                                <div className="partners-card-text">
                                    <h2>{partner.name}</h2>
                                    <p>{partner.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Partners;