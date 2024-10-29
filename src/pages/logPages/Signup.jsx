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
  const [darkMode, setDarkMode] = useState(false);
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
          url: "https://fashone-project.onrender.com/users/",
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
    // <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#282D2D] px-5">
    //   <div className=" flex flex-col items-end justify-start  overflow-hidden mb-2 xl:max-w-3xl w-full">
    //     <div className="flex">
    //       <h3 className="text-white">Dark Mode : &nbsp;</h3>
    //       <label class="inline-flex relative items-center mr-5 cursor-pointer">
    //         <input
    //           type="checkbox"
    //           className="sr-only peer"
    //           checked={darkMode}
    //           readOnly
    //         />
    //         <div
    //           onClick={() => {
    //             setDarkMode(!darkMode);
    //           }}
    //           className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
    //         ></div>
    //       </label>
    //     </div>
    //   </div>
    //   <div
    //     className={`xl:max-w-3xl ${
    //       darkMode ? "bg-black" : "bg-white"
    //     }  w-full p-5 sm:p-10 rounded-md`}
    //   >
    //     <h1
    //       className={`text-center text-xl sm:text-3xl font-semibold ${
    //         darkMode ? "text-white" : "text-black"
    //       }`}
    //     >
    //       Register for a free account
    //     </h1>
    //     <div className="w-full mt-8">
    //       <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
    //         <div className="flex flex-col sm:flex-row gap-3">
    //           {checkUserName ? (
    //             <h1 className="font-semibold ">USER NAME</h1>
    //           ) : (
    //             <h1 className="font-semibold text-red-800">
    //               USER NAME NOT CORRECT
    //             </h1>
    //           )}
    //           <input
    //             value={userName}
    //             onChange={(e) => setUserName(e.target.value)}
    //             className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${
    //               darkMode
    //                 ? "bg-[#302E30] text-white focus:border-white"
    //                 : "bg-gray-100 text-black focus:border-black"
    //             }`}
    //             type="text"
    //             placeholder="Your first name"
    //           />
    //           <input
    //             className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
    //               darkMode
    //                 ? "bg-[#302E30] text-white focus:border-white"
    //                 : "bg-gray-100 text-black focus:border-black"
    //             }`}
    //             type="text"
    //             placeholder="Your last name"
    //           />
    //         </div>
    //         {checkUserEmail ? (
    //           <h1 className="font-semibold ">EMAIL</h1>
    //         ) : (
    //           <h1 className="font-semibold text-red-800">CHECK YOUR EMAIL</h1>
    //         )}
    //         <input
    //           value={userEmail}
    //           onChange={(e) => setUserEmail(e.target.value)}
    //           className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
    //             darkMode
    //               ? "bg-[#302E30] text-white focus:border-white"
    //               : "bg-gray-100 text-black focus:border-black"
    //           }`}
    //           type="email"
    //           placeholder="Enter your email"
    //         />
    //         <input
    //           className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
    //             darkMode
    //               ? "bg-[#302E30] text-white focus:border-white"
    //               : "bg-gray-100 text-black focus:border-black"
    //           }`}
    //           type="tel"
    //           placeholder="Enter your phone"
    //         />
    //         {checkUserPassword ? (
    //           <h1 className="font-semibold ">PASSWORD</h1>
    //         ) : (
    //           <h1 className="font-semibold text-red-800">
    //             CHECK YOUR PASSWORD
    //           </h1>
    //         )}
    //         <input
    //           value={userPassword}
    //           onChange={(e) => setUserPassword(e.target.value)}
    //           className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
    //             darkMode
    //               ? "bg-[#302E30] text-white focus:border-white"
    //               : "bg-gray-100 text-black focus:border-black"
    //           }`}
    //           type="password"
    //           placeholder="Password"
    //         />
    //         <button className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
    //           <svg
    //             className="w-6 h-6 -ml-2"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    //             <circle cx="8.5" cy="7" r="4" />
    //             <path d="M20 8v6M23 11h-6" />
    //           </svg>
    //           <span className="ml-3">Register</span>
    //         </button>
    //         <p className="mt-6 text-xs text-gray-600 text-center">
    //           Already have an account?{" "}
    //           <a href="">
    //             <span className="text-[#E9522C] font-semibold">Login</span>
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Signup;
