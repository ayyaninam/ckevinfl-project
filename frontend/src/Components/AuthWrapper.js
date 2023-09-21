import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthWrapper = () => {
  const location = useLocation(); // current location

  const userLogged = JSON.parse(localStorage.getItem("loggedInUser"));

  return userLogged
    ? (<Outlet />)
    : (
      <Navigate
        to="/login"
        replace
        state={{ from: location }} // <-- pass location in route state
      />
    );
};

const AuthWrapperSec = () => {
  const location = useLocation(); // current location

  const userLogged = JSON.parse(localStorage.getItem("loggedInUser"));

  return !userLogged
    ? (<Outlet />)
    : (
      <Navigate
        to="/homepage"
        replace
        state={{ from: location }} // <-- pass location in route state
      />
    );
};

export {AuthWrapper, AuthWrapperSec};
