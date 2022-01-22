import Layout from "../../Layout";
import { useRouter } from "next/router";
// import UserEdit from "../../components/EditUser";
import UserEdit from "../../FireComponents/EditUser";
import UserDataService from "../../FireComponents/UserService/index";

// const EditBook = ({ info }) => {
//   const router = useRouter();
//   return (
//     <Layout>
//       <UserEdit userid={router.query?.userid} info={info} />
//     </Layout>
//   );
// };

const EditBook = ({ users }) => {
  const router = useRouter();
  return (
    <Layout>
      <UserEdit userid={router.query?.userid} users={users} />
    </Layout>
  );
};

export default EditBook;

export async function getServerSideProps(context) {
  // const { userid } = context.query;
  // const response = await fetch(`http://localhost:5000/single-user/${userid}`);
  // const info = await response.json();
  // return {
  //   props: {
  //     info,
  //   },
  // };
  const { userid } = context.query;
  try {
    console.log(userid);
    const data = await UserDataService.getUser(userid);
    console.log("WTF: ", data.data().fullname);
    let users = {
      fullname: data.data().fullname,
      userName: data.data().userName,
      email: data.data().email,
      phone: data.data().phone,
    };
    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
