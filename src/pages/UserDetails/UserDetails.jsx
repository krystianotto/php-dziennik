import React, { useEffect } from 'react';

import User from 'api/User';

const UserDetails = () => {
  useEffect(() => {
    const getUserData = async () => {
      const response = await User.getUserData();

      console.log(response);
    };

    getUserData();
  }, []);

  return <div>User Details View</div>;
};

export default UserDetails;
