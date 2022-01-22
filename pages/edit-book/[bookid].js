// import BookEdit from "../../components/BookEdit";
import BookEdit from "../../FireComponents/BookEdit";
import Layout from "../../Layout";
import { useRouter } from "next/router";
import BookDataService from "../../FireComponents/BookService/index";

// const EditBook = ({ info }) => {
//   const router = useRouter();
//   return (
//     <Layout>
//       <BookEdit bookid={router.query?.bookid} info={info} />
//     </Layout>
//   );
// };

const EditBook = ({ books }) => {
  const router = useRouter();
  return (
    <Layout>
      <BookEdit bookid={router.query?.bookid} books={books} />
    </Layout>
  );
};

export default EditBook;

export async function getServerSideProps(context) {
  const { bookid } = context.query;
  // const response = await fetch(`http://localhost:5000/single-book/${bookid}`);
  // const info = await response.json();
  // return {
  //   props: {
  //     info,
  //   },
  // };
  try {
    console.log(bookid);
    const data = await BookDataService.getBook(bookid);
    let books = {
      name: data.data().name,
      author: data.data().author,
      publication: data.data().publication,
      copies: data.data().copies,
    };
    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
