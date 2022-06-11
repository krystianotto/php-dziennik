import axios from 'axios';

const baseDomain =
  process.env.NODE_ENV === 'production' ? '' : 'https://edziennikapi.herokuapp.com';

const baseURL = `${baseDomain}/api`;

export default axios.create({
  baseURL,
});
