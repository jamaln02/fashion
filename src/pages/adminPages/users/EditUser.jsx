import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = ({ setIsUpdated, isUpdated }) => {
  const [userEdit, setUserEdit] = useState({});

  const { userid } = useParams();
  const getUser = () => {
    axios({
      method: "get",
      url: `https://fashone-project.onrender.com/users/${userid}`,
    }).then((userInfo) => setUserEdit(userInfo.data));
  };
  useEffect(() => {
    getUser();
  }, [userid]);
  const navigate = useNavigate();
  const handleEdit = () => {
    axios({
      method: "patch",
      url: `https://fashone-project.onrender.com/users/${userid}`,
      data: userEdit,
    }).then(() => {
      setIsUpdated(!isUpdated);
      navigate("/admin/users");
    });
  };
  return (
    <div className="h-full">
      <div className="text-2xl font-semibold text-blue-gray-600 text-center mt-3">
        AddNewUser
      </div>
      <div className="flex flex-col border-2 mx-8 my-4 justify-evenly items-center text-2xl font-semibold bg-blue-gray-300 rounded-lg h-fit">
        <label className="mt-2">username</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          placeholder="username"
          value={userEdit.username}
          onChange={(e) =>
            setUserEdit({ ...userEdit, username: e.target.value })
          }
        />

        <label>email</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          placeholder="email"
          value={userEdit.email}
          onChange={(e) => setUserEdit({ ...userEdit, email: e.target.value })}
        />

        <label>password</label>
        <input
          className="rounded-md border-blue-gray-500 border-2 outline-inplin focus:ring-4 ring-inplin "
          type="text"
          placeholder="password"
          value={userEdit.password}
          onChange={(e) =>
            setUserEdit({ ...userEdit, password: e.target.value })
          }
        />

        <label>gender</label>
        <select
          className="mx-5  border-blue-gray-500 border-2  rounded-md  outline-inplin focus:ring-4 ring-inplin"
          value={userEdit.gender}
          onChange={(e) => setUserEdit({ ...userEdit, gender: e.target.value })}
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
          value={userEdit.role}
          onChange={(e) => setUserEdit({ ...userEdit, role: e.target.value })}
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
          value={userEdit.img}
          onChange={(e) => setUserEdit({ ...userEdit, img: e.target.value })}
        />

        <Button className="my-2" onClick={handleEdit}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default EditUser;
