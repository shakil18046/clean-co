import React from "react";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";

// import AdminRoute from "./AdminRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
// import AddService from "./pages/Dashboard/AddService";
// import AddAdmin from "./pages/Dashboard/AddAdmin";
export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/Conatct", name: "Home", Component: Contact },
  { path: "/Login", name: "Home", Component: Login },
  //   { path: "/Dashboard", name: "Home", Component: Dashboard },
];
