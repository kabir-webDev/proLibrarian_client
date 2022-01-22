import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import BookDataService from "../BookService/index";

const initialValue = {
  name: "",
  author: "",
  publication: "",
  copies: "",
};

const EditBook = ({ books, bookid }) => {
  const router = useRouter();
  const [book, setBook] = useState(books);
  useEffect(() => {}, [book]);

  console.log("Books: ", book);

  const { name, author, publication, copies } = book;

  const onValueChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    try {
      await BookDataService.updateBook(bookid, book);
      router.push("/all-book");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-zinc-700 w-full text-red-50">
      <h2 className="text-center pt-6 text-2xl">Edit Book</h2>
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
              onClick={() => editUserDetails()}
            >
              <Link href="/all-book">Edit Book</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
