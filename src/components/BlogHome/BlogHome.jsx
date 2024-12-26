import "./blogHome.css";
import post1 from "../../assets/post1_banner.jpg";
import post2 from "../../assets/post2_banner.jpg";
import post3 from "../../assets/post3_banner.jpg";

const posts = [
    {
        img:  post1,
        title: "A importância das lentes de qualidade para a saúde ocular",
        sub_title: "Sua visão merece o melhor: descubra por que lentes de qualidade são essenciais",
        link: "/development",
        date: "10 de dezembro de 2024"
    },
    {
        img:  post2,
        title: "Proteção AntiBlue: Cuidando dos seus olhos na era digital",
        sub_title: "Seus olhos merecem proteção na era das telas: descubra a importância da tecnologia AntiBlue",
        link: "/development",
        date: "21 de novembro de 2024"
    },
    {
        img:  post3,
        title: "Lentes personalizadas para diferentes profissões: Qual a melhor para você?",
        sub_title: "Visão clara e confortável no trabalho: descubra as lentes ideais para sua profissão",
        link: "/development",
        date: "02 de novembro de 2024"
    },
]


const BlogHome = () => {
    return (
        <div className="blogHomeContainer">
            <h1>Blog</h1>
            <p>Fique por dentro das últimas novidades, dicas e informações sobre cuidados com a visão em nosso blog. Acompanhe nossos artigos e esteja sempre bem informado.</p>
            <div className="blogHomeDeckCard">
                {posts.map((post, key) => {
                    return (
                        <a href={post.link} key={key} className="blogHomeCard">
                                <img src={post.img} alt={post.title} />

                            <div className="blogHomeCardText">
                                <h2>{post.title}</h2>
                                <p>{post.sub_title}</p>
                                <p>{post.date}</p>
                            </div>
                        </a>
                    );
                })}
            </div>
                <a id="buttonCatalog" href="/development">Acessar blog</a>
        </div>
    );
};

export default BlogHome;
