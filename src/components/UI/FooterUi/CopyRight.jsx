import React from "react";
import { NavLink } from "react-router-dom";

const CopyRight = () => {
  return (
    <>
      {/* Copyright */}
      <div className="flex flex-col gap-3 lg:flex-row items-center justify-between">
        <div className="w-auto text-center lg:text-left lg:w-120 xl:w-auto">
          <h2 className="text-xs md:text-sm text-gray-500 font-medium">
            Copyright 2025 &copy; Jinstore React Theme. All right reserved.
            Powered by <span className="text-purple">Heer Themes</span>
          </h2>
        </div>
        <div className="flex items-center gap-3 text-[10px] md:text-sm underline">
          <NavLink>Terms and Condition</NavLink>
          <NavLink>Privacy Policy</NavLink>
          <NavLink>Order Tracking</NavLink>
        </div>
      </div>

      {/* Payment */}
      <div className="flex items-center justify-center lg:justify-start gap-3 mt-4 mb-10 md:mb-0">
        <NavLink to="https://www.visa.co.in/" target="_blank">
        <img
          src="./images/logo/payment1.png"
          alt="visa_logo"
          className="w-10"
        />
        </NavLink>
        <NavLink to="https://www.mastercard.co.in" target="_blank">
        <img
          src="./images/logo/payment2.png"
          alt="master_logo"
          className="w-7"
        />
        </NavLink>
        <NavLink to="https://www.paypal.com" target="_blank">
        <img
          src="./images/logo/payment3.png"
          alt="paypal_logo"
          className="w-15"
        />
        </NavLink>
        <NavLink to="https://www.skrill.com" target="_blank">
        <img
          src="./images/logo/payment4.png"
          alt="skrill_logo"
          className="w-10"
        />
        </NavLink>
        <NavLink to="https://www.klarna.com" target="_blank">
        <img
          src="./images/logo/payment5.png"
          alt="klarna_logo"
          className="w-16"
        />
        </NavLink>
      </div>
    </>
  );
};

export default CopyRight;
