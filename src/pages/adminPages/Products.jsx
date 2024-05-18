import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products, deletProduct }) => {
  return (
    <div className="mx-10">
      <div className="text-center text-4xl mt-10 font-bold text-blue-gray-700">
        Users
      </div>
      <div className="">
        <Link to={"newproduct"}>
          {" "}
          <Button variant="filled" color="green">
            Add New Product
          </Button>
        </Link>
      </div>
      <div className=" text-center text-lg my-10 mx-5 w-full bg-blue-gray-400">
        <table className="border-collapse border  w-full">
          <tbody>
            <th className="border ">Product NAME</th>
            <th className="border ">Price</th>
            <th className="border ">Operations</th>
          </tbody>
          {products.map((product, ind) => (
            <tbody key={ind}>
              <td className="border  ">
                <img
                  src={product.image}
                  alt=""
                  width={"50em"}
                  className="rounded-full border-none inline-flex"
                />
              </td>
              <td className="border ">{product.price} $</td>
              <td className="border flex justify-evenly items-center p-3">
                <Button
                  className="p-2 m-2 rounded-md "
                  variant="filled"
                  color="blue"
                >
                  <Link to={`/admin/products/${product.id}`}>view</Link>
                </Button>
                <Link to={`/admin/products/edit/${product.id}`}>
                  {" "}
                  <Button
                    variant="filled"
                    className="p-2 m-2 bg-orange-600 rounded-md"
                  >
                    edit
                  </Button>
                </Link>
                <Button
                  onClick={() => deletProduct(product)}
                  className="p-2 m-2 rounded-md"
                  variant="filled"
                  color="red"
                >
                  del
                </Button>
              </td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Products;
