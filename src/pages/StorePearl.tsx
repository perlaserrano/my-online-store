import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetails } from '../components/ProductDetails';
import { Products } from './Products';
import { products } from '../interface/products';
import { SignIn } from './auth/sign-in/SignIn';
import SignUp from './auth/sign-up/SignUp';
import Home from './Home';


export const StorePearl: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
  );
}
