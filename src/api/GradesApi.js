import BaseApi from './BaseApi';

export default {
  getGrades(userId) {
    return BaseApi.get(`grade?user_id=${userId}`);
  },
};
