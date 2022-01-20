import BookEdit from "../../components/BookEdit";
import Layout from "../../Layout";
import { useRouter } from "next/router";

const EditBook = ({ info }) => {
  const router = useRouter();
  return (
    <Layout>
      <BookEdit bookid={router.query?.bookid} info={info} />
    </Layout>
  );
};

export default EditBook;

export async function getServerSideProps(context) {
  const { bookid } = context.query;
  const response = await fetch(`http://localhost:5000/single-book/${bookid}`);
  const info = await response.json();
  return {
    props: {
      info,
    },
  };
}
