import Cookies from 'js-cookie';

const getTokenFromCookies = () => {
    const tokenCookie = Cookies.get("_auth`");
    return tokenCookie;
  };

  const token ="Bearer "+ getTokenFromCookies();
  const headers = { Authorization: token };

  export default headers