import Layout from "../../Layout";
import { useRouter } from "next/router";
import UserEdit from "../../components/EditUser";

const EditBook = ({ info }) => {
  const router = useRouter();
  return (
    <Layout>
      <UserEdit userid={router.query?.userid} info={info} />
    </Layout>
  );
};

export default EditBook;

export async function getServerSideProps(context) {
  const { userid } = context.query;
  const response = await fetch(`http://localhost:5000/single-user/${userid}`);
  const info = await response.json();
  return {
    props: {
      info,
    },
  };
}
