import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import Glasses from "../../components/Glasses/Glasses";
import Mission from "../../components/Mission/Mission";
import Products from "../../components/Products/Products";
import Benefits from "../../components/Benefits/Benefits";
import Catalog from "../../components/Catalog/Catalog";
import Footer from "../../components/Footer/Footer";
import CarouselBlog from "../../components/CaruselBlog/CarouselBlog";
import BlogHome from "../../components/BlogHome/BlogHome";

const Home = () => {
    return (
        <>
            <Navbar />
            <CarouselBanner />
            <Glasses/>
            <Mission />
            <Products/>
            <Benefits/>
            <Catalog/>
            {/* <BlogHome/> */}
            {/* <CarouselBlog/> */}
            <Footer/>
        </>
    )
}

export default Home;