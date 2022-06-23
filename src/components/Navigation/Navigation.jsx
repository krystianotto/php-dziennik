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
          Rejestracja
        </NavLink>
      )}
      {!isUserLoggedIn && (
        <NavLink className="navigation__link" to="login">
          Logowanie
        </NavLink>
      )}
      {isUserLoggedIn && (
        <NavLink className="navigation__link" to="userdetails">
          Dane
        </NavLink>
      )}
      {isUserLoggedIn && (
        <NavLink className="navigation__link" to="grades">
          Oceny
        </NavLink>
      )}

      {isUserLoggedIn && (
        <div className="navigation__link" onClick={() => setUserData({})}>
          Wyloguj się
        </div>
      )}
    </nav>
  );
};

export default Navigation;
