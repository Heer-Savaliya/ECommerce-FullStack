import React from "react";
import { signOut } from "firebase/auth";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const UserBar = () => {
  const navigate = useNavigate();

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout error : ", error);
    }
  };

  return (
    <div className="flex items-center justify-around flex-row-reverse md:flex-row md:justify-center  gap-4 px-10 py-1 md:px-0">
      <img
        src="./images/user_logo.png"
        className="w-4 lg:w-5 cursor-pointer"
        alt=""
      />
      <div className="relative">
        <div className="absolute bottom-3 md:bottom-2.5 left-3 h-4 w-4 m-auto bg-red-500 text-white text-center text-[10px] rounded-full">
          3
        </div>
        <img
          src="./images/like_logo.png"
          className="w-5 lg:w-6 cursor-pointer"
          alt=""
        />
      </div>
      <div className="relative">
        <div className="absolute bottom-3 md:bottom-2.5 left-3 h-4 w-4 m-auto bg-red-500 text-white text-center text-[10px] rounded-full">
          3
        </div>
        <img
          src="./images/cart_logo.png"
          className="w-5 lg:w-6 cursor-pointer"
          alt=""
        />
      </div>
      <div className="hidden md:flex">
        <RiLogoutCircleRLine
          className="h-5 w-5 lg:w-6 lg:h-6 stroke-[0.3] cursor-pointer"
          onClick={handleLogout}
        />
      </div>

      <div className="block md:hidden">
        <HiOutlineSquares2X2 className="h-5 w-5 lg:w-6 lg:h-6  cursor-pointer" />
      </div>
    </div>
  );
};

export default UserBar;
