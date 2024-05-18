import { button } from "@material-tailwind/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoMdCard } from "react-icons/io";
import emptyCart from "../assets/empty-cart.jpg";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Cart = ({ carts, increment, decrement, deletProducts }) => {
  const navigate = useNavigate();

  let total = 0;
  if (carts.length > 0) {
    return (
      <div className="mx-12">
        <div className="h-28"></div>
        <div className="flex justify-between flex-wrap">
          <div className="w-3/4">
            {" "}
            {carts.map((cart, ind) => (
              <div key={ind} className="mb-10">
                <div className="w-3/4 h-[10em] flex justify-around items-center">
                  <div className="w-20 h-20">
                    <img src={cart.image} />
                  </div>
                  <div className="ms-2">{cart.title}</div>
                  <div className="ms-2 font-semibold">
                    {Math.ceil(cart.price)} $
                  </div>
                </div>
                <div className="ms-3  w-11/12 flex justify-evenly items-center">
                  <div>
                    {cart.item < 2 ? (
                      <button
                        disabled
                        className="bg-blue-gray-200 rounded-md w-20 h-8 text-white hover:bg-blue-gray-100"
                        onClick={() => decrement(cart)}
                      >
                        Decres
                      </button>
                    ) : (
                      <button
                        className="bg-red-300 rounded-md w-20 h-8 text-white hover:bg-red-200 "
                        onClick={() => decrement(cart)}
                      >
                        Decres
                      </button>
                    )}
                  </div>
                  <div>{cart.item}</div>
                  <div>
                    <button
                      className="bg-btnincr rounded-md w-20 h-8 text-white hover:bg-green-200"
                      onClick={() => increment(cart)}
                    >
                      Increse
                    </button>
                  </div>
                  <div className="font-bold text-xl">
                    {Math.ceil(cart.item * cart.price)} $
                  </div>
                  <div>
                    <button
                      className="text-lg hover:text-gray-800"
                      onClick={() => deletProducts(cart)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
                <hr className="m-3 w-11/12 border-t-4 " />
              </div>
            ))}
          </div>
          <div className="w-1/4">
            <div className="bg-navColor p-5 mx-3">
              <div className="text-xl uppercase font-medium mb-3">
                cart total
              </div>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-semibol mb-2">
                  {" "}
                  {
                    (total = carts
                      .map((ele) => ele.price * ele.item)
                      .reduce((one, tow) => Math.ceil(one + tow)))
                  }{" "}
                  $
                </div>
                <div className="text-2xl">
                  <IoMdCard />
                </div>
              </div>
              <div className="flex justify-center">
                <button className="w-3/4 h-10 bg-blue-gray-500 content-center">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center">
            <img src={emptyCart} className="w-1/3 mt-16" />
          </div>
          <div>
            <button
              className="bg-btnincr rounded-md p-3 text-white hover:bg-green-200 flex flex-row justify-between items-center"
              onClick={() => navigate("/products")}
            >
              SHOP NOW
              <BsCart4 className="ms-3 text-lg mb-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
