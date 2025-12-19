import Carousel from 'react-bootstrap/Carousel';
import './styling/Carousel.css';
export const img3 =
  "https://image.hm.com/content/dam/global_campaigns/season_02/men/ms42e7/MS42E7-16x9-top-outerwear-edit.jpg?imwidth=4800";

export const img2 =
  "https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/bltcb7f209f7ea90273/690dae17a000296c47e5d0a7/LANDING-punto.jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(2332.5,1000)";

export const img1 =
  "https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt5c9126f37a86be39/68cc07fc64a9b52fa5953828/LANDING-CAMPAÑA.jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(2332.5,1000)%20(2)";

function carousel() {
  return (
    <Carousel controls indicators interval={700} className="luxury-carousel">
  <Carousel.Item style={{ height: "93.2vh" }}>
    <img className="carousel-img" src={img1} alt="Discover Your Style" />
    <div className="overlay" />
    <Carousel.Caption className="luxury-caption">
      <span className="eyebrow">NEW COLLECTION</span>
      <h1>Discover Your Style</h1>
      <p>Elevate your everyday with clean, modern essentials.</p>
      <button className="luxury-btn">Shop Now</button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item style={{ height: "93.2vh" }}>
    <img className="carousel-img" src={img2} alt="New Season Arrivals" />
    <div className="overlay" />
    <Carousel.Caption className="luxury-caption">
      <span className="eyebrow">SPRING / SUMMER</span>
      <h1>New Season Arrivals</h1>
      <p>Fresh silhouettes crafted for comfort and confidence.</p>
      <button className="luxury-btn">Explore</button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item style={{ height: "93.2vh" }}>
    <img className="carousel-img" src={img3} alt="Wear What Moves You" />
    <div className="overlay" />
    <Carousel.Caption className="luxury-caption">
      <span className="eyebrow">EDITOR’S PICK</span>
      <h1>Wear What Moves You</h1>
      <p>Bold designs made to stand out wherever you go.</p>
      <button className="luxury-btn">View Lookbook</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default carousel;