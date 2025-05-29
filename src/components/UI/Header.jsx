import React from "react";
import Topbar from "./Topbar";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserBar from "./UserBar";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Topbar />

      {/* Main header */}
      <div className="w-full shadow bg-white">
        <div className="container !py-3 flex flex-wrap items-center justify-between gap-5">
          {/* Logo + Location */}
          <div className="flex items-center gap-4">
            <img
              src="./images/logo/full_logo.png"
              alt="Logo"
              className="h-7 lg:h-8 hidden md:block"
            />
            <img
              src="./images/logo.png"
              alt="Logo"
              className="h-8 block md:hidden"
            />
            <img
              src="./images/logo/location_logo.png"
              alt="Location"
              className="h-5 lg:h-6 hidden md:block"
            />
            <div className="text-[12px] text-gray-600 hidden md:block">
              Deliver to <div className="text-black font-semibold">all</div>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <SearchBar />
          </div>

          {/* Desktop UserBar */}
          <div className="hidden md:block">
            <UserBar />
          </div>
        </div>
      </div>

      {/* Mobile bottom UserBar */}
      <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
        <div className="mx-auto max-w-full relative px-3">
          <div className="mx-auto w-full bg-gray-200/80 backdrop-blur-md rounded-t-3xl shadow-xl py-3 px-6  transition-all duration-300">
            <UserBar />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Header;
