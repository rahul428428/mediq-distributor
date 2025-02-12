import { lazy } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const ProductCarousel = () => {
  console.log("Product Data:", ProductContent); // Debugging

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        {ProductContent.title}
      </h2>
      <Slider {...settings}>
        {ProductContent.products.map((product, index) => (
          <div key={index} style={{ padding: "10px", textAlign: "center" }}>
            <div style={{ width: "100%", height: "250px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} 
              />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "10px" }}>
              {product.name}
            </h3>
            {/* <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "5px" }}>
              {product.description}
            </p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};


const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ProductCarousel />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
