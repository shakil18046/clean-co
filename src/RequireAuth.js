import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "./Firebaseinit";
import { useAuthState } from "react-firebase-hooks/auth";
const RequireAuth = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet></Outlet>;
};

export default RequireAuth;
