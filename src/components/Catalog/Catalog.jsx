import { useState } from "react";
import "./catalog.css"
import lenses from "../../assets/lenses.png"


const glassesObject = [
    {
        image: lenses,
        name: "Lente 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        show: true
    },
    {
        image: lenses,
        name: "Lente 2",
        text: "sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
                    {glasses.map((glass, key) => (
                        <button id={glass.show ? "catalogButtonSelected" : "catalogButton"}  onClick={() => handleGlasses(glass)} key={key}>{glass.name}</button>
                    ))}
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
                                <a href="/catalogo">Confira nosso catálogo</a>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
