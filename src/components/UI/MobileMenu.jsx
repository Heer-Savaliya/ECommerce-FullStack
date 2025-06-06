import React from "react";
import { useNavigate } from "react-router-dom";
import { HiSquaresPlus } from "react-icons/hi2";
import { RiHomeHeartLine } from "react-icons/ri";
import { BsEnvelopeOpenHeart } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { MdSettingsSuggest, MdContactSupport } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const MobileMenu = ({ setMenuOpen }) => {
  const navigate = useNavigate();
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    closeMobileMenu();
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout error : ", err);
    }
  };
  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full bg-white overflow-hidden shadow rounded-t-2xl z-50 md:hidden">
        <div className="flex flex-col items-start px-6 py-5 gap-2">
          <div className="flex justify-between w-full">
            {/* User profile */}
            <div className="flex flex-wrap items-center gap-3 pb-6">
              <img
                src="/images/users/default_p.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div className="">
                <h2 className="text-sm font-medium">Heer Savaliya</h2>
                <h4 className="text-xs text-gray-600">
                  heersavaliya@gmail.com
                </h4>
              </div>
            </div>
            <IoClose onClick={closeMobileMenu} className="cursor-pointer" />
          </div>
          <div
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-3 text-gray-600 text-sm w-full px-2 py-2 hover:border-l-4 hover:border-purple-500 hover:bg-purple-50 transition-all duration-150 cursor-pointer"
          >
            <RiHomeHeartLine className="w-5 h-5" />
            <span>Home</span>
          </div>

          <div
            onClick={() => handleNavigate("/profile")}
            className="flex items-center gap-3  text-gray-600 text-sm w-full px-2 py-2 hover:border-l-4 hover:border-purple-500 hover:bg-purple-50 transition-all duration-150 cursor-pointer"
          >
            <HiSquaresPlus className="w-5 h-5" />
            <span>All Categories</span>
          </div>
          <div
            onClick={() => handleNavigate("./blog")}
            className="flex items-center gap-3 text-sm text-gray-600 w-full px-2 py-2 hover:border-l-4 hover:border-purple-500 hover:bg-purple-50 transition-all duration-150 cursor-pointer"
          >
            <BsEnvelopeOpenHeart className="w-5 h-4" />
            <span>Blog</span>
          </div>
          <div
            onClick={() => handleNavigate("./contact")}
            className="flex items-center gap-3 text-sm text-gray-600 w-full px-2 py-2 hover:border-l-4 hover:border-purple-500 hover:bg-purple-50 transition-all duration-150 cursor-pointer"
          >
            <MdContactSupport className="w-5 h-5" />
            <span>Contact</span>
          </div>
          <div
            onClick={() => handleNavigate("./setting")}
            className="flex items-center gap-3 text-sm text-gray-600 w-full px-2 py-2 hover:border-l-4 hover:border-purple-500 hover:bg-purple-50 transition-all duration-150 cursor-pointer"
          >
            <MdSettingsSuggest className="w-5 h-5" />
            <span>Setting</span>
          </div>

          <div
            onClick={handleLogout}
            className="flex items-center gap-3 text-md text-gray-600 w-full px-2 py-2 cursor-pointer pt-20"
          >
            <ImExit className="w-6 h-6" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
