import React from "react";
import Products from "./Products";

const MainProducts = ({ products, addToCart }) => {
  return (
    <div className="flex flex-wrap justify-evenly items-center">
      {products.map((product, ind) => {
        return <Products key={ind} product={product} addToCart={addToCart} />;
      })}
    </div>
  );
};

export default MainProducts;
