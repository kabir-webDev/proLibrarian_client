import react, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ReactLoading from "react-loading";
import { useRouter } from "next/router";

const UserList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getAllBooks();
  }, []);

  const deleteBookData = async (id) => {
    try {
      let response = await axios.delete(
        `http://localhost:5000/delete-book/${id}`
      );
      console.log(response);
      router.reload(window.location.pathname);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const getAllBooks = async () => {
    setLoading(true);
    try {
      let response = await axios.get("http://localhost:5000/all-book");
      setBooks(response.data);
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
    <div className="w-full">
      <div className="w-11/12 m-auto">
        <table>
          <tr className="text-xl text-teal-500">
            <th className="border-2 text-left">
              <div className="py-2 pr-6 pl-2">Id</div>
            </th>
            <th className="text-left border-2 pl-2">
              <div>Name</div>
            </th>
            <th className="text-left border-2 pl-2">
              <div>Author</div>
            </th>
            <th className="text-left border-2 pl-2">
              <div>Publication</div>
            </th>
            <th className="text-left border-2 pl-2">
              <div>Copies Left</div>
            </th>
            <th className="text-center border-2 pl-2 text-rose-500">
              <div>Operation</div>
            </th>
          </tr>
          {books.map((book, index) => (
            <tr key={book._id} className="text-lg text-teal-900">
              <td className="border-2 pl-2">
                <span className="text-xl">{index + 1}</span>
              </td>
              <td className="border-2 pr-6 pl-2">
                <span className="text-xl">{book.name}</span>
              </td>
              <td className="border-2 pr-6 pl-2">
                <span className="text-xl">{book.author}</span>
              </td>
              <td className="border-2 pr-6 pl-2">
                <span className="text-xl">{book.publication}</span>
              </td>
              <td className="border-2 pr-6 pl-2">
                <span className="text-xl">{book.copies}</span>
              </td>
              <td className="border-2">
                <button className="px-4 py-2 bg-emerald-400 hover:text-rose-50 rounded">
                  <Link href={`/edit-book/${book._id}`}>Edit Book</Link>
                </button>{" "}
                <button
                  className="px-4 py-2 bg-rose-500 hover:text-rose-50 rounded"
                  onClick={() => deleteBookData(book._id)}
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

export default UserList;
