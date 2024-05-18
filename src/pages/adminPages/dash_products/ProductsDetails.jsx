import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductsDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const { productid } = useParams();
  const getProduct = () => {
    axios({
      method: "get",
      url: `https://fashone-project.onrender.com/products/${productid}`,
    }).then((productData) => setProductDetails(productData.data));
  };

  useEffect(() => {
    getProduct();
  }, [productid]);
  return (
    <div className="h-screen">
      <div className="text-2xl font-semibold text-blue-gray-600 text-center mt-3">
        Product Details
      </div>
      <div className="flex flex-col border-2 mx-8 my-4 justify-evenly items-center text-2xl font-semibold bg-blue-gray-300 rounded-lg ">
        <label className="mt-2">title</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin w-3/4"
          type="text"
          placeholder="title"
          value={productDetails.title}
        />

        <label>price</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin w-3/4"
          type="number"
          placeholder="price"
          value={productDetails.price}
        />

        <label>description</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin w-3/4"
          type="text"
          placeholder="description"
          value={productDetails.description}
        />

        <label>category</label>
        <input
          placeholder="category"
          type="text"
          className="mx-5  border-blue-gray-500 border-2  rounded-md  outline-inplin focus:ring-4 ring-inplin w-3/4"
          value={productDetails.category}
        ></input>

        <label>img</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin w-3/4"
          type="text"
          placeholder="should start with https//:"
          value={productDetails.image}
        />

        <Link to={"/admin/products"}>
          {" "}
          <Button className="my-2">back</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsDetails;
