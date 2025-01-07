
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/productList.css';
// import { productsPageData } from '../interface/productsPage';

// export const ProductList: React.FC = () => {
//     return (
//         <div className="product-list-container">
//             {productsPageData.map(product => (
//                 <div key={product.id} className="card text-center mb-3" style={{ width: '18rem' }}>
//                     <img src={product.image} className="card-img-top" alt={product.name} />
//                     <div className="card-body">
//                         <h5 className="card-title">{product.name}</h5>
//                         <p className="card-text">{product.description}</p>
//                         <span className="d-block mb-2 text-muted">{product.price}</span>
//                         <Link to={`/product/${product.id}`} className="btn add-to-cart-btn">Ver Más</Link>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

import React from 'react';

import { Link } from 'react-router-dom';
import '../assets/css/productList.css';
import { ProductPage } from '../interface/productsPage';

interface ProductListProps {
    products: ProductPage[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="product-list-container">
            {products.map(product => (
                <div key={product.id} className="card text-center mb-3" style={{ width: '18rem' }}>
                    <img src={product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <span className="d-block mb-2 text-muted">{product.price}</span>
                        <Link to={`/product/${product.id}`} className="btn add-to-cart-btn">Ver Más</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};
