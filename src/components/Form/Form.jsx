import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Authentication from 'api/Authentication';

const REGISTER_TYPE = 'Register';
const LOGIN_TYPE = 'Login';

const Form = ({ type }) => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  const handleRegisterUser = useCallback(async () => {
    try {
      const response =
        type === REGISTER_TYPE
          ? await Authentication.addNewUser(userData)
          : await Authentication.logIn(userData);

      const accessToken = response.data?.access_token;
      document.cookie = 'token=' + accessToken + '; max-age=2147483647;';
    } catch (error) {
      console.error(error);
    }
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

      <button onClick={handleRegisterUser}>{type}</button>
    </>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf([LOGIN_TYPE, REGISTER_TYPE]),
};

Form.defaultProps = {
  type: LOGIN_TYPE,
};

export default Form;
