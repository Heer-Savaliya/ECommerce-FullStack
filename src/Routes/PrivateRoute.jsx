import React from "react";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p></p>;
  }
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
