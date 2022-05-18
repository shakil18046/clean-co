import React from "react";
import { NavLink } from "react-router-dom";
import AddAdmin from "./AddAdmin";
import AddService from "./AddService";

const DashBoardSidebar = ({ children }) => {
  console.log(children);
  return (
    <div class="drawer drawer-mobile mt-16 bg-accent">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content bg-amber-500">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to={"/Dashboard/AddService"}>AddService</NavLink>
          </li>
          <li>
            <NavLink to={"/Dashboard/AddAdmin"}>Add admin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardSidebar;
