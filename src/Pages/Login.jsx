import React, { useState ,useEffect } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill, RiFacebookFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Loader from "../components/UI/Loader";
import AOS from "aos";
import "aos/dist/aos.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // whether animation should happen only once
  });
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);

      // Validation
      if (!email || !password) {
        setError("All feilds are required");
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      switch(err.code){
        case "auth/invalid-credential":
          setError ("Invalid credentails");
          break;
        case "auth/user-not-found":
          setError("No user found with this email");
          break;
        case "auth/wrong-password":
          setError("Incorrect Password");
          break;
        case "auth/too-many-requests":
          setError("Too many attempts");
          break;
        default:
          setError("Something went wrong. Please try again later");
      }
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100 p-4">
      {loader && <Loader />}

      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-15 w-full max-w-5xl">
        {/* Image Section */}
        <div className="w-full md:w-[70%]">
          <img
            src="./images/login_bg2.jpg"
            alt="Login"
            className="w-full h-auto object-cover rounded"
            data-aos="zoom-in"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-purple font-urban">
            Welcome
          </h1>
          <h4 className="text-md text-center mb-5 text-purple-400">
            Sign in to your Account!
          </h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p
                style={{ color: "red" }}
                className="text-center text-sm font-semibold"
              >
                {error}
              </p>
            )}

            <div className="w-full px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
              <MdMarkEmailUnread />
              <input
                type="email"
                value={email}
                placeholder="Email"
                className="outline-none border-none w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-600">
              <RiLockPasswordFill />
              <input
                type="password"
                value={password}
                placeholder="Password"
                className="outline-none border-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="px-2 py-1 text-center text-purple-800">
              <NavLink className="">Forget Password ? </NavLink>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-5">
              <button type="submit" className="custom-button w-full">
                Sign In
              </button>

              <NavLink to="/register" className="custom-button w-full">
                Sign Up
              </NavLink>
            </div>


            <h2 className="text-center text-sm text-gray-500">
              or login with
            </h2>

            {/* Other platform */}
            <div className="flex items-center justify-center gap-6">
              <div className="border border-gray-400 rounded-full cursor-pointer transition-all ease-in-out duration-700 hover:scale-112 ">
                <RiFacebookFill className="m-2 text-blue-600" />
              </div>
              <div className="border border-gray-400 rounded-full cursor-pointer transition-all ease-in-out duration-700 hover:scale-112 ">
                <FcGoogle className="m-2" />
              </div>
              <div className="border border-gray-400 rounded-full cursor-pointer transition-all ease-in-out duration-700 hover:scale-112 ">
                <FaLinkedinIn className="m-2 text-blue-700" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
