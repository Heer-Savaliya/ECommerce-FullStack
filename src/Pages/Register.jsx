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
  const [errors, setErrors] = useState({});
  const [err,setErr] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
    setErrors({ ...errors , [e.target.name]: ""});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, phone, email, password, confirmpassword, address } =formData;

    // Validation

    // if (
    //   !username ||
    //   !phone ||
    //   !email ||
    //   !password ||
    //   !confirmpassword ||
    //   !address
    // ) {
    //   setError("Please fill in all fields");
    //   return;
    // }
    // const phonePattern = /^[6-9]\d{9}$/;
    // if (!phonePattern.test(phone)) {
    //   setError("Please enter a valid 10-digit phone number");
    //   return;
    // }
    // if (password.length < 6) {
    //   setError("Password must be of at least 6 characters");
    //   return;
    // }
    // if (password !== confirmpassword) {
    //   setError("Password not match with confirm password");
    //   return;
    // }

    // validation

    let newErrors = {};
    if (!username) newErrors.username = "* Username is required";

    if (!phone) newErrors.phone = "* Phone is required";
    else if (!/^[6-9]\d{9}$/.test(phone))
      newErrors.phone = "* Enter valid 10-digit phone no.";

    if (!email) newErrors.email = "* Email is required";

    if (!password) newErrors.password = "* Password is required";
    else if (password.length < 6)
      newErrors.password = "* Password must be of at least 6 characters";

    if (!confirmpassword)
      newErrors.confirmpassword = "* Confirm Password is required";
    else if (password != confirmpassword)
      newErrors.confirmpassword = "* Password not match";

    if (!address) newErrors.address = "* Address is required";

    // If any error
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoader(true);

      // Create user in Auth
      const userCredential = await createUserWithEmailAndPassword(auth,email,password);
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
      switch (err.code) {
        case "auth/email-already-in-use":
          setErr("This email is already registered");
          break;
        case "auth/invalid-email":
          setErr("Please enter a valid email address");
          break;
        case "auth/weak-password":
          setErr("Password is too weak (minimum 6 characters)");
          break;
        default:
          setErr("Something went wrong. Please try again.");
}
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

          <h1 className="text-2xl md:text-4xl pb-4 font-bold text-center text-purple font-urban">
            Create an Account !
          </h1>

          {err && <p style={{ color: "red" }} className="text-center text-sm font-semibold pb-3">{err}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username & Phone */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Username */}
              <div className="w-full lg:w-1/2 flex flex-col gap-1">
                {errors.username && (
                  <p className="text-left text-red-500 text-[12px] font-semibold px-1">
                    {errors.username}
                  </p>
                )}
                <div className="px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
                  <FaUserCircle />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="outline-none border-none w-full"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="w-full lg:w-1/2 flex flex-col gap-1">
                {errors.phone && (
                  <p className="text-left text-red-500 text-[12px]  font-semibold px-1">
                    {errors.phone}
                  </p>
                )}
                <div className="px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
                  <FaPhoneAlt />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="outline-none border-none w-full"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 w-full">
              {errors.email && (
                <p className="text-left text-red-500 text-[12px] font-semibold px-1">
                  {errors.email}
                </p>
              )}
              <div className="px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
                <MdMarkEmailUnread />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="outline-none border-none w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Password */}
              <div className="w-full lg:w-1/2 flex flex-col gap-1">
                {errors.password && (
                  <p className="text-left text-red-500 text-[12px]  font-semibold px-1">
                    {errors.password}
                  </p>
                )}
                <div className="px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
                  <RiLockPasswordFill />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="outline-none border-none w-full"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="w-full lg:w-1/2 flex flex-col gap-1">
                {errors.confirmpassword && (
                  <p className="text-left text-red-500 text-[12px]  font-semibold px-1">
                    {errors.confirmpassword}
                  </p>
                )}
                <div className="px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
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
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1 w-full">
              {errors.address && (
                <p className="text-left text-red-500 text-[12px]  font-semibold px-1">
                  {errors.address}
                </p>
              )}
              <div className="px-4 py-2 border border-gray-400 rounded-2xl flex items-start gap-4 text-gray-600">
                <IoLocationSharp className="mt-1" />
                <textarea
                  name="address"
                  placeholder="Address"
                  className="outline-none border-none w-full resize-none"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-5 py-4">
              <button type="submit" className="custom-button w-full">
                Sign Up
              </button>
              <NavLink to="/login" className="custom-button w-full">
                Sign In
              </NavLink>
            </div>

            <h2 className="text-center text-sm text-gray-500">or login with</h2>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-6">
              <div className="border border-gray-400 rounded-full cursor-pointer">
                <RiFacebookFill className="m-2 text-blue-600" />
              </div>
              <div className="border border-gray-400 rounded-full cursor-pointer">
                <FcGoogle className="m-2" />
              </div>
              <div className="border border-gray-400 rounded-full cursor-pointer">
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
