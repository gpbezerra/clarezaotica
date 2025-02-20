import './glasses.css';
import glassesImage from '../../assets/glassesImage.png'; 
import { useEffect } from 'react';

const Glasses = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__backInUp', 'animate__slow');
                }
            });
        });

        const cards = document.querySelectorAll('.glassesContainer');
        cards.forEach(card => observer.observe(card));

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, []); 

    return (
        <div className="glassesContainer">
            <img src={glassesImage} alt="" />
            <a id='buttonCatalog' href="/catalogo">Confira nosso catálogo</a>

        </div>
    );
};

export default Glasses;
