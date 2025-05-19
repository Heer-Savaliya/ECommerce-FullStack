import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill, RiFacebookFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg overflow-x-hidden rounded-lg flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-10 w-full max-w-5xl">
        {/* Image Section */}
        <div className="w-full md:w-[45%]">
          <img
            src="./images/bg5.jpg"
            alt="Login"
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl pb-3 font-bold text-center text-purple font-urban">
            Create and Account !
          </h1>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-2 py-2 w-full items-center justify-center">
              <div className="w-full lg:w-1/2 px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
                <FaUserCircle />
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-none border-none w-full"
                />
              </div>

              <div className="w-full lg:w-1/2 px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
                <MdMarkEmailUnread />
                <input
                  type="phone"
                  placeholder="Phone"
                  className="outline-none border-none w-full"
                />
              </div>
            </div>

            <div className="w-full px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
              <MdMarkEmailUnread />
              <input
                type="email"
                placeholder="Email"
                className="outline-none border-none w-full"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2 py-2 w-full items-center justify-center">

            <div className="w-full lg:w-1/2 px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
              <RiLockPasswordFill />
              <input
                type="password"
                placeholder="Password"
                className="outline-none border-none w-full"
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
              <RiLockPasswordFill />
              <input
                type="password"
                placeholder="Confirm Password"
                className="outline-none border-none w-full"
              />
            </div>
            </div>

            <div className="px-2 py-1 text-center text-purple-800">
              <NavLink className="">Forget Password ? </NavLink>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-5">
              <button
                type="submit"
                className="w-full font-semibold uppercase bg-purple-400 border-2 border-purple-400 text-white py-2 rounded-2xl hover:bg-white hover:text-purple-500 transition"
              >
                Sign In
              </button>
              <button
                type="submit"
                className="w-full font-semibold uppercase bg-purple-400 border-2 border-purple-400 text-white py-2 rounded-2xl hover:bg-white hover:text-purple-500 transition"
              >
                <NavLink to="/register">Sign Up</NavLink>
              </button>
            </div>
            <h2 className="text-center  text-sm text-gray-500">
              or login with
            </h2>

            {/* Other platform */}
            <div className="flex items-center justify-center gap-6">
              <div className="border-[1px] border-gray-400 rounded-full cursor-pointer">
                <RiFacebookFill className="m-2 text-blue-600" />
              </div>
              <div className="border-[1px] border-gray-400 rounded-full cursor-pointer">
                <FcGoogle className="m-2" />
              </div>
              <div className="border-[1px] border-gray-400 rounded-full cursor-pointer">
                <FaLinkedinIn className="m-2 text-blue-700" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
