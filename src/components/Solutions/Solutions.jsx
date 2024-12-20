import "./solutions.css";
import solutions1 from "../../assets/solutions1.png"
import solutions2 from "../../assets/solutions2.png" 
import solutions3 from "../../assets/solutions3.png" 
import solutions4 from "../../assets/solutions4.png" 

const solutions = [
    {
        img:  solutions1,
        title: "Consultoria personalizada",
        description: "Oferecemos uma consultoria dedicada a entender o seu caso, suas limitações, rotina e preferências. Nosso objetivo é indicar a melhor lente de acordo com o seu orçamento, garantindo que você tenha a solução mais adequada para suas necessidades visuais.",
    },
    {
        img:  solutions2,
        title: "Medidas",
        description: "Para garantir que suas medidas sejam tiradas de forma extremamente precisa e na comodidade da sua casa, utilizamos o VisioXpert. Essa tecnologia avançada nos permite, a partir de uma foto, obter todas as suas medidas de forma precisa, assegurando um ajuste perfeito das lentes.",
    },
    {
        img:  solutions3,
        title: "Entrega e Ajuste",
        description: "Entregamos seus óculos pessoalmente nos principais bairros do Rio de Janeiro e Niterói. Além disso, fazemos o ajuste dos óculos diretamente em você e fornecemos todas as indicações necessárias para uma adaptação tranquila e confortável.",
    },
    {
        img:  solutions4,
        title: "Excelência garantida",
        description: "Garantimos a excelência e o selo de qualidade de todas as lentes. Na CLAREZA ÓTICA, você pode confiar na qualidade e durabilidade de todos os produtos oferecidos, que acompanham nota fiscal e garantia.",
    },
]

const Solutions = () => {
    return (
        <div className="solutionsContainer">
           <h1>Nossas Soluções</h1>
           <div className="solutionsCardDeck">
            {solutions.map((solution, key) => {
                return (
                    <div key={key} className="solutionsCard">
                        <div className="solutionsCardImage" style={{ backgroundImage: `url(${solution.img})` }}>
                            <div className="solutionsCardText">
                                <h2>{solution.title}</h2>
                                <p>{solution.description}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
           </div>
        </div>
    );
};

export default Solutions;
