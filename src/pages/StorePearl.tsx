import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Products } from './Products';
import { ProductDetails } from '../components/ProductDetails ';
import '../assets/css/storePearl.css'
import { products } from '../helpers/products'; 



export const StorePearl: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
  );
}
