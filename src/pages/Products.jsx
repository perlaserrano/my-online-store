import React from 'react'

import { Layout } from '../components/Layout';
import { ProductList } from '../components/ProductList';

export const Products = () => {
    return (
        <Layout>
          <ProductList/>
          {/*To do: Agregar una lista de productos, filtros, categorías, etc. */}
        </Layout>
      );
}
