import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full bg-gray-100 rounded-[8px] flex items-center px-5 py-3 gap-4">
      <input
        type="text"
        placeholder="Search for products, categories or brands..."
        className="   w-full border-none outline-none text-sm text-gray-600"
      />
      <img src="./images/search_logo.png" alt="" className="w-4"/>
    </div>
  );
};

export default SearchBar;
