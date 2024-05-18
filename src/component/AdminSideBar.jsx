import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div>
      {" "}
      <div className="w-full bg-teal-900 h-full me-14 flex flex-col justify-evenly items-center text-4xl font-bold text-white">
        <div>
          <Link to={"/admin"}>DashBord</Link>
        </div>
        <div>
          <Link to={"/admin/users"}>Users</Link>{" "}
        </div>
        <div>
          <Link to={"/admin/products"}>Products</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
