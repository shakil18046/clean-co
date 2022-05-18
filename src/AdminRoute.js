import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "./Firebaseinit";
import UseAdmin from "./hooks/UseAdmin";

const AdminRoute = () => {
  //   const [user] = useAuthState(auth);
  const [admin] = UseAdmin();
  if (!admin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AdminRoute;
