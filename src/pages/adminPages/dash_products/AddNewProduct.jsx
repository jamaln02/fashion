import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewProduct = ({ setIsUpdated, isUpdated }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const navigate = useNavigate();
  const handleAdd = () => {
    axios({
      method: "post",
      url: "https://fashone-project.onrender.com/products",
      data: newProduct,
    }).then(() => {
      navigate("/admin/products");
      setIsUpdated(!isUpdated);
    });
  };
  return (
    <div className="h-screen">
      <div className="text-2xl font-semibold text-blue-gray-600 text-center mt-3">
        AddNewProduct
      </div>
      <div className="flex flex-col border-2 mx-8 my-4 justify-evenly items-center text-2xl font-semibold bg-blue-gray-300 rounded-lg ">
        <label className="mt-2">title</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          placeholder="title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />

        <label>price</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="number"
          placeholder="price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />

        <label>description</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          placeholder="description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />

        <label>category</label>
        <input
          placeholder="category"
          type="text"
          className="mx-5  border-blue-gray-500 border-2  rounded-md  outline-inplin focus:ring-4 ring-inplin"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        ></input>

        <label>img</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          placeholder="should start with https//:"
          value={newProduct.img}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />

        <Button className="my-2" onClick={handleAdd}>
          add
        </Button>
      </div>
    </div>
  );
};

export default AddNewProduct;
