import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import Glasses from "../../components/Glasses/Glasses";
import Mission from "../../components/Mission/Mission";
import Products from "../../components/Products/Products";
import Benefits from "../../components/Benefits/Benefits";

const Home = () => {
    return (
        <>
            <Navbar />
            <CarouselBanner />
            <Glasses/>
            <Mission />
            <Products/>
            <Benefits/>
        </>
    )
}

export default Home;