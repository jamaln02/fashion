import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewUser = ({ getUsers }) => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    role: "",
    img: "",
  });

  const navigate = useNavigate();
  const handleAdd = () => {
    axios({
      method: "post",
      url: "https://fashone-project.onrender.com/users",
      data: newUser,
    }).then(() => {
      navigate("/admin/users");
      getUsers();
    });
  };
  return (
    <div className="h-full">
      <div className="text-2xl font-semibold text-blue-gray-600 text-center mt-3">
        AddNewUser
      </div>
      <div className="flex flex-col border-2 mx-8 my-4 justify-evenly items-center text-2xl font-semibold bg-blue-gray-300 rounded-lg !h-fit">
        <label className="mt-2">username</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          placeholder="username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />

        <label>email</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          placeholder="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />

        <label>password</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          placeholder="password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />

        <label>gender</label>
        <select
          className="mx-5  border-blue-gray-500 border-2  rounded-md  outline-inplin focus:ring-4 ring-inplin"
          value={newUser.gender}
          onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
        >
          <option disabled value="">
            user gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <label>role</label>
        <select
          className="mx-5  border-blue-gray-500 border-2  rounded-md  outline-inplin focus:ring-4 ring-inplin"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option disabled value="">
            admin or member
          </option>
          <option value="a">a</option>
          <option value="m">m</option>
        </select>

        <label>img</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          placeholder="should start with https//:"
          value={newUser.img}
          onChange={(e) => setNewUser({ ...newUser, img: e.target.value })}
        />

        <Button className="my-2" onClick={handleAdd}>
          add
        </Button>
      </div>
    </div>
  );
};

export default AddNewUser;
