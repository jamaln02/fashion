import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ users }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userGender, setUserGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkUserName, setCheckUserName] = useState(true);
  const [checkUserEmail, setCheckUserEmail] = useState(true);
  const [checkUserPassword, setCheckUserPassword] = useState(true);
  const [checkUserGender, setCheckUserGender] = useState(true);

  const resetCheck = () => {
    setCheckUserName(true);
    setCheckUserEmail(true);
    setCheckUserPassword(true);
    setCheckUserGender(true);
    setLoading(false);
  };

  const navigate = useNavigate();
  const handleSignup = () => {
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (userName == "" || userName.length < 3 || userName.includes(" ")) {
      setCheckUserName(false);
    } else if (userEmail == "" || !emailCheck.test(userEmail)) {
      resetCheck();
      setCheckUserEmail(false);
    } else if (userPassword == "" || userPassword.length < 6) {
      resetCheck();
      setCheckUserPassword(false);
    } else if (userGender == "") {
      resetCheck();
      setCheckUserGender(false);
    } else {
      resetCheck();
      let checkUser = users.some((ele) => ele.email == userEmail);

      if (checkUser) {
        alert("you have registed before");
      } else {
        axios({
          method: "post",
          url: "https://fashone-project.onrender.com/users",
          data: {
            username: userName,
            email: userEmail,
            password: userPassword,
            gender: userGender,
            role: "m",
            img: "https://i0.wp.com/shuoutreach.com/wp-content/uploads/2022/01/person-icon.png?fit=300%2C300&ssl=1",
          },
        }).then((res) => {
          setLoading(true);
          navigate("/loggin");
        });
      }
    }
  };

  return (
    <div>
      <div className="bg-signup h-screen">
        <div className="h-20"></div>
        <div className="w-full flex items-center justify-center">
          <div className="md:w-10/12 flex flex-col justify-center items-center mt-16">
            <div className="md:w-9/12 text-center ">
              {checkUserName ? (
                <h1 className="font-semibold ">USER NAME</h1>
              ) : (
                <h1 className="font-semibold text-red-800">
                  USER NAME NOT CORRECT
                </h1>
              )}
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="rounded-md p-1 md:w-2/4 outline-inplin focus:ring-4 ring-inplin"
                placeholder="enter your name "
              />
            </div>
            <div className="my-3 md:w-9/12 text-center">
              {checkUserEmail ? (
                <h1 className="font-semibold ">EMAIL</h1>
              ) : (
                <h1 className="font-semibold text-red-800">CHECK YOUR EMAIL</h1>
              )}
              <input
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
                className="rounded-md p-1 md:w-2/4  outline-inplin focus:ring-4 ring-inplin"
                placeholder="enter your email"
              />
            </div>
            <div className="md:w-9/12 text-center">
              {checkUserPassword ? (
                <h1 className="font-semibold ">PASSWORD</h1>
              ) : (
                <h1 className="font-semibold text-red-800">
                  CHECK YOUR PASSWORD
                </h1>
              )}
              <input
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                type="password"
                className="rounded-md p-1 md:w-2/4  outline-inplin focus:ring-4 ring-inplin"
                placeholder="enter your password"
              />
            </div>
            <div className="flex flex-col md:flex-row mt-6 mx-3 mb-5 md:w-9/12 text-center justify-center items-center">
              {checkUserGender ? (
                <h1 className="font-semibold mx-8 ">GENDER</h1>
              ) : (
                <h1 className="font-semibold mx-8 text-red-800">
                  PLEASE SELECT YOUR GENDER
                </h1>
              )}
              <select
                value={userGender}
                onChange={(e) => setUserGender(e.target.value)}
                className="mx-5 p-2 rounded-md  outline-inplin focus:ring-4 ring-inplin"
              >
                <option value=""> </option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="font-semibold bg-blue-900 text-white rounded-md p-2">
              {loading ? (
                <Spinner />
              ) : (
                <button onClick={handleSignup}>Creat Account</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
