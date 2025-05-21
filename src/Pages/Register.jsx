import React, { useState } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebaseConfig";
import { RiLockPasswordFill, RiFacebookFill } from "react-icons/ri";
import { FaUserCircle, FaPhoneAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../components/UI/Loader";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, phone, email, password, confirmpassword, address } =
      formData;

    // Validation
    if (
      !username ||
      !phone ||
      !email ||
      !password ||
      !confirmpassword ||
      !address
    ) {
      setError("Please fill in all fields");
      return;
    }
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    if (password.length < 6) {
      setError("Password must be of at least 6 characters");
      return;
    }
    if (password !== confirmpassword) {
      setError("Password not match with confirm password");
      return;
    }

    try {
      setLoader(true);

      // Create user in Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store in FireStore
      await setDoc(doc(firestore, "users", user.uid), {
        username,
        phone: Number(phone),
        email,
        address,
        createdAt: new Date(),
      });

      alert("User registered and stored in Firestore");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100 p-4">
      {loader && <Loader />}

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
          <h1 className="text-3xl md:text-4xl pb-4 font-bold text-center text-purple font-urban">
            Create and Account !
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p
                style={{ color: "red" }}
                className="text-center text-sm font-semibold"
              >
                {error}
              </p>
            )}

            <div className="flex flex-col md:flex-row  gap-5 md:gap-2 py-1 w-full items-center justify-center">
              <div className="w-full lg:w-1/2 px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
                <FaUserCircle />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="outline-none border-none w-full"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full lg:w-1/2 px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
                <FaPhoneAlt />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  className="outline-none border-none w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
              <MdMarkEmailUnread />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="outline-none border-none w-full"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:gap-2 py-1 w-full items-center justify-center">
              <div className="w-full lg:w-1/2 px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
                <RiLockPasswordFill />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="outline-none border-none w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
                <RiLockPasswordFill />
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="outline-none border-none w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full px-4 py-2 border border-gray-400 rounded-2xl flex  gap-4 text-gray-600">
              <IoLocationSharp className="mt-1" />
              <textarea
                type="text"
                name="address"
                placeholder="Address"
                className="outline-none border-none w-full"
                onChange={handleChange}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-5 py-4">
              <button
                type="submit"
                className="custom-button"
              >
                Sign Up
              </button>
              <NavLink
                to="/login"
                className="custom-button"
              >
                Sign In
              </NavLink>
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
