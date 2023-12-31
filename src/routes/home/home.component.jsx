import { useContext } from "react";
import { UserContext } from "../../components/contexts/user.context";

const Home = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h1>Hello, World!</h1>
      <br />
      {currentUser?.username}
    </div>
  );
};

export default Home;
