import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import BookDataService from "../BookService/index";
import { useRouter } from "next/router";

const initialValue = {
  name: "",
  author: "",
  publication: "",
  copies: "",
};

const AddBook = () => {
  const router = useRouter();
  const [book, setbook] = useState(initialValue);
  const { name, author, publication, copies } = book;

  const onValueChange = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value });
  };

  const addbookDetails = async () => {
    console.log("Data: ", book);
    const newBook = {
      name: book.name,
      author: book.author,
      publication: book.publication,
      copies: book.copies,
      createdAt: new Date().toISOString(),
    };
    try {
      const response = await BookDataService.addBooks(newBook);
      console.log("Response: ", response);
      router.push("/all-book");
      setBook(initialValue);
    } catch (err) {
      console.log(err);
    }
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
              <Link href="/all-book">Add Book</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
