import React, { useEffect, useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Como escolher a melhor lente para mim?",
      answer:
        "Para escolher a lente ideal, é importante considerar seu tipo de grau, as atividades diárias e o orçamento disponível. Nossos especialistas oferecem uma consultoria personalizada para entender suas necessidades específicas e indicar a melhor lente, garantindo que você obtenha o máximo de conforto e clareza visual.",
    },
    {
      question: "É difícil se adaptar aos óculos multifocais?",
      answer:
        "Para facilitar a adaptação aos óculos multifocais, considere as seguintes dicas: A qualidade da lente é crucial para uma adaptação bem-sucedida. Lentes de alta qualidade tendem a ter um custo mais elevado, mas a boa notícia é que estão se tornando cada vez mais acessíveis. Quando começamos a usar lentes corretivas, nosso cérebro precisa se ajustar à nova forma como as imagens são percebidas. O processo de adaptação pode variar de pessoa para pessoa e de lente para lente. Por isso, é importante ter paciência e persistir. Se desistir logo de início, pode não conseguir se adaptar adequadamente ao multifocal. Nos primeiros dias, pode ser mais difícil realizar atividades como descer escadas ou manobrar o carro. Tente evitar essas tarefas até se sentir mais confortável com seus novos óculos. Os óculos multifocais têm uma dinâmica diferente dos óculos monofocais. Assim como com qualquer novo dispositivo, é necessário aprender a usá-lo corretamente. Para ajustar sua visão, mova os olhos, não a cabeça, e mantenha os óculos bem posicionados no rosto. Algumas lentes multifocais são projetadas para priorizar a visão de longe, intermediária ou de perto. Consulte seu oftalmologista para escolher a lente mais adequada para suas necessidades e atividades. As medidas da distância pupilar e da altura de montagem são essenciais para a fabricação das lentes. Certifique-se de que essas informações estejam na sua receita ocular. A altura da armação é um fator importante para os óculos multifocais. Armações com menos de 14 mm de altura podem dificultar a adaptação. Um exame de refração bem realizado é fundamental para um ajuste adequado. Procure um oftalmologista que faça um exame detalhado e cuidadoso. As lentes multifocais possuem um 'corredor de visão' que diminui à medida que o grau muda de longe para perto. Os fabricantes estão constantemente trabalhando para criar lentes com corredores de visão mais amplos, oferecendo um campo de visão maior e uma adaptação mais rápida. Lentes de qualidade ajudam a reduzir movimentos desnecessários da cabeça, proporcionando uma visualização mais natural e confortável.",
    },
    {
      question: "Qual a diferença entre lentes progressivas e lentes multifocais?",
      answer:
        "Todas as lentes multifocais são progressivas, mas nem toda lente progressiva é considerada multifocal. Lentes progressivas oferecem uma transição suave entre diferentes distâncias de visão, enquanto lentes multifocais são desenhadas para corrigir múltiplos tipos de visão (perto e longe) em um único par de óculos.",
    },
    {
      question: "Vale a pena colocar lentes fotocromáticas?",
      answer:
        "Sim, lentes fotocromáticas são uma excelente escolha para quem precisa de proteção contra a luz solar e prefere não trocar de óculos ao mudar de ambiente. Essas lentes ajustam sua cor conforme a intensidade da luz, oferecendo conforto e proteção o dia todo.",
    },
    {
      question: "Qual material de lente devo escolher?",
      answer:
        "A escolha do material depende do grau e das necessidades pessoais. Lentes de resina são leves e comuns, mas podem arranhar. Policarbonato e Trivex são mais resistentes e leves, enquanto lentes de Alto Índice são ideais para graus elevados, proporcionando uma visão clara sem aumentar a espessura das lentes.",
    },
    {
      question: "Como saber se as lentes são verdadeiras?",
      answer:
        "Para garantir a autenticidade das lentes, verifique as marcações invisíveis à luz ou peça ao seu oftalmologista para confirmar. Além disso, solicite o selo de autenticidade e garantia no momento da compra para garantir que você está recebendo um produto genuíno.",
    },
    {
      question: "Qual a armação correta para meus óculos multifocais e para o meu rosto?",
      answer:
        "Para óculos multifocais, escolha armações com altura mínima de 14 mm para garantir um campo de visão adequado. Armações muito pequenas podem dificultar a adaptação. Considere também a estabilidade da armação para evitar deformações que possam afetar a visão.",
    },
    {
      question: "Como entender uma receita de óculos?",
      answer:
        "A receita inclui informações sobre graus de miopia, hipermetropia, astigmatismo e presbiopia. As siglas OD e OE referem-se ao olho direito e esquerdo, respectivamente. O grau esférico indica miopia (-) ou hipermetropia (+), e o cilindro indica astigmatismo. Verifique também a distância pupilar (DP) e quaisquer recomendações adicionais do oftalmologista.",
    },
    {
      question: "Como vocês tiram as medidas?",
      answer:
        "Utilizamos o VisioXpert, uma tecnologia avançada que permite capturar suas medidas de forma precisa e na comodidade da sua casa, por meio de uma simples foto.",
    },
    {
      question: "Como devo cuidar dos meus óculos?",
      answer:
        "Lave as lentes com sabão neutro e água corrente, e use um pano macio para secá-las. Evite exposições a calor intenso e use sempre o estojo para proteger seus óculos. Limpe com cuidado e evite produtos abrasivos ou álcool.",
    },
    {
      question: "Por que eu deveria comprar os meus óculos na Clareza?",
      answer:
        "Na Clareza, você encontra lentes de alta qualidade das melhores marcas, com consultoria especializada, preços competitivos e um atendimento personalizado. Garantimos um serviço completo e suporte durante toda a sua adaptação.",
    },
    {
      question: "Quais as formas de pagamento oferecidas?",
      answer: "Aceitamos pagamentos em cartões de crédito (em até 10x sem juros), PIX ou transferência bancária",
    },
    {
      question: "Como comprar?",
      answer:
        "Para comprar, basta selecionar os produtos desejados, preencher as informações necessárias, escolher a forma de pagamento e confirmar o pedido. Nossa equipe está à disposição para qualquer dúvida durante o processo.",
    },
    {
      question: "As entregas são feitas para todo o Brasil?",
      answer:
        "Sim, entregamos em todo o território nacional, sendo que entregamos pessoalmente nos principais bairros do Rio de Janeiro e Niterói",
    },
    {
      question: "Qual o prazo de entrega?",
      answer:
        "O prazo de entrega depende da localização e do tipo de lente escolhida. Entre em contato conosco para obter uma estimativa precisa.",
    },
    {
      question: "Preciso enviar uma cópia da minha receita para produzir lentes de grau?",
      answer:
        "Sim, a legislação brasileira exige que toda lente corretiva seja produzida com uma receita médica válida, que deve ser enviada ao fazer o pedido.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow');
            }
        });
    });

    const cards = document.querySelectorAll('.faq-item');
    cards.forEach(card => observer.observe(card));

    return () => {
        cards.forEach(card => observer.unobserve(card));
    };
}, []);

  return (
    <div className="faq-container">
      <h1>Dúvidas frequentes</h1>
      <div className="faq-accordion">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span className={`arrow ${activeIndex === index ? "up" : "down"}`}>
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;