import { useContext } from 'react';
import { UserContext } from '../../components/contexts/user.context';

const Home = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      Hello, World!
      <br />
      {currentUser?.username}
    </div>
  );
};

export default Home;
