import react, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ReactLoading from "react-loading";
import { useRouter } from "next/router";
import BookDataService from "../BookService/index";

const BookList = ({ book }) => {
  const [books, setBooks] = useState(book);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // getAllBooks();
  }, [book]);

  const deleteBookData = async (id) => {
    await BookDataService.deleteBook(id);

    router.reload(window.location.pathname);
  };

  const getAllBooks = async () => {
    setLoading(true);
    try {
      let response = await axios.get("http://localhost:5000/all-book");
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  console.log(books);
  return loading == true ? (
    <div className="w-full">
      <div className="flex justify-center">
        <ReactLoading type="spinningBubbles" color="#CB4335" />
      </div>
    </div>
  ) : (
    <div className="w-full flex justify-center items-center">
      <div className="">
        <table>
          <tr className="text-xl text-teal-500">
            <th className="border-2 text-left">
              <div className="py-2 pr-6 pl-2">Id</div>
            </th>
            <th className="text-left border-2 pl-2 w-72">
              <div>Name</div>
            </th>
            <th className="text-left border-2 pl-2 w-52">
              <div>Author</div>
            </th>
            <th className="text-left border-2 pl-2 w-52">
              <div>Publication</div>
            </th>
            <th className="text-left border-2 pl-2 w-52">
              <div>Copies Left</div>
            </th>
            <th className="text-center border-2 pl-2 text-rose-500 w-60">
              <div>Operation</div>
            </th>
          </tr>
          {books.map((book, index) => (
            <tr key={book._id} className="text-lg text-teal-900">
              <td className="border-2 pl-2">
                <span className="text-xl">{index + 1}</span>
              </td>
              <td className="border-2 pl-2">
                <span className="text-xl">{book.name}</span>
              </td>
              <td className="border-2 pl-2">
                <span className="text-xl">{book.author}</span>
              </td>
              <td className="border-2 pl-2">
                <span className="text-xl">{book.publication}</span>
              </td>
              <td className="border-2 pl-2">
                <span className="text-xl">{book.copies}</span>
              </td>
              <td className="border-b-2 border-r-2  flex justify-around ">
                <button className="px-3 py-[6px] bg-emerald-400 hover:text-rose-50 rounded">
                  <Link href={`/edit-book/${book.id}`}>Edit Book</Link>
                </button>{" "}
                <button
                  className="px-3 py-[6px] bg-rose-500 hover:text-rose-50 rounded"
                  onClick={() => deleteBookData(book.id)}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BookList;
