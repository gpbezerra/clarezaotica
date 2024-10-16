import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import Glasses from "../../components/Glasses/Glasses";
import Mission from "../../components/Mission/Mission";
import Products from "../../components/Products/Products";

const Home = () => {
    return (
        <>
            <Navbar />
            <CarouselBanner />
            <Glasses/>
            <Mission />
            <Products/>
        </>
    )
}

export default Home;