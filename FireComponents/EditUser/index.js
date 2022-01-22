import { useState, useEffect } from "react";
import UserDataService from "../UserService/index";

import Link from "next/link";
import { useRouter } from "next/router";

const initialValue = {
  fullname: "",
  userName: "",
  email: "",
  phone: "",
};

const UserEdit = ({ users, userid }) => {
  const router = useRouter();
  console.log("Props: ", users);
  const [user, setUser] = useState(users);

  console.log("users: ", user);

  const { fullname, userName, email, phone } = user;

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    try {
      await UserDataService.updateUser(userid, user);
      router.push("/all-user");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-zinc-700 w-full text-red-50">
      <h2 className="text-center">Add user</h2>
      <div className="flex flex-col items-center">
        <div>
          <div className="w-1/5">
            <label className="block">Name</label>
            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="fullname"
              value={fullname}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Username</label>

            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="userName"
              value={userName}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Email</label>
            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="email"
              value={email}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Phone</label>
            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="phone"
              value={phone}
              id="my-input"
            />
          </div>
          <div className="my-5">
            <button
              className="bg-green-400 w-full py-2 rounded text-base  hover:bg-green-300 text-slate-800"
              onClick={() => editUserDetails()}
            >
              Edit User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
