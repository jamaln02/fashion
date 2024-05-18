import { Button } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Users = ({ users, handleAdmin, getUsers, deletUser }) => {
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="mx-10 h-screen">
      <div className="text-center text-4xl mt-10 font-bold text-blue-gray-700">
        Users
      </div>
      <div className="">
        <Link to={"newuser"}>
          {" "}
          <Button variant="filled" color="green">
            Add New User
          </Button>
        </Link>
      </div>
      <div className=" text-center text-lg my-10 mx-5 w-full bg-blue-gray-400">
        <table className="border-collapse border border-slate-400 w-full">
          <tbody>
            <th className="border border-slate-300">User NAME</th>
            <th className="border border-slate-300">Role</th>
            <th className="border border-slate-300">Operations</th>
          </tbody>
          {users.map((user, ind) => (
            <tbody key={ind}>
              <td className="border border-slate-300">{user.username}</td>
              <td className="border border-slate-300">{user.role}</td>
              <td className="border border-slate-300 flex justify-evenly items-center">
                <Link to={`/admin/users/${user.id}`}>
                  <Button
                    className="p-2 m-2 rounded-md "
                    variant="filled"
                    color="blue"
                  >
                    view
                  </Button>
                </Link>
                <Link to={`/admin/users/edit/${user.id}`}>
                  {" "}
                  <Button
                    variant="filled"
                    className="p-2 m-2 bg-orange-600 rounded-md"
                  >
                    edit
                  </Button>
                </Link>
                <Button
                  onClick={() => deletUser(user)}
                  className="p-2 m-2 rounded-md"
                  variant="filled"
                  color="red"
                >
                  del
                </Button>
                {user.role == "a" ? (
                  <Button
                    onClick={() => handleAdmin(user)}
                    variant="filled"
                    className="rounded-md p-2 m-2 bg-gray-600"
                  >
                    Remove Admin
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleAdmin(user)}
                    variant="filled"
                    className="p-2 m-2 rounded-md"
                    color="green"
                  >
                    Make Admin
                  </Button>
                )}
              </td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
