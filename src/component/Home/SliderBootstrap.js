import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function UncontrolledExample() {
  return (
    <Carousel className="home__image">
      <Carousel.Item>
        <img
          className="home__image d-block"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61mL9ySACvL._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block  home__image"
          src="https://m.media-amazon.com/images/I/61RzGjo+nqL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  home__image"
          src="https://m.media-amazon.com/images/I/71FZBWkUf7L._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  home__image"
          src="https://m.media-amazon.com/images/I/611Hit0i2SL._SX3000_.jpg"
          alt="four slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  home__image"
          src="https://m.media-amazon.com/images/I/51yeh88zN-L._SX3000_.jpg"
          alt="five slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
