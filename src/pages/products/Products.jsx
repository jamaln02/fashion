import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Products = ({ product, addToCart }) => {
  return (
    <div className="mt-28">
      <Card className="w-[18rem] h-[25rem] shadow-none hover:shadow-xl">
        <CardHeader shadow={false} floated={false} className="h-full">
          <img
            src={product.image}
            alt="card-image"
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 ">
            <Typography
              color="blue-gray"
              variant="paragraph"
              className=" font-bold h-5 w-48 overflow-hidden"
            >
              {product.title}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 h-10 overflow-hidden"
          >
            {product.description}
          </Typography>
          <Typography color="orange" variant="h6" className="mt-3 font-bold">
            {product.price} $
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className=" bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Products;
