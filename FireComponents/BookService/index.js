import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../Util/database";

const bookCollectionRef = collection(db, "book");

class BookDataService {
  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "book", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "book", id);
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(collection(db, "book"));
  };

  getBook = (id) => {
    const bookDoc = doc(db, "book", id);
    return getDoc(bookDoc);
  };
}

export default new BookDataService();
