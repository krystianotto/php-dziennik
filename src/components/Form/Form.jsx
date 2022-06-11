import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Authentication from 'api/Authentication';

const Form = ({ type }) => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  const handleRegisterUser = useCallback(async () => {
    const response =
      type === 'Register'
        ? await Authentication.addNewUser(userData)
        : await Authentication.logIn(userData);

    console.log(response);
  }, [userData, type]);

  return (
    <>
      <label>Nazwa</label>
      <input
        type="text"
        onChange={(e) => {
          setUserData((data) => ({ ...data, name: e.target.value }));
        }}
      />

      <label>Email</label>
      <input
        type="email"
        onChange={(e) => {
          setUserData((data) => ({ ...data, email: e.target.value }));
        }}
      />

      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setUserData((data) => ({ ...data, password: e.target.value }));
        }}
      />

      <button onClick={handleRegisterUser}>Rejestracja</button>
    </>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf(['Login', 'Register']),
};

Form.defaultProps = {
  type: 'Login',
};

export default Form;
