import Carousel from 'react-bootstrap/Carousel';
import post1 from "../../assets/post1.jpg";
import arrow from "../../assets/next.png";
import "./carouselBlog.css";

const CarouselBlog = () => {
    return (
        <div className="carouselBlogContainer">
            <h1>Blog</h1>
            <p>Fique por dentro das últimas novidades, dicas e informações sobre cuidados com a visão em nosso blog. Acompanhe nossos artigos e esteja sempre bem informado.</p>
            <Carousel data-bs-theme="dark" controls={true} className="carouselBlogContent">
                <Carousel.Item>
                    <a href="/" className="carouselBlogItem">
                        <div className="carouselPostBlog">
                            <img src={post1} alt="Post 1" />
                            <h3>A importância das lentes de qualidade para a saúde ocular</h3>
                            <p>Sua visão merece o melhor: descubra por que lentes de qualidade são essenciais. Você sabia que as lentes dos seus óculos são muito mais do que simples pedaços de vidro? Na verdade, elas desempenham...</p>
                            <a href="/">
                                Leia mais <img src={arrow} alt="proximo" />
                            </a>
                        </div>

                        <div className="carouselPostBlog">
                            <img src={post1} alt="Post 2" />
                            <h3>A importância das lentes de qualidade para a saúde ocular</h3>
                            <p>Sua visão merece o melhor: descubra por que lentes de qualidade são essenciais. Você sabia que as lentes dos seus óculos são muito mais do que simples pedaços de vidro? Na verdade, elas desempenham...</p>
                            <a href="/">
                                Leia mais <img src={arrow} alt="proximo" />
                            </a>
                        </div>
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="/" className="carouselBlogItem">
                        <div className="carouselPostBlog">
                            <img src={post1} alt="Post 1" />
                            <h3>A importância das lentes de qualidade para a saúde ocular</h3>
                            <p>Sua visão merece o melhor: descubra por que lentes de qualidade são essenciais. Você sabia que as lentes dos seus óculos são muito mais do que simples pedaços de vidro? Na verdade, elas desempenham...</p>
                            <a href="/">
                                Leia mais <img src={arrow} alt="proximo" />
                            </a>
                        </div>

                        <div className="carouselPostBlog">
                            <img src={post1} alt="Post 2" />
                            <h3>A importância das lentes de qualidade para a saúde ocular</h3>
                            <p>Sua visão merece o melhor: descubra por que lentes de qualidade são essenciais. Você sabia que as lentes dos seus óculos são muito mais do que simples pedaços de vidro? Na verdade, elas desempenham...</p>
                            <a href="/">
                                Leia mais <img src={arrow} alt="proximo" />
                            </a>
                        </div>
                    </a>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default CarouselBlog;
