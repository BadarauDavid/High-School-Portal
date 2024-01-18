import Cookies from 'js-cookie';

const getEmailFromCookies = () => {
    const emailCookie = Cookies.get("_auth`_state");
    const extractedEmail = emailCookie ? JSON.parse(emailCookie).email : null;
    return extractedEmail;
  };


const  email = getEmailFromCookies();

export default email