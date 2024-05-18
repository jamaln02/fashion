import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const ProfailDetails = ({ userLogged }) => {
  return (
    <div className=" ">
      <div className="h-24"></div>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <img src={userLogged.img} />
        </div>
        <div className="mx-10">
          {" "}
          <div className="my-1">
            <h1 className="my-3 text-2xl uppercase text-green-500 font-semibold">
              {userLogged.username}
            </h1>
            <p className="text-gray-500 text-sm font-medium">
              UserName : {userLogged.username}
            </p>
          </div>
          <div className="text-lg text-gray-800">
            <p>My Name Is {userLogged.username}</p>
            <p>I'm {userLogged.gender} and i'm member in this site</p>
          </div>
        </div>
        <hr className="m-3 w-11/12 border-t-2  " />
        <div className="mx-20 my-5">
          <div className="my-10">
            <h1 className="my-5">USER NAME</h1>
            <input
              value={userLogged.username}
              disabled
              type="text"
              className="border-2 border-solid border-inplin  rounded-md p-1 w-2/4  outline-inplin focus:ring-4 ring-inplin"
            />
          </div>
          <div className="my-10">
            <h1 className="my-5">EMAIL</h1>
            <input
              disabled
              value={userLogged.email}
              type="text"
              className="border-2 border-solid border-inplin  rounded-md p-1 w-2/4  outline-inplin focus:ring-4 ring-inplin"
            />
          </div>
          <div className="my-10">
            <h1 className="my-5">PASSWORD</h1>
            <input
              disabled
              value={userLogged.password}
              type="text"
              className="border-2 border-solid border-inplin  rounded-md p-1 w-2/4  outline-inplin focus:ring-4 ring-inplin"
            />
          </div>
          <div className="my-10">
            <h1 className="my-5">GENDER</h1>
            <select className="w-2/4 border-2 border-inplin  p-2 rounded-md  outline-inplin focus:ring-4 ring-inplin">
              <option value={userLogged.gender}>{userLogged.gender}</option>
            </select>
          </div>
          <div>
            <Button variant="outlined" color="green">
              <Link to={`/profile/${userLogged.id}`}>Edit Profile</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfailDetails;
