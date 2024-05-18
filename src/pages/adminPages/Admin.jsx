import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Admin = ({ products, users }) => {
  return (
    <div className="h-screen flex justify-evenly items-center font-bold">
      <div className="bg-blue-gray-800 w-2/5 h-3/6 flex flex-col justify-evenly items-center">
        <h1 className="text-blue-800 text-3xl">Users</h1>
        <h1 className="text-white text-2xl">
          Number Of User : <span className="text-blue-800">{users.length}</span>
        </h1>
        <h1 className="text-white text-2xl text-center my-2">
          Last User Registered is :{" "}
          <span className="text-blue-800"> {users.at(length - 1).email}</span>
        </h1>
        <Link to={"/admin/users"}>
          <Button variant="filled" color="blue">
            Show Users
          </Button>
        </Link>
      </div>
      <div className="bg-blue-gray-800 w-2/5 h-3/6 flex flex-col justify-evenly items-center ">
        <h1 className="text-blue-800 text-3xl">Products</h1>
        <h1 className="text-white text-2xl">
          Number Of Products :{" "}
          <span className="text-blue-800">{products.length}</span>
        </h1>
        <h1 className="text-white text-2xl text-center my-2">
          Last Product Added is :{" "}
          <span className="text-blue-800">
            {" "}
            {products.at(length - 1).title}
          </span>
        </h1>
        <Link to={"/admin/products"}>
          <Button variant="filled" color="blue">
            Show Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
