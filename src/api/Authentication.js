import BaseApi from './BaseApi';

export default {
  addNewUser({ name, email, password }) {
    return BaseApi.post(`register?name=${name}&email=${email}&password=${password}`);
  },

  logIn({ name, email, password }) {
    return BaseApi.post(`login?name=${name}&email=${email}&password=${password}`);
  },
};
