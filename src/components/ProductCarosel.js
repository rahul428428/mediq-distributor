import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductContent from "../../content/ProductContent.json";

const ProductCarosel = () => {
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
            <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "5px" }}>
              {product.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarosel;
