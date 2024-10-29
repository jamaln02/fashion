import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Loggin = ({ users, setIsLogged, setUserId, getUsers }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkUserEmail, setCheckUserEmail] = useState(true);
  const [checkUserPassword, setCheckUserPassword] = useState(true);
  const [eyeIcon, setEyeIcon] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const resetCheck = () => {
    setCheckUserEmail(true);
    setCheckUserPassword(true);
  };

  const handleEye = () => {
    if (eyeIcon == false) {
      setEyeIcon(true);
      setShowPass(true);
    } else {
      setEyeIcon(false);
      setShowPass(false);
    }
  };
  const navigate = useNavigate();
  const handleLoggin = () => {
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmail == "" || !emailCheck.test(userEmail)) {
      setCheckUserEmail(false);
    } else if (userPassword == "" || userPassword.length < 6) {
      resetCheck();
      setCheckUserPassword(false);
    } else {
      resetCheck();
      console.log(users);
      let checkUser = users.some(
        (ele) =>
          ele.email == userEmail &&
          ele.password == userPassword &&
          axios({
            method: "get",
            url: `https://fashone-project.onrender.com/users/${ele.id}`,
          })
            .then((user) => {
              const userdata = user.data;

              setUserId(userdata.id);
              localStorage.k = userdata.id;
              localStorage.r = userdata.role;
              localStorage.l = true;
              setIsLogged(true);
            })
            .then(() => navigate("/"))
      );

      if (!checkUser) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "the password or your name is incorrect!",
        });
      }
    }
  };

  return (
    <div className="bg-signup h-auto p-2 ">
      <div className="h-20"></div>
      <div className="w-full ">
        <div className="w-full flex flex-col justify-center items-center mt-16 text-center">
          <h1 className="text-2xl text-blue-900 font-bold capitalize">
            welcome in male fashion site
          </h1>
          <p className="text-gray-700 capitalize">
            get access to your orders,wishlist and recommendations
          </p>
          <div className="md:w-1/4 my-2">
            {checkUserEmail ? (
              <h1 className="font-semibold my-3 ">EMAIL ADDRESS</h1>
            ) : (
              <h1 className="font-semibold my-3 text-red-800">
                CHECK YOUR EMAIL ADDRESS
              </h1>
            )}
            <input
              value={userEmail}
              type="text"
              placeholder="Enter Your Email"
              className="rounded-md p-1  outline-inplin focus:ring-4 ring-inplin w-full"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="md:w-1/4">
            {checkUserPassword ? (
              <h1 className="font-semibold my-3 ">PASSWORD</h1>
            ) : (
              <h1 className="font-semibold my-3 text-red-800">
                CHECK YOUR PASSWORD
              </h1>
            )}
            <div className="flex justify-end">
              {" "}
              {showPass ? (
                <input
                  value={userPassword}
                  type="text"
                  placeholder="Password"
                  className="rounded-md p-1  outline-inplin focus:ring-4 ring-inplin w-full"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              ) : (
                <input
                  value={userPassword}
                  type="password"
                  placeholder="Password"
                  className="rounded-md p-1  outline-inplin focus:ring-4 ring-inplin w-full"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              )}
              <button
                className=" flex absolute justify-end items-center p-2 "
                onClick={handleEye}
              >
                {eyeIcon ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>
          <div className="md:w-1/4">
            <button
              onClick={handleLoggin}
              className="font-semibold bg-blue-900 text-white rounded-md p-2  m-5"
            >
              Loggin
            </button>
            <Link to={"/signup"}>
              {" "}
              <button className="font-semibold bg-blue-900 text-white rounded-md p-2">
                Creat New Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loggin;
