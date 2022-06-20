import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="register">Register</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="userdetails">User Details</NavLink>
      <NavLink to="grades">Grades</NavLink>

      <div>LogIn/LogOut</div>
    </nav>
  );
};

export default Navigation;
