import axios from 'axios';
import getCookieByName from 'helpers/getCookieByName';

const baseDomain = 'https://edziennikapi.herokuapp.com';

const baseURL = `${baseDomain}/api`;

const bearerToken = getCookieByName('token') ?? '';

export default axios.create({
  headers: {
    Authorization: `Bearer ${bearerToken}`,
  },
  baseURL,
});
