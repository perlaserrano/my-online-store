import React from 'react';
import suetersImage from '../assets/images/sueters.jpg';
import bolsoManoImage from '../assets/images/hangbag.jpg';
import summerDress from '../assets/images/summer-dress.jpg';
import '../assets/css/productList.css';

const products = [
    {
        id: 1,
        name: "Sueters",
        description: "Elegantes para la temporada",
        price: "$49.99",
        image: suetersImage
    },
    {
        id: 2,
        name: "Cartera comfortable",
        description: "Bolso exclusivo diseño único.",
        price: "$89.99",
        image: bolsoManoImage
    },
    {
        id: 3,
        name: "Vestido de verano",
        description: "Ligero y comodo para este verano",
        price: "$25.99",
        image: summerDress
    },
    {
        id: 4,
        name: "Sueters",
        description: "Elegantes para la temporada",
        price: "$49.99",
        image: suetersImage
    },
    {
        id: 5,
        name: "Cartera comfortable",
        description: "Bolso exclusivo diseño único.",
        price: "$89.99",
        image: bolsoManoImage
    },
    {
        id: 6,
        name: "Vestido de verano",
        description: "Ligero y comodo para este verano",
        price: "$25.99",
        image: summerDress
    },
    {
        id: 7,
        name: "Cartera comfortable",
        description: "Bolso exclusivo diseño único.",
        price: "$89.99",
        image: bolsoManoImage
    },
    {
        id: 8,
        name: "Vestido de verano",
        description: "Ligero y comodo para este verano",
        price: "$25.99",
        image: summerDress
    },
    
    // Más productos...
];

export const ProductList = () => {
    return (
        <div className="product-list-container">
          {products.map(product => (
            <div key={product.id} className="card text-center mb-3" style={{ width: '18rem' }}>
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <span className="d-block mb-2 text-muted">{product.price}</span>
                <a href="#" className="btn add-to-cart-btn">Agregar al carrito</a>
              </div>
            </div>
          ))}
        </div>
      );
}
