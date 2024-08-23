import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from './Layout';
import { Product, products } from '../helpers/products';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/productDetails.css';


interface ProductDetailsProps {
    products: Product[];
  }
  
  export const ProductDetails: React.FC<ProductDetailsProps> = ({ products }) => {
    const { id } = useParams<{ id?: string }>();
  
    if (!id || isNaN(Number(id))) return <div>Producto no encontrado</div>;
  
    const productId = parseInt(id, 10);
  
    const product = products.find(p => p.id === productId);
  
    if (!product) return <div>Producto no encontrado</div>;
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Cambia la imagen cada 3 segundos
    };

    return (
        <Layout>
            <div className="product-details">
            <div className="coupon">
            <h3>10% OFF</h3>
            <p>En tu primera compra</p>
            <div className="discount-code">Cupon! Toca Aqui</div>
        </div>
                <div className="product-carousel">
                    <Slider {...settings}>
                        {product.images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`${product.name} ${index + 1}`} className="product-image" />
                            </div>
                        ))}
                    </Slider>
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className="star">
                                {index < product.rating ? "★" : "☆"}
                            </span>
                        ))}
                    </div>
                </div>
                

                <div className="product-info">
                    <h2>{product.name}</h2>
                    <p className="product-description">
                        <strong>Descripción:</strong> {product.description}
                    </p>
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className="star">
                                {index < product.rating ? "★" : "☆"}
                            </span>
                        ))}
                    </div>
                    <p className="product-features">
                        <strong>Características:</strong>
                        <ul>
                        <li>Disponible en varios tamaños y colores</li>
                            <li>Hecho de material de alta calidad</li>
                            <li>Perfecto para cualquier ocasión</li>
                            <li>Diseño elegante y moderno</li>
                         
                           
                        </ul>
                    </p>
                    <span className="product-price">{product.price}</span>
                    <button className="btn add-to-cart-btn">
                        Agregar al Carrito <i className="bi bi-cart3"></i>
                    </button>
                </div>
                
            </div>

            <div className="reviews-section">
                <h3>Reseñas</h3>
                <div className="review-box">
                    <p>Aún no hay reseñas. ¡Sé el primero en opinar!</p>
                </div>
            </div>
        </Layout>
    );
};
