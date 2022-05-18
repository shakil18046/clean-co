import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AddAdmin from "./AddAdmin";
import AddService from "./AddService";
import DashBoardSidebar from "./DashBoardSidebar";

const Dashboard = () => {
  return <DashBoardSidebar>{Outlet}</DashBoardSidebar>;
};

export default Dashboard;
