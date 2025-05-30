import React from "react";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import Loader2 from "../components/UI/Loader2";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader2 />;
  }
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
