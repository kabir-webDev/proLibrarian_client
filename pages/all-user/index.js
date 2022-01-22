// import UserList from "../../components/UserList";
import UserList from "../../FireComponents/UserList";
import Layout from "../../Layout";
import UserDataService from "../../FireComponents/UserService/index";

const AllUser = ({ users }) => {
  return (
    <Layout>
      {/* <UserList /> */}
      <UserList user={users} />
    </Layout>
  );
};

export default AllUser;

export async function getServerSideProps(context) {
  try {
    const data = await UserDataService.getAllUsers();
    let users = [];
    data.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    console.log(users);
    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
