import React from 'react';
import Slider from 'react-slick';
import womanShoes1 from '../assets/images/woman-shoes.jpg';
import womanDrees from '../assets/images/dress.jpg';
import hangBag from '../assets/images/hangbag.jpg';
import '../assets/css/hero.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Cambia la imagen cada 3 segundos
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        <div>
          <img src={womanShoes1} alt="Woman shoes 1" className="hero-image" />
        </div>
        <div>
          <img src={womanDrees} alt="Woman dress 2" className="hero-image" />
        </div>
        <div>
          <img src={hangBag} alt="Woman hangbag 3" className="hero-image" />
        </div>
      </Slider>
      <div className="hero-text">
        <h1>Bienvenido/a a Nuestra Tienda</h1>
        <p>Explora nuestra colección exclusiva de calzado para mujer.</p>
        <button>Compra Ahora</button>
      </div>
    </div>
  );
};
