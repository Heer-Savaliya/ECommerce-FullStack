import React from 'react';
import { FaHeart, FaShoppingCart, FaSnowflake } from 'react-icons/fa';

const ProductCard = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-3 w-64 relative overflow-hidden">
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] md:text-[12px] font-semibold px-3 py-1 rounded-xl">
        11%
      </div>

      {/* Wishlist Heart */}
      <div className="absolute top-3 right-2 text-gray-600">
        <FaHeart />
      </div>

      {/* Product Image */}
      <div
        className="h-40 bg-center bg-cover mb-2 rounded bg-no-repeat"
        style={{ backgroundImage: "url('./images/p6.jpg')", backgroundSize: "160px 160px"}}
      ></div>

      {/* Title */}
      <h3 className="text-sm font-semibold mb-1">
        Great Value Rising Crust Frozen Pizza, Supreme
      </h3>

      {/* Rating */}
      <div className="flex items-center text-yellow-500 mb-1">
        {'★'.repeat(4)}{'☆'}
      </div>

      {/* Price */}
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-red-600 font-bold text-lg"><span className='font-serif'>$</span> 8.99</span>
        <span className="line-through text-gray-400 text-sm">$9.99</span>
      </div>

      {/* Stock + Cart */}
      <div className="flex items-center justify-between">
        <div className="text-green-600 font-semibold text-sm">IN STOCK</div>
        <button className="bg-green-500 text-white p-2 rounded-full">
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
