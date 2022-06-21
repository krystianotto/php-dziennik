import React, { useContext, useEffect, useState } from 'react';

import isEmpty from 'helpers/isEmpty';

import GradesAPi from 'api/GradesApi';

import UserContext from 'context/UserContext';

import GradesGrid from 'components/GradesGrid';

const Grades = () => {
  const [userGrades, setUserGrades] = useState([]);

  const { userData } = useContext(UserContext);

  useEffect(() => {
    const getUserData = async () => {
      const { user_id: userId } = userData;

      const response = await GradesAPi.getGrades(userId);

      const { data } = response ?? {};

      if (isEmpty(data)) return;

      setUserGrades(data);
    };

    getUserData();
  }, []);

  return <GradesGrid grades={userGrades} />;
};

export default Grades;
