import React, { useEffect, useState, useCallback, useContext } from 'react';

import UserSingleDetail from 'components/UserSingleDetail';

import isEmpty from 'helpers/isEmpty';

import User from 'api/User';

import UserContext from 'context/UserContext';

const UserDetails = () => {
  const [data, setData] = useState({
    name: '',
    surname: '',
    city: '',
    country: '',
    house_number: '',
    street: '',
    postcode: '',
  });

  const { userData, setUserData } = useContext(UserContext);

  const onValueChange = async (fieldName, value) => {
    const { user_id: userId } = userData;

    const response = await User.updateUserData(userId, { [fieldName]: value });

    const { data } = response ?? {};

    if (isEmpty(data)) return;

    setUserData(data);

    setData(data);
  };

  const renderUserData = useCallback(() => {
    const { name, surname, city, country, house_number, street, postcode } = data;

    return (
      <>
        <UserSingleDetail fieldName="name" inputType="text" value={name} onClick={onValueChange} />
        <UserSingleDetail
          fieldName="surname"
          inputType="text"
          value={surname}
          onClick={onValueChange}
        />
        <UserSingleDetail
          fieldName="country"
          inputType="text"
          value={country}
          onClick={onValueChange}
        />
        <UserSingleDetail
          fieldName="street"
          inputType="text"
          value={street}
          onClick={onValueChange}
        />
        <UserSingleDetail
          fieldName="house_number"
          inputType="text"
          value={house_number}
          onClick={onValueChange}
        />
        <UserSingleDetail
          fieldName="postcode"
          inputType="text"
          value={postcode}
          onClick={onValueChange}
        />
        <UserSingleDetail fieldName="city" inputType="text" value={city} onClick={onValueChange} />
      </>
    );
  }, [data]);

  useEffect(() => {
    const getUserData = async () => {
      const { user_id: userId } = userData;

      const response = await User.getUserData(userId);

      const { data } = response ?? {};

      if (isEmpty(data)) return;

      setData(data);
    };

    getUserData();
  }, []);

  if (isEmpty(data)) return null;

  return <section>{renderUserData()}</section>;
};

export default UserDetails;
