import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="flex flex-wrap gap-6 justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
