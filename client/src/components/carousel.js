import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.jpg';


function carousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{height:"93.2vh"}}>
        <img src={img1} alt="this is an" style={ {objectFit: "cover", height: "100%", width: "100%" }}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} style={{height:"93.2vh"}}>
      <img src={img1} alt="this is an" style={{objectFit: "cover",height: "100%", width: "100%" }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} style={{height:"93.2vh"}}>
      <img src={img1} alt="this is an" style={{objectFit: "cover",height: "100%", width: "100%" }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;