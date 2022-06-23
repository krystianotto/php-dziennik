import React, { useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import Authentication from 'api/Authentication';

import UserContext from 'context/UserContext';

const REGISTER_TYPE = 'Register';
const LOGIN_TYPE = 'Login';

const Form = ({ type }) => {
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const { setUserData } = useContext(UserContext);

  const handleButtonClick = useCallback(async () => {
    try {
      const response =
        type === REGISTER_TYPE
          ? await Authentication.addNewUser(data)
          : await Authentication.logIn(data);

      const { access_token: accessToken, user_data: userData = {} } = response.data ?? {};
      const { id: userId, email, name } = userData;

      setUserData({ user_id: userId, email, name });
      document.cookie = 'token=' + accessToken + '; max-age=2147483647;';
    } catch (error) {
      console.error(error);
    }
  }, [data, type]);

  return (
    <div className="form">
      {type === REGISTER_TYPE && (
        <div className="form__input-group">
          <label>Nazwa</label>
          <input
            type="text"
            onChange={(e) => {
              setData((data) => ({ ...data, name: e.target.value }));
            }}
          />
        </div>
      )}

      <div className="form__input-group">
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => {
            setData((data) => ({ ...data, email: e.target.value }));
          }}
        />
      </div>

      <div className="form__input-group">
        <label>Hasło</label>
        <input
          type="password"
          onChange={(e) => {
            setData((data) => ({ ...data, password: e.target.value }));
          }}
        />
      </div>

      <button onClick={handleButtonClick}>{type}</button>
    </div>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf([LOGIN_TYPE, REGISTER_TYPE]),
};

Form.defaultProps = {
  type: LOGIN_TYPE,
};

export default Form;
