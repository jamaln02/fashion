import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProfail = ({
  userLogged,
  setUserLogged,
  setIsUpdated,
  isUpdated,
}) => {
  const [userEdit, setUserEdit] = useState({
    username: userLogged.username,
    email: userLogged.email,
    password: userLogged.password,
    gender: userLogged.gender,
    role: userLogged.role,
    img: userLogged.img,
  });

  const navigate = useNavigate();

  const { userid } = useParams();

  const handleEdit = () => {
    axios({
      method: "patch",
      url: `https://fashone-project.onrender.com/users/${userid}`,
      data: userEdit,
    }).then((data) => {
      setUserLogged(data.data);
      setIsUpdated(!isUpdated);
      navigate("/profile");
    });
  };
  return (
    <div>
      <div className="h-24"></div>
      <div className="w-full ">
        <div className="flex justify-evenly items-center">
          <img src={userLogged.img} />
          <h1 className=" text-2xl font-semibold text-gray-700">
            My Profile Ready To Change...{" "}
          </h1>
        </div>

        <hr className="m-3 w-11/12 border-t-2  " />
        <div className="mx-20 my-5">
          <div className="my-10">
            <h1 className="my-5">USER NAME</h1>
            <input
              onChange={(e) =>
                setUserEdit({ ...userEdit, username: e.target.value })
              }
              value={userEdit.username}
              type="text"
              className="border-2 border-solid border-inplin  rounded-md p-1 w-2/4  outline-inplin focus:ring-4 ring-inplin"
            />
          </div>
          <div className="my-10">
            <h1 className="my-5">EMAIL</h1>
            <input
              onChange={(e) =>
                setUserEdit({ ...userEdit, email: e.target.value })
              }
              value={userEdit.email}
              type="text"
              className="border-2 border-solid border-inplin  rounded-md p-1 w-2/4  outline-inplin focus:ring-4 ring-inplin"
            />
          </div>
          <div className="my-10">
            <h1 className="my-5">PASSWORD</h1>
            <input
              onChange={(e) =>
                setUserEdit({ ...userEdit, password: e.target.value })
              }
              value={userEdit.password}
              type="text"
              className="border-2 border-solid border-inplin  rounded-md p-1 w-2/4  outline-inplin focus:ring-4 ring-inplin"
            />
          </div>
          <div className="my-10">
            <h1 className="my-5">GENDER</h1>
            <select
              value={userEdit.gender}
              onChange={(e) =>
                setUserEdit({ ...userEdit, gender: e.target.value })
              }
              className="w-2/4 border-2 border-inplin  p-2 rounded-md  outline-inplin focus:ring-4 ring-inplin"
            >
              <option value={"male"}>male</option>
              <option value={"female"}>female</option>
            </select>
          </div>
          <div>
            <Button variant="outlined" color="blue" onClick={handleEdit}>
              {" "}
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfail;
