import Carousel from 'react-bootstrap/Carousel';
export const img3 =
  "https://image.hm.com/content/dam/global_campaigns/season_02/men/ms42e7/MS42E7-16x9-top-outerwear-edit.jpg?imwidth=4800";

export const img2 =
  "https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/bltcb7f209f7ea90273/690dae17a000296c47e5d0a7/LANDING-punto.jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(2332.5,1000)";

export const img1 =
  "https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt5c9126f37a86be39/68cc07fc64a9b52fa5953828/LANDING-CAMPAÑA.jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(2332.5,1000)%20(2)";

function carousel() {
  return (
    <Carousel
  fade
  style={{ width: "100%", height: "93.2vh" }}
  interval={3000} // slower interval for smoother feel
>
  <Carousel.Item style={{ height: "93.2vh" }}>
    <img
      src={img1}
      alt="Discover Your Style"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
    <Carousel.Caption
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: "1rem 2rem",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ fontWeight: "600" }}>Discover Your Style</h3>
      <p>Elevate your everyday with clean, modern essentials.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item style={{ height: "93.2vh" }}>
    <img
      src={img2}
      alt="New Season Arrivals"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
    <Carousel.Caption
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: "1rem 2rem",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ fontWeight: "600" }}>New Season Arrivals</h3>
      <p>Fresh silhouettes crafted for comfort and confidence.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item style={{ height: "93.2vh" }}>
    <img
      src={img3}
      alt="Wear What Moves You"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
    <Carousel.Caption
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: "1rem 2rem",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ fontWeight: "600" }}>Wear What Moves You</h3>
      <p>Bold designs made to stand out wherever you go.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  );
}

export default carousel;