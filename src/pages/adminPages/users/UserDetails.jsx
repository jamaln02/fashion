import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = ({ users }) => {
  const [userData, setUserData] = useState({});
  const { userid } = useParams();
  const navigate = useNavigate();
  const getUser = () => {
    axios({
      method: "get",
      url: `https://fashone-project.onrender.com/users/${userid}`,
    }).then((userInfo) => setUserData(userInfo.data));
  };
  useEffect(() => {
    getUser();
  }, [users]);
  return (
    <div className="h-full">
      <div className="text-2xl font-semibold text-blue-gray-600 text-center mt-3">
        User Details
      </div>
      <div className="flex flex-col border-2 mx-8 my-4 justify-evenly items-center text-2xl font-semibold bg-blue-gray-300 rounded-lg h-fit">
        <label className="mt-2">username</label>
        <input
          disabled
          className="text-center rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          value={userData.username}
        />

        <label>email</label>
        <input
          disabled
          className="text-center rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          value={userData.email}
        />

        <label>password</label>
        <input
          disabled
          className="text-center rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          value={userData.password}
        />

        <label>gender</label>
        <select
          disabled
          className="mx-5 text-center border-blue-gray-500 border-2  rounded-md  outline-inplin focus:ring-4 ring-inplin"
          value={userData.gender}
        >
          <option disabled value="">
            user gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <label>role</label>
        <select
          disabled
          className="mx-5 text-center border-blue-gray-500 border-2  rounded-md  outline-inplin focus:ring-4 ring-inplin"
          value={userData.role}
        >
          <option disabled value="">
            admin or member
          </option>
          <option value="a">a</option>
          <option value="m">m</option>
        </select>

        <label>img</label>
        <input
          disabled
          className="text-center rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          value={userData.img}
        />
        <Button className="my-4" onClick={() => navigate(-1)}>
          Back{" "}
        </Button>
      </div>
    </div>
  );
};

export default UserDetails;
