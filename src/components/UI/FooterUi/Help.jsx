import React from "react";
import { NavLink } from "react-router-dom";

const Help = () => {
  return (
    <div className="flex flex-wrap justify-between gap-y-8 bg-gray-100 py-10 text-sm ">
      {/* Do You Need Help */}
      <div className="w-full md:max-w-[250px]">
        <h2 className="text-base font-semibold mb-4">Do You Need Help ?</h2>
        <p className="mb-4 text-xs text-gray-500">
          Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nyna. Pressa
          fåmoska.
        </p>
        <div className="flex md:flex-col items-start justify-between">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo/phone_logo.png"
              alt="Phone"
              className="w-4 md:w-6 h-4 md:h-6 mt-1"
            />
            <div>
              <p className="text-gray-500 text-xs md:text-[13px]">
                Monday–Friday: 08am–9pm
              </p>
              <h3 className="text-md md:text-lg font-bold text-black">
                0 800 300-353
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/message_logo1.png"
              alt="Message"
              className="w-4 md:w-6 h-3 md:h-5 mt-1"
            />
            <div>
              <p className="text-gray-500 text-xs md:text-[13px]">
                Need help with your order?
              </p>
              <h3 className="font-semibold text-black">info@example.com</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Make Money With Us */}
      <div>
        <h2 className="font-semibold mb-4">Make Money with Us</h2>
        <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
          <li>
            <NavLink>Sell on Grogin</NavLink>
          </li>
          <li>
            <NavLink>Sell Your Services on Grogin</NavLink>
          </li>
          <li>
            <NavLink>Sell on Grogin Business</NavLink>
          </li>
          <li>
            <NavLink>Sell Your Apps on Grogin</NavLink>
          </li>
          <li>
            <NavLink>Become an Affiliate</NavLink>
          </li>
          <li>
            <NavLink>Advertise Your Products</NavLink>
          </li>
          <li>
            <NavLink>Sell-Publish with Us</NavLink>
          </li>
          <li>
            <NavLink>Become an Blowwe Vendor</NavLink>
          </li>
        </ul>
      </div>

      {/* Let Us Help You */}
      <div>
        <h2 className="font-semibold mb-4">Let Us Help You</h2>
        <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
          <li>
            <NavLink>Accessibility Statement</NavLink>
          </li>
          <li>
            <NavLink>Your Orders</NavLink>
          </li>
          <li>
            <NavLink>Returns & Replacements</NavLink>
          </li>
          <li>
            <NavLink>Shipping Rates & Policies</NavLink>
          </li>
          <li>
            <NavLink>Refund and Returns Policy</NavLink>
          </li>
          <li>
            <NavLink>Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink>Terms and Conditions</NavLink>
          </li>
          <li>
            <NavLink>Cookie Settings</NavLink>
          </li>
        </ul>
      </div>

      {/* Get to Know Us */}
      <div>
        <h2 className="font-semibold mb-4">Get to Know Us</h2>
        <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
          <li>
            <NavLink>Careers for Grogin</NavLink>
          </li>
          <li>
            <NavLink>About Grogin</NavLink>
          </li>
          <li>
            <NavLink>Investor Relations</NavLink>
          </li>
          <li>
            <NavLink>Grogin Devices</NavLink>
          </li>
          <li>
            <NavLink>Customer reviews</NavLink>
          </li>
          <li>
            <NavLink>Social Responsibility</NavLink>
          </li>
          <li>
            <NavLink>Store Locations</NavLink>
          </li>
        </ul>
      </div>

      {/* Download Our App */}
      <div>
        <h2 className="font-semibold mb-4">Download our app</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/google_play.png"
              alt="Google Play"
              className="w-15 md:w-25"
            />
            <div className="text-gray-600 text-[10px] md:text-xs">
              <p className="capitalize">Download App Get</p>
              <p className="text-black">-10% Discount</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/app_store.png"
              alt="App Store"
              className="w-15 md:w-25"
            />
            <div className="text-gray-600 text-[10px] md:text-xs">
              <p className="capitalize">Download App Get</p>
              <p className="text-black">-20% Discount</p>
            </div>
          </div>
          <div className="mt-3 md:mt-7">
            <p className="mb-2 text-xs md:text-sm">
              Follow us on social media:
            </p>
            <div className="flex gap-3">
              <NavLink className="bg-white p-2 rounded-[8px] custom-shadow" to="https://www.facebook.com" target='_blank'>
                <img
                  src="/images/logo/facebook_logo.png"
                  alt="Facebook"
                  className="w-4"
                />
              </NavLink>
              <NavLink className="bg-white p-2 rounded-[8px] custom-shadow" to="https://www.twitter.com" target='_blank'>
                <img
                  src="/images/logo/x_logo.png"
                  alt="Twitter/X"
                  className="w-4"
                />
              </NavLink>
              <NavLink className="bg-white p-2 rounded-[8px] custom-shadow" to="https://www.instagram.com" target='_blank'>
                <img
                  src="/images/logo/insta_logo.png"
                  alt="Instagram"
                  className="w-4"
                />
              </NavLink>
              <NavLink className="bg-white p-2 rounded-[8px] custom-shadow" to="https://www.linkdein.com" target='_blank'>
                <img
                  src="/images/logo/linkdein_logo.png"
                  alt="LinkedIn"
                  className="w-4"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
