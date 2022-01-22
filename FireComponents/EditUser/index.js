import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const initialValue = {
  fullname: "",
  userName: "",
  email: "",
  phone: "",
};

export async function getServerSideProps(context) {
  const { userid } = context.query;
  console.log(context);
  const response = await fetch(`http://localhost:5000/single-user/${userid}`);
  const info = await response.json();
  return {
    props: {
      info,
    },
  };
}

const UserEdit = ({ info }) => {
  console.log("Props: ", info);
  const [user, setUser] = useState(initialValue);

  useEffect(() => {
    setUser(info);
  }, [info]);

  console.log("users: ", user);

  const { fullname, userName, email, phone } = user;

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    try {
      let response = await axios.post(
        `http://localhost:5000/edit-user/${info._id}`,
        user
      );
      console.log("Response: ", response);
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
              <Link href="/all-user">Edit User</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
