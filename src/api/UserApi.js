import BaseApi from './BaseApi';

export default {
  getUserData(userId) {
    return BaseApi.get(`userdetails/)?user_id=${userId}`);
  },

  updateUserData(userId, data) {
    return BaseApi.put(`userdetails/41?user_id=${userId}`, data);
  },
};
