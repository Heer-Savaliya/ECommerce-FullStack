import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className="py-5">
      <div className="flex flex-wrap gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
