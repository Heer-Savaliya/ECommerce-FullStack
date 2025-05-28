import React from 'react';
import { FaHeart, FaShoppingCart, FaSnowflake } from 'react-icons/fa';

const ProductCard = () => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-3 w-64 relative overflow-hidden">
      {/* Discount Badge */}
      <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
        11%
      </div>

      {/* Wishlist Heart */}
      <div className="absolute top-2 right-2 text-gray-600">
        <FaHeart />
      </div>

      {/* Product Image */}
      <div
        className="h-40 bg-center bg-cover mb-2 rounded"
        style={{ backgroundImage: "url('./images/p1.jpg')" }}
      ></div>

      {/* Label */}
      <div className="flex items-center space-x-2 mb-1">
        <FaSnowflake className="text-blue-400" />
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
          COLD SALE
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold mb-1">
        Great Value Rising Crust Frozen Pizza, Supreme
      </h3>

      {/* Rating */}
      <div className="flex items-center text-yellow-500 mb-1">
        {'★'.repeat(4)}{'☆'}
        <span className="text-gray-500 ml-2 text-sm">3</span>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-red-600 font-bold text-lg">$8.99</span>
        <span className="line-through text-gray-500 text-sm">$9.99</span>
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
