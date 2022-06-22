import UserContext from 'context/UserContext';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { userData, setUserData } = useContext(UserContext);

  const isUserLoggedIn = !!userData.user_id;

  return (
    <nav className="navigation">
      {!isUserLoggedIn && (
        <NavLink className="navigation__link" to="register">
          Register
        </NavLink>
      )}
      {!isUserLoggedIn && (
        <NavLink className="navigation__link" to="login">
          Login
        </NavLink>
      )}
      {isUserLoggedIn && (
        <NavLink className="navigation__link" to="userdetails">
          User Details
        </NavLink>
      )}
      {isUserLoggedIn && (
        <NavLink className="navigation__link" to="grades">
          Grades
        </NavLink>
      )}

      {isUserLoggedIn && (
        <div className="navigation__link" onClick={() => setUserData({})}>
          LogOut
        </div>
      )}
    </nav>
  );
};

export default Navigation;
