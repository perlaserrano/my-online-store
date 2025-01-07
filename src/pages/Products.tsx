
import React, { useState } from 'react';
import '../assets/css/productsPage.css';
import { Layout } from '../components/Layout';
import { ProductList } from '../components/ProductList';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductPage, productsPageData } from '../interface/productsPage';


export const Products = () => {
    const [filteredProducts, setFilteredProducts] = useState<ProductPage[]>(productsPageData);

    const handleCategoryChange = (category: string) => {
        setFilteredProducts(
            category === '' ? productsPageData : productsPageData.filter(product => product.category === category)
        );
    };

    return (
        <Layout>
            <div className="products-page-container">
                <FilterSidebar onCategoryChange={handleCategoryChange} />
                <ProductList products={filteredProducts} />
            </div>
        </Layout>
    );
};
