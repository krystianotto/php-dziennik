import BaseApi from './BaseApi';

export default {
  getGrade(userId) {
    return BaseApi.get(`grade?user_id=${userId}`);
  },
};
