import BaseApi from './BaseApi';

export default {
  getUserData() {
    return BaseApi.get('userdetails');
  },
};
