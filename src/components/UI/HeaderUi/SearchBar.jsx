import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full bg-gray-100 rounded-[8px] flex items-center px-3 md:px-5 py-2 md:py-3 gap-4">
      <input
        type="text"
        placeholder="Search for products, categories or brands..."
        className="   w-full border-none outline-none text-xs md:text-sm text-gray-600"
      />
      <img src="./images/logo/search_logo.png" alt="" className="w-3 md:w-4"/>
    </div>
  );
};

export default SearchBar;
