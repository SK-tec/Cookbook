import { Carousel } from "react-bootstrap";
import slide1 from "../images/vegetable_skewer.jpg";
import slide2 from "../images/bg_5.jpg";
import slide3 from "../images/Prawn1.jpg";
import slide4 from "../images/Rasmalai.jpeg";

const Slideshow = () => {
    return ( <>
     <Carousel id="dtslides">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            height="550"
          />
          <Carousel.Caption>
            <h1 className="slide1" >Good food never fail in bringing people together</h1>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            height="550"
          />
          <Carousel.Caption>
            <h1 className="slide2">Eat Good Think Good</h1>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            height="550"
          />
          <Carousel.Caption>
            <h1 className="slide3">Where there is good food, there is happiness</h1>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide4}
            alt="Third slide"
            height="550"
          />
          <Carousel.Caption>
            <h1 className="slide4">Food is one of life’s greatest pleasures</h1>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </> );
}
 
export default Slideshow;