import { useEffect } from "react";
import post1 from "../../assets/post1_banner.jpg";
import post2 from "../../assets/post2_banner.jpg";
import post3 from "../../assets/post3_banner.jpg";
import "./Blog.css";

const posts = [
    {
        img:  post1,
        title: "A importância das lentes de qualidade para a saúde ocular",
        sub_title: "Sua visão merece o melhor: descubra por que lentes de qualidade são essenciais",
        link: "/blog/post-10-12-2024",
        date: "10 de dezembro de 2024"
    },
    {
        img:  post2,
        title: "Proteção AntiBlue: Cuidando dos seus olhos na era digital",
        sub_title: "Seus olhos merecem proteção na era das telas: descubra a importância da tecnologia AntiBlue",
        link: "/blog/post-21-09-2024",
        date: "21 de novembro de 2024"
    },
    {
        img:  post3,
        title: "Lentes personalizadas para diferentes profissões: Qual a melhor para você?",
        sub_title: "Visão clara e confortável no trabalho: descubra as lentes ideais para sua profissão",
        link: "/blog/post-02-09-2024",
        date: "02 de novembro de 2024"
    },
]

const Blog = () => {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow');
                }
            });
        });

        const cards = document.querySelectorAll('.blogDeckCard');
        cards.forEach(card => observer.observe(card));

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, []);

    return (
        <div className="blogContainer">
            <h1>Blog</h1>
            <p>Fique por dentro das últimas novidades, dicas e informações sobre cuidados com a visão em nosso blog. Acompanhe nossos artigos e esteja sempre bem informado.</p>
            <div className="blogDeckCard">
                {posts.map((post, key) => (
                    <div key={key} className="blogCard">
                        <img src={post.img} alt={post.title} />
                        <div className="blogCardText">
                            <h2>{post.title}</h2>
                            <p>{post.sub_title}</p>
                            <p><strong>{post.date}</strong></p>
                            <a href={post.link} className="readMoreButton">Leia mais</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;