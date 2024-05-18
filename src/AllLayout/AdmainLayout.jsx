import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/adminPages/Admin";
import Users from "../pages/adminPages/Users";
import Products from "../pages/adminPages/Products";
import AdminHeader from "../component/AdminHeader";
import AddNewUser from "../pages/adminPages/users/AddNewUser";
import UserDetails from "../pages/adminPages/users/UserDetails";
import EditUser from "../pages/adminPages/users/EditUser";
import ProductsDetails from "../pages/adminPages/dash_products/ProductsDetails";
import EditProduct from "../pages/adminPages/dash_products/EditProduct";
import AdminSideBar from "../component/AdminSideBar";
import AddNewProduct from "./../pages/adminPages/dash_products/AddNewProduct";

const AdmainLayout = ({
  products,
  users,
  setUsers,
  getUsers,
  handleAdmin,
  deletUser,
  setIsUpdated,
  isUpdated,
  deletProduct,
}) => {
  return (
    <div>
      <AdminHeader />
      <div className="flex ">
        <AdminSideBar />
        <div className="w-3/4">
          <Routes>
            <Route
              path="/"
              element={<Admin products={products} users={users} />}
            />
            <Route
              path="/users"
              element={
                <Users
                  users={users}
                  setUsers={setUsers}
                  handleAdmin={handleAdmin}
                  getUsers={getUsers}
                  deletUser={deletUser}
                />
              }
            />
            <Route
              path="users/:userid"
              element={
                <UserDetails
                  getUsers={getUsers}
                  setUsers={setUsers}
                  users={users}
                />
              }
            />
            <Route
              path="users/edit/:userid"
              element={
                <EditUser setIsUpdated={setIsUpdated} isUpdated={isUpdated} />
              }
            />
            <Route
              path="users/newuser"
              element={<AddNewUser getUsers={getUsers} />}
            />
            <Route
              path="/products"
              element={
                <Products products={products} deletProduct={deletProduct} />
              }
            />
            <Route
              path="products/newproduct"
              element={
                <AddNewProduct
                  setIsUpdated={setIsUpdated}
                  isUpdated={isUpdated}
                />
              }
            />
            <Route path="products/:productid" element={<ProductsDetails />} />
            <Route
              path="products/edit/:productid"
              element={
                <EditProduct
                  setIsUpdated={setIsUpdated}
                  isUpdated={isUpdated}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdmainLayout;
