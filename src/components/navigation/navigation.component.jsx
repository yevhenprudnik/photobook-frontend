import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './navigation.styles.scss';
import { UserContext } from '../contexts/user.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">
          <Logo className="logo-container" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <span
              className="nav-link"
              onClick={() => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
              }}
            >
              Log Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Authorize
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
