import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="register">Register</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="userdetails">User Details</NavLink>
      <NavLink to="grades">Grades</NavLink>
      <NavLink to="calendar">Calendar</NavLink>
    </nav>
  );
};

export default Navigation;
