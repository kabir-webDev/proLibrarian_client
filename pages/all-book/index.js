// import BookList from "../../components/BookList";
import BookList from "../../FireComponents/BookList";
import Layout from "../../Layout";
import BookDataService from "../../FireComponents/BookService/index";

const AllBook = ({ books }) => {
  return (
    <Layout>
      {/* <BookList /> */}
      <BookList book={books} />
    </Layout>
  );
};

export default AllBook;

export async function getServerSideProps(context) {
  try {
    const data = await BookDataService.getAllBooks();
    let books = [];
    data.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
