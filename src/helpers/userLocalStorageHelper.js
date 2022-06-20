export default class UserLocalStorageHelper {
  userDataLocalStorageKey = 'userData';

  getUserData() {
    const userData = localStorage.getItem(this.userDataLocalStorageKey);

    if (userData) return JSON.parse(userData);

    return {};
  }

  setUserData(userData) {
    return localStorage.setItem(this.userDataLocalStorageKey, JSON.stringify(userData));
  }
}
