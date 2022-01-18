import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//   const todo = await res.json();

//   return {
//     props: {
//       todo,
//     },
//   };
// };

export async function getServerSideProps(context) {
  const { userid } = context.query;
  console.log(context);
  // const response = await fetch(`http://localhost:5000/single-user/${userid}`);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
  const info = await response.json();
  return {
    props: {
      info,
    },
  };

  //   // const id = 1;
  //   // const res = await fetch(`https://restcountries.eu/rest/v2/name/${id}`);
  //   // const country = await res.json();
  //   // console.log(`Fetched place: ${country.name}`);
  //   // return { props: { country } };

  //   // const { id } = context.params; // Use `context.params` to get dynamic params
  //   //   const res = await fetch(`https://restcountries.com/v2/name/${id}`); // Using `restcountries.com` as `restcountries.eu` is no longer accessible
  //   //   const countryList = await res.json();
  //   //   const [country] = countryList; // Get first item in array returned from API

  //   //   return { props: { country } };
}

const UserEdit = ({ todo }) => {
  console.log("Props: ", todo);
  const [book, setBook] = useState(initialValue);

  // useEffect(() => {
  //   setBook(info);
  // }, [info]);

  console.log("Books: ", book);

  const { name, username, email, phone } = book;

  const onValueChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    // const response = await editUser(id, user);
    // history.push("/all");
    console.log("Book Edit List: ", book);
  };

  return (
    <div className="bg-zinc-700 w-full text-red-50">
      <h2 className="text-center">Add Book</h2>
      <div className="flex flex-col items-center">
        <div>
          <div className="w-1/5">
            <label className="block">Name</label>
            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Username</label>

            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="username"
              value={username}
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
