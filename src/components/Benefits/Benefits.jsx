import { useEffect } from 'react';
import './benefits.css';
import consultoria from "../../assets/consultoria.png";
import suporte from "../../assets/suporte.png";
import marcas from "../../assets/marcas.png";
import valores from "../../assets/valores.png";
import Carousel from 'react-bootstrap/Carousel';


const cards = [
    {
        image: consultoria,
        title: "Consultoria com Especialistas",
        text: "Nossa equipe de especialistas está pronta para ajudar você a escolher as lentes ideais para sua visão, oferecendo uma consultoria personalizada e profissional."
    },
    {
        image: suporte,
        title: "Suporte Durante sua Adaptação",
        text: "Estamos ao seu lado em cada etapa do processo de adaptação, garantindo que você se sinta confortável e satisfeito com suas novas lentes."
    },
    {
        image: marcas,
        title: "Marcas com Selos de Qualidade",
        text: "Trabalhamos apenas com marcas que possuem reconhecidos selos de qualidade, assegurando a você produtos confiáveis e duráveis."
    },
    {
        image: valores,
        title: "Valores Abaixo do Mercado",
        text: "Oferecemos lentes de alta qualidade com preços até 25% abaixo do mercado, proporcionando economia sem comprometer a excelência."
    },
];

const Benefits = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
                }
            });
        });

        const cards = document.querySelectorAll('.benefitsCard');
        cards.forEach(card => observer.observe(card));

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, []);

    return (
        <div className='benefitsContainer'>
            <h1>Benefícios</h1>
            <div className='benefitsCardDeck'>
                {cards.map((card, key) => (
                    <div
                        className='benefitsCard'
                        key={key}
                        style={{ animationDelay: `${key * 0.2}s` }} // Adiciona delay dinâmico
                    >
                        <div className='benefitsCardContent'>
                            <img src={card.image} alt={card.title} />
                            <h2>{card.title}</h2>
                            <p>{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* TODO: ARRUMAR CSS DOS ITEMS  */}
            <div className='benefitsCarousel'>
                <Carousel controls={false}>
                    {cards.map((card, key) => {
                        return (
                            <Carousel.Item key={key} className='benefitsCarouselItem'>
                                <Carousel.Caption>
                                    <h2>{card.title}</h2>
                                    <div className='benefitsCarouselContent'>
                                        <p>{card.text}</p>
                                        <img src={card.image} alt={card.title} />
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}

                </Carousel>
            </div>
        </div>
    );
};

export default Benefits;
