// returns the cookie with the given name,
// or undefined if not found
const getCookieByName = (name) => {
  let matches = document.cookie.match(
    // eslint-disable-next-line
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : '';
};

export default getCookieByName;
