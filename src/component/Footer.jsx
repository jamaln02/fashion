import React, { useRef, useState } from "react";
import logo2 from "../assets/logo2.png";
import pay from "../assets/visa.png";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [userMessage, setUserMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const sendEmail = (e) => {
    const tempaletParams = {
      from_name: userEmail,
      message: userMessage,
      to_name: "jamal",
    };

    e.preventDefault();

    emailjs
      .send(
        "service_zvjr7y7",
        "template_pq995sn",
        tempaletParams,
        "xY5xcP233WtAN09ew"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setUserMessage("");
          setUserEmail("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log(error);
        }
      );
  };

  return (
    <footer className="bg-footer text-white border-t border-gray-300 pt-10 pb-5 text-center md:text-start">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-5">
            <img src={logo2} />
            <p className="mt-8 mx-2">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <img src={pay} width={"70%"} className="mt-5  center" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5">
            <ul className="list-none mx-8 ">
              <li>
                <h1 className="text-white text-2xl font-medium uppercase">
                  Shopping
                </h1>
              </li>
              <li className="mb-2">
                <a href="#" className="">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="">
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5">
            <h5 className="uppercase  mb-5 text-xl font-medium">PARTNER</h5>
            <div className="grid grid-cols-2 md:w-3/5 gap-5">
              <div className="flex flex-col justify-center items-center ">
                <img src={company1} alt="" />
                <img src={company2} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={company3} alt="" />
                <img src={company4} alt="" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5">
            <h5 className="uppercase font-medium mb-5 text-xl">Newletter</h5>
            <p>
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
            <form
              onSubmit={sendEmail}
              className=" position-relative flex flex-col justify-center md:justify-start"
            >
              <input
                className="w-100 myemil position-relative bg-transparent"
                placeholder="Your message"
                type="text"
                name="message"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <hr />
              <div>
                {" "}
                <input
                  className="w-100 myemil position-relative bg-transparent"
                  placeholder="Your email"
                  type="text"
                  name="from_name"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <button
                  className="position-absolute"
                  style={{ top: "10px", right: "10px", fontSize: "20px" }}
                  type="submit"
                  value="Send"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1.5em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                  </svg>
                </button>
                <hr />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-300">
        <p className="text-gray-600">&copy; 2023 & 2020 Company.</p>
      </div>
    </footer>
  );
};

export default Footer;
