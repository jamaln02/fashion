import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = ({ setIsUpdated, isUpdated }) => {
  const [productEdit, setProductEdit] = useState({});
  const { productid } = useParams();
  const getProduct = () => {
    axios({
      method: "get",
      url: `https://fashone-project.onrender.com/products/${productid}`,
    }).then((productData) => setProductEdit(productData.data));
  };

  useEffect(() => {
    getProduct();
  }, [productid]);
  const navigate = useNavigate();

  const handleEdit = () => {
    axios({
      method: "patch",
      url: `https://fashone-project.onrender.com/products/${productid}`,
      data: productEdit,
    }).then(() => {
      setIsUpdated(!isUpdated);
      navigate("/admin/products");
    });
  };
  return (
    <div className="h-screen ">
      <div className="text-2xl font-semibold text-blue-gray-600 text-center mt-3 ">
        Edit Product
      </div>
      <div className="flex flex-col border-2 mx-8 my-4 justify-evenly items-center text-2xl font-semibold bg-blue-gray-300 rounded-lg ">
        <label className="mt-2">title</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin w-3/4"
          type="text"
          placeholder="title"
          value={productEdit.title}
          onChange={(e) =>
            setProductEdit({ ...productEdit, title: e.target.value })
          }
        />

        <label>price</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin w-3/4"
          type="number"
          placeholder="price"
          value={productEdit.price}
          onChange={(e) =>
            setProductEdit({ ...productEdit, price: e.target.value })
          }
        />

        <label>description</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin w-3/4"
          type="text"
          placeholder="description"
          value={productEdit.description}
          onChange={(e) =>
            setProductEdit({ ...productEdit, description: e.target.value })
          }
        />

        <label>category</label>
        <input
          placeholder="category"
          type="text"
          className="mx-5  border-blue-gray-500 border-2  rounded-md  outline-inplin focus:ring-4 ring-inplin w-3/4"
          value={productEdit.category}
          onChange={(e) =>
            setProductEdit({ ...productEdit, category: e.target.value })
          }
        ></input>

        <label>img</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin w-3/4"
          type="text"
          placeholder="should start with https//:"
          value={productEdit.image}
          onChange={(e) =>
            setProductEdit({ ...productEdit, image: e.target.value })
          }
        />

        <Button className="my-2" onClick={handleEdit}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default EditProduct;
