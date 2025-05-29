import React, { useEffect, useState } from "react";
import { initializeAOS } from "../../../utilis/initializeAOS";
import { auth, firestore } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ProductCard = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    initializeAOS();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prodSnap = await getDocs(collection(firestore, "products"));
        const prodArray = prodSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProduct(prodArray);
      } catch (err) {
        console.error("Error fetching products : ", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-2 w-full">
      {product?.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-300 rounded-lg shadow-md p-3 relative overflow-hidden"
          data-aos="fade-in"
          data-aos-duration="3000"
        >
          {/* Discount */}
          <div className="absolute top-3 left-3 bg-red-600 text-white text-[8px] md:text-[10px] lg:text-[12px] font-semibold px-2 md:px-3 py-1 rounded-xl">
            {item.discount}%
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
            style={{ backgroundImage: `url('${item.image}')` }}
          ></div>

          {/* Title */}
          <h3 className="text-[9px] md:text-[11px] lg:text-[13px] font-semibold mb-1 h-[35px] overflow-hidden line-clamp-2">
            {item.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center text-yellow-500 mb-1">
            {"★".repeat(item.rating)}
            {"☆".repeat(5 - item.rating)}
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-red-600 font-bold text-md lg:text-lg">
              <span className="font-serif">$ </span>
              {(item.price - (item.price * item.discount) / 100).toFixed(2)}
            </span>
            <span className="line-through text-gray-400 text-[10px] md:text-sm">
              {item.price}
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
            <div
              className={`font-semibold text-[9px] md:text-xs lg:text-[13px]
        ${
          item.stock === 0
            ? "text-red-600"
            : item.stock < 5
            ? "text-orange-400"
            : "text-green-600"
        }
        `}
            >
              {item.stock === 0
                ? "Out of stock"
                : item.stock < 5
                ? `Hurry Up ${item.stock} left`
                : `${item.stock} left`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
