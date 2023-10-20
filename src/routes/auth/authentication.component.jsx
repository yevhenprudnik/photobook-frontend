import SignIn from '../../components/authentication/sign-in/sign-in.component';
import SignUp from '../../components/authentication/sign-up/sign-up.component';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignUp />
      <SignIn />
    </div>
  );
};

export default Authentication;
