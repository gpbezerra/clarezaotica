import { useState } from "react";
import "./catalog.css"
import lenses from "../../assets/lenses.png"


const glassesObject = [
    {
        image: lenses,
        name: "Lentes Multifocais",
        text: "Tecnologia avançada para visão nítida em todas as distâncias. Nossas lentes multifocais oferecem conforto visual e adaptação rápida, proporcionando uma experiência visual sem igual para usuários de todas as idades.",
        show: true
    },
    {
        image: lenses,
        name: "Lentes Fotocromáticas",
        text: "Proteção UV e conforto visual em qualquer ambiente. Estas lentes inteligentes se adaptam automaticamente à luz, escurecendo ao ar livre e clareando em ambientes internos, combinando praticidade e estilo em um único produto",
        show: false
    },
    {
        image: lenses,
        name: "Lentes infantis",
        text: "Proteção essencial contra a luz azul nociva de dispositivos eletrônicos. Nossas lentes AntiBlue reduzem a fadiga visual e melhoram o conforto durante o uso prolongado de telas, preservando sua saúde ocular na era digital.",
        show: false
    },
    {
        image: lenses,
        name: "Lentes AntiBlue",
        text: "Proteção essencial contra a luz azul nociva de dispositivos eletrônicos. Nossas lentes AntiBlue reduzem a fadiga visual e melhoram o conforto durante o uso prolongado de telas, preservando sua saúde ocular na era digital.",
        show: false
    },
];

const Catalog = () => {
    const [glasses, setGlasses] = useState(glassesObject);

    function handleGlasses(selectedGlass) {
        setGlasses(prevGlasses =>
            prevGlasses.map(glass => ({
                ...glass,
                show: glass.name === selectedGlass.name
            }))
        );
    }

    return (
        <div className="catalogContainer">
            <h1>Encontre a solução ideal para você</h1>
            <p>Na CLAREZA ÓTICA, sabemos que cada pessoa é única. Por isso, oferecemos uma variedade de lentes que atendem às suas necessidades específicas. Explore nosso catálogo e descubra a solução perfeita para sua visão</p>
            <div className="catalogContent">
                <div className="catalogContentSelector">
                    <h3>Nossas lentes</h3>
                    <div className="catalogSelector">
                    {glasses.map((glass, key) => (
                        <button id={glass.show ? "catalogButtonSelected" : "catalogButton"}  onClick={() => handleGlasses(glass)} key={key}>{glass.name}</button>
                    ))}
                    </div>
                </div>
                <div className="catalogContentData">
                    {glasses.filter(glass => glass.show).map((glass, index) => (
                        <>
                            <div className="catalogContentImage" key={index}>
                            <img src={glass.image} alt={glass.name} />
                            </div>

                            <div className="catalogContentText" key={index}>
                                <h3>{glass.name}</h3>
                                <p>{glass.text}</p>
                                <a id="buttonCatalog" href="/development">Confira nosso catálogo</a>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
