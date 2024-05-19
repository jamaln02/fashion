import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import img1 from "../assets/banner-1.jpg";
import img2 from "../assets/banner-2.jpg";
import img3 from "../assets/banner-3.jpg";
import foo1 from "../assets/1fo.jpg";
import foo2 from "../assets/2foo.jpg";
import about from "../assets/about-us.jpg";
import foo4 from "../assets/4foo.jpg";
import hero from "../assets/hero-1.png";
import aboutus from "../assets/about-us.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div
        style={{ backgroundImage: `${hero}` }}
        className=" h-[45em] bg-no-repeat bg-cover bg-top"
      >
        <div className="container h-96 w-full mx-7 ">
          <div className="w-[27rem] h-96 flex flex-col justify-around ms-4 ">
            <h6 className="text-herored font-bold text-[1rem] uppercase mt-48 leading-[5rem] mb-3">
              Summer Collection
            </h6>
            <h2 className="text-5xl font-medium text-heroh2 leading-[3rem]	">
              Fall - Winter Collections 2023
            </h2>
            <p className="font-light leading-[2rem]">
              A specialist label creating luxury essentials. Ethically crafted
              with an unwavering commitment to exceptional quality.
            </p>
            <button className="mt-5 px-4 py-5 bg-herored text-white font-bold flex justify-around w-52 uppercase tracking-[.25em]">
              Shop now
              <div className="text-2xl ">
                <MdOutlineArrowRightAlt />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div className="ms-56 flex items-center justify-center">
          <div className="">
            <div>
              <h1 className="text-4xl font-medium my-3">
                Clothing <br /> Collections 2023
              </h1>
              <Link to={"/products"} className="text-xl underline  ">
                SHOP NOW
              </Link>
            </div>
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center my-2">
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            {" "}
            <div>
              <h1 className="text-4xl font-medium my-3"> Accessories</h1>
            </div>
            <Link to={"/products"} className="text-xl underline  ">
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-medium my-3">Shoes Spring 2023</h1>
            <Link to={"/products"} className="text-xl underline  ">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[5em] bg-about bg-fixed flex items-center justify-center opacity-75">
        <h1 className="text-4xl font-medium text-white">
          Free shipping, 30-day return or refund guarantee.
        </h1>
      </div>
      <div className="mx-20 my-10">
        <div className="grid grid-cols-4 gap-4 ">
          <div>
            <img src={foo1} className="rounded-md" />
            <div className="flex mt-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="gray"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "gray" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
            </div>
            <h1 className="text-2xl mx-3 my-2 font-medium">100 $</h1>
          </div>
          <div>
            <img src={foo2} className="rounded-md" />
            <div className="flex mt-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="gray"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "gray" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
            </div>
            <h1 className="text-2xl mx-3 my-2 font-medium">200$</h1>
          </div>
          <div>
            <img src={about} className="rounded-md h-36" />
            <div className="flex mt-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="gray"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "gray" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
            </div>
            <h1 className="text-2xl mx-3 my-2 font-medium">300 $</h1>
          </div>
          <div>
            <img src={foo4} className="rounded-md" />
            <div className="flex mt-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#f09c00"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(240, 156, 0)" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="gray"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "gray" }}
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
            </div>
            <h1 className="text-2xl mx-3 my-2 font-medium"> 400 $</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
