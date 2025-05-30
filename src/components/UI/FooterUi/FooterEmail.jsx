import React from "react";

const FooterEmail = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
      <div className="text-center md:text-left">
        <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
          Join our newsletter for $10 offs
        </h1>
        <p className="text-xs lg:text-sm text-gray-500 w-auto md:w-100">
          Register now to get latest updates on promotions & coupons. Don't
          worry , we not spam !
        </p>
      </div>
      <div className="w-full md:w-auto ">
        <div className="bg-white flex border-2 border-gray-300 rounded-[10px]  gap-2">
          <div className="p-2 lg:p-2.5 flex flex-1 items-center gap-2">
            <img
              src="/images/logo/message_logo.png"
              alt="Message"
              className="w-4 h-3"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email address"
              className="outline-none border-none text-gray-500 text-sm "
            />
          </div>
          <div className="bg-purple h-auto p-2 lg:p-2.5 px-5 lg:px-6 rounded-r-[8px]">
            <button className="capitalize font-semibold text-white bg-purple text-xs lg:text-base border-none outline-none">
              send
            </button>
          </div>
        </div>
        <h1 className="text-xs mt-2 text-gray-500 hidden lg:block">
          By subscribing you agree to our{" "}
          <span className="text-purple">
            Terms & Conditions and Privacy & Cookies Policy
          </span>
        </h1>
      </div>
    </div>
  );
};

export default FooterEmail;
