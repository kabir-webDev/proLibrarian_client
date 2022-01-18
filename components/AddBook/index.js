import axios from "axios";
import react, { useState } from "react";

const initialValue = {
  name: "",
  author: "",
  publication: "",
  copies: "",
};

const AddBook = () => {
  const [book, setbook] = useState(initialValue);
  const { name, author, publication, copies } = book;

  const onValueChange = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value });
  };

  const addbookDetails = async () => {
    console.log(book);
    axios
      .post("http://localhost:5000/add-book", book)
      .then((res) => {
        console.log("Backend Response: ", res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setbook(initialValue);
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
            <label className="block">Author</label>

            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="author"
              value={author}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Publication</label>
            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="publication"
              value={publication}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Copies</label>
            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="copies"
              value={copies}
              id="my-input"
            />
          </div>
          <div className="my-5">
            <button
              className="bg-green-400 w-full py-2 rounded text-base  hover:bg-green-300 text-slate-800"
              onClick={() => addbookDetails()}
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
