import React from "react";
import Home from "../pages/Home";
import Footer from "../component/Footer";
import NavBar from "../component/Header";
import { Routes, Route } from "react-router-dom";
import MainProducts from "../pages/products/MainProducts";
import Cart from "../pages/Cart";
import Loggin from "../pages/logPages/Loggin";
import Signup from "../pages/logPages/Signup";
import ProfailDetails from "../pages/profile/ProfailDetails";
import EditProfail from "./../pages/profile/EditProfail";
const Layout = ({
  products,
  carts,
  addToCart,
  increment,
  decrement,
  deletProducts,
  users,
  setIsLogged,
  isLogged,
  setUserId,
  userLogged,
  setUserLogged,
  setIsUpdated,
  isUpdated,
  getUsers,
}) => {
  return (
    <div className="">
      <div>
        <NavBar
          carts={carts}
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          userLogged={userLogged}
          setUserLogged={setUserLogged}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<MainProducts products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                carts={carts}
                increment={increment}
                decrement={decrement}
                deletProducts={deletProducts}
              />
            }
          />
          <Route
            path="/loggin"
            element={
              <Loggin
                users={users}
                setIsLogged={setIsLogged}
                setUserId={setUserId}
                getUsers={getUsers}
              />
            }
          />
          <Route path="/signup" element={<Signup users={users} />} />
          <Route
            path="/profile"
            element={<ProfailDetails userLogged={userLogged} />}
          />
          <Route
            path="profile/:userid"
            element={
              <EditProfail
                userLogged={userLogged}
                setUserLogged={setUserLogged}
                setIsUpdated={setIsUpdated}
                isUpdated={isUpdated}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
