import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"

import "./carouselBanner.css";


const CarouselBanner = () => {
  return (
    <div className='carouselContainer'>
      <Carousel controls={false}>
        <Carousel.Item className='carouselItem'>
          <img src={banner3} alt="" />
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img src={banner2} alt="" />
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img src={banner1} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBanner;