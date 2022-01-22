import react, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ReactLoading from "react-loading";
import { useRouter } from "next/router";
import UserDataService from "../UserService/index";
import { getDocs, collection, deleteDoc } from "firebase/firestore";
import { db } from "../../Util/database";

const UserList = ({ user }) => {
  const [users, setUsers] = useState(user);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setUsers(user);
  }, [user]);

  console.log("UserList: ", users);

  const deleteUserData = async (id) => {
    // try {
    //   let response = await axios.delete(
    //     `http://localhost:5000/delete-user/${id}`
    //   );
    //   console.log(response);
    //   router.reload(window.location.pathname);
    // } catch (err) {
    //   console.log("Error: ", err);
    // }
    await UserDataService.deleteUser(id);

    router.reload(window.location.pathname);
  };

  const getAllUser = () => {
    setLoading(true);
    console.log("Pokam");
    try {
      getDocs(collection(db, "user")).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
      });

      // setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
      console.log("Users: ", users);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return loading == true ? (
    <div className="w-full">
      <div className="flex justify-center">
        <ReactLoading type="spinningBubbles" color="#CB4335" />
      </div>
    </div>
  ) : (
    <div className="w-full flex justify-center items-center">
      <div className="  ">
        <table>
          <tbody>
            <tr className="text-xl text-teal-500">
              <th className="border-2 text-left">
                <div className="py-2 pr-6 pl-2">Id</div>
              </th>
              <th className="text-left border-2  w-64">
                <div>Name</div>
              </th>
              <th className="text-left border-2 pl-2 w-48">
                <div>Username</div>
              </th>
              <th className="text-left border-2 pl-2 w-72">
                <div>Email</div>
              </th>
              <th className="text-left border-2 pl-2 w-56">
                <div>Phone</div>
              </th>
              <th className="text-center border-2 pl-2 text-rose-500">
                <div>Operation</div>
              </th>
            </tr>
            {users.map((user, index) => (
              <tr key={index} className="text-lg text-teal-900">
                <td className="border-2 pl-2">
                  <span className="text-xl">{index + 1}</span>
                </td>
                <td className="border-2 pl-2">
                  <span className="text-xl">{user.fullname}</span>
                </td>
                <td className="border-2 pl-2">
                  <span className="text-xl">{user.userName}</span>
                </td>
                <td className="border-2 pl-2">
                  <span className="text-xl">{user.email}</span>
                </td>
                <td className="border-2 pl-2">
                  <span className="text-xl">{user.phone}</span>
                </td>
                <td className="border-b-2 border-r-2  flex justify-around ">
                  <button
                    className="px-3 py-[6px] bg-emerald-400 hover:text-rose-50 rounded"
                    to={`/edit/${user._id}`}
                  >
                    <Link href={`/edit-user/${user.id}`}>Edit User</Link>
                  </button>{" "}
                  <button
                    className="px-3 py-[6px] bg-rose-500 hover:text-rose-50 rounded"
                    onClick={() => deleteUserData(user.id)}
                  >
                    <Link href="/all-user">Delete</Link>
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
