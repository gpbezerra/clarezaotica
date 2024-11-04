import { useState } from "react";

const glassesObject = [
    {
        image: {},
        name: "Lente 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        show: true
    },
    {
        image: {},
        name: "Lente 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        show: false
    },
];

const Catalog = () => {
    const [glasses, setGlasses] = useState(glassesObject);

    function handleGlasses(glass) {
        console.log(glass);
    }

    return (
        <div className="CatalogContainer">
            <h1>Encontre a solução ideal para você</h1>
            <p>Na CLAREZA ÓTICA, sabemos que cada pessoa é única. Por isso, oferecemos uma variedade de lentes que atendem às suas necessidades específicas. Explore nosso catálogo e descubra a solução perfeita para sua visão</p>
            <div className="CatalogContent">
                <div className="CatalogContentSelector">
                    <h3>Nossas lentes</h3>
                    {glassesObject.map((glass, key) => (
                        <button onClick={() => handleGlasses(glass)} key={key}>{glass.name}</button>
                    ))}
                </div>
                <div>
                    {glasses.filter(glass => glass.show).map((glass, index) => (
                        <div key={index}>
                            <h1>{glass.name}</h1>
                            <p>{glass.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
