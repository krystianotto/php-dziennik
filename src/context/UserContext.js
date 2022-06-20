import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';

import UserLocalStorageHelper from 'helpers/userLocalStorageHelper';
import userDefaults from 'consts/UserDefaults';

const UserContext = createContext();

const UserProvider = (props) => {
  const [userData, setUserData] = useState(userDefaults);

  useEffect(() => {
    const userLocalStorageHelper = new UserLocalStorageHelper();
    userLocalStorageHelper.setUserData(userData);
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>{props.children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

UserProvider.defaultProps = {
  children: null,
};

export default UserContext;

export { UserProvider };
