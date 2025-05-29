import React, { useEffect } from "react";
import { initializeAOS } from "../../../utilis/initializeAOS";

const ProductCard = () => {
  useEffect(() => {
    initializeAOS();
}, []);
  
  // Built-in product data for trial
  const productList = [
    {
      id: 1,
      title: "Great Value Rising Crust Frozen Pizza, Supreme",
      image: "./images/p6.jpg",
      price: 8.99,
      originalPrice: 9.99,
      discount: 11,
      rating: 4,
      inStock: true,
    },
    {
      id: 2,
      title: "Deluxe Pepperoni Frozen Pizza, Thin Crust",
      image: "./images/p7.jpg",
      price: 7.49,
      originalPrice: 8.99,
      discount: 17,
      rating: 5,
      inStock: true,
    },
    {
      id: 3,
      title: "Deluxe Pepperoni Frozen Pizza, Thin Crust",
      image: "./images/p8.jpg",
      price: 7.49,
      originalPrice: 8.99,
      discount: 17,
      rating: 5,
      inStock: true,
    },
    {
      id: 4,
      title: "Deluxe Pepperoni Frozen Pizza, Thin Crust",
      image: "./images/p9.jpg",
      price: 7.49,
      originalPrice: 8.99,
      discount: 17,
      rating: 5,
      inStock: true,
    },
    {
      id: 5,
      title: "Deluxe Pepperoni Frozen Pizza, Thin Crust",
      image: "./images/p10.jpg",
      price: 7.49,
      originalPrice: 8.99,
      discount: 17,
      rating: 5,
      inStock: true,
    },
    {
      id: 6,
      title: "Deluxe Pepperoni Frozen Pizza, Thin Crust",
      image: "./images/p11.jpg",
      price: 7.49,
      originalPrice: 8.99,
      discount: 17,
      rating: 5,
      inStock: true,
    },
    {
      id: 7,
      title: "Deluxe Pepperoni Frozen Pizza, Thin Crust",
      image: "./images/p12.jpg",
      price: 7.49,
      originalPrice: 8.99,
      discount: 17,
      rating: 5,
      inStock: true,
    },
    {
      id: 7,
      title: "Deluxe Pepperoni Frozen Pizza, Thin Crust",
      image: "./images/p13.jpg",
      price: 7.49,
      originalPrice: 8.99,
      discount: 17,
      rating: 5,
      inStock: true,
    },
  ];

  return (
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-2 w-full">
  {productList.map((product) => (
    <div
      key={product.id}
      className="bg-white border border-gray-300 rounded-lg shadow-md p-3 relative overflow-hidden"
      data-aos="fade-in"
      data-aos-duration="3000"
    >
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 bg-red-600 text-white text-[8px] md:text-[10px] lg:text-[12px] font-semibold px-2 md:px-3 py-1 rounded-xl">
        {product.discount}%
      </div>

      {/* Wishlist Heart */}
      <div className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer">
        <img
          src="./images/logo/like_logo.png"
          alt="wishlist"
          className="w-3 md:w-4 lg:w-4.5"
        />
      </div>

      {/* Product Image */}
      <div
        className="bg-center bg-no-repeat bg-contain sm:bg-[length:120px_120px] md:bg-[length:120px_120px] lg:bg-[length:140px_140px] h-32 sm:h-36 md:h-40 mb-2 rounded"
        style={{ backgroundImage: `url('${product.image}')` }}
      ></div>

      {/* Title */}
      <h3 className="text-[9px] md:text-[11px] lg:text-[13px] font-semibold mb-1">{product.title}</h3>

      {/* Rating */}
      <div className="flex items-center text-yellow-500 mb-1">
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)}
      </div>

      {/* Price */}
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-red-600 font-bold text-md lg:text-lg">
          <span className="font-serif">$</span> {product.price}
        </span>
        <span className="line-through text-gray-400 text-[10px] md:text-sm">
          ${product.originalPrice}
        </span>
      </div>

      {/* Stock + Cart */}
      <div className="flex items-end justify-between">
        <button className="bg-green-600 text-white p-2 rounded-full">
          <img
            src="./images/logo/cart_white.png"
            alt="cart"
            className="w-3 md:w-4 lg:w-4.5"
          />
        </button>
        <div className="text-green-600 font-semibold text-[9px] md:text-xs lg:text-sm">
          {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default ProductCard;
