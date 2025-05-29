import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const OtherTopbar = () => {
  return (
    <div className="w-full shadow hidden md:block">
      <div className="container !py-2 text-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 lg:gap-4 text-[11px] lg:text-[12.5px]">
            <span>About Us</span>
            <span>My Account</span>
            <span>Wishlist</span>
            <span className="text-gray-400">|</span>
            <span>
              We deliver to you every day from{" "}
              <span className="text-orange-600 font-semibold">
                {" "}
                7:00 to 23:00
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 lg:gap-4 text-[11px] lg:text-[12.5px]">
            <div className="flex items-center gap-2">
              English
              <IoIosArrowDown className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-2">
              USD
              <IoIosArrowDown className="cursor-pointer" />
            </div>
            <div>Order Traking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherTopbar;
