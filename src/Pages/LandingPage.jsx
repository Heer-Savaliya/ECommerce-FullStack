import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const LandingPage = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (loading) return; // Wait for auth to load

    if (user) {
      navigate("/dashboard"); // Safe navigation after auth loaded
    } else {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [user, loading, navigate]);

  return (
    <div className="bg-purple min-h-screen flex flex-col items-center justify-center">
      <img src="/images/logo/logo_white.png" alt="" />
      <div className="pt-4 text-center">
        <h1 className=" font-serif text-3xl md:text-5xl text-white">
          JinStore
        </h1>
        <p className="text-white text-xs md:text-lg font-urban">
          Any shopping just from home
        </p>

        <div></div>

        <div className="pt-10 text-purple-300 text-xs md:text-sm">
          Version 0.0.1
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
