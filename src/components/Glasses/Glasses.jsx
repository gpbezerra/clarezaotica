import './glasses.css';
import glassesImage from '../../assets/glassesImage.png'; 

const Glasses = () => {
    return (
        // <div className="glassesContainer">
        //         <span className="leftText">Enxergue a sua vida</span>
        //         <span className="rightText">com mais Clareza</span>
        //     <img src={glassesImage} alt="Imagem óculos" className="glassesImage" />
        // </div>
        <div className="glassesContainer">
            <img src={glassesImage} alt="" />
            <a href="">Confira nosso catálogo</a>

        </div>
    );
};

export default Glasses;
