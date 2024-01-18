import axios from "axios"
import DefaultURL from "../utils/GlobalVar";
 import Cookies from 'js-cookie';
export default function PersonList({accounts,doSignal}){


    const getTokenFromCookies = () => {
      const tokenCookie = Cookies.get("_auth`");
      return tokenCookie;
    };
  
  const token ="Bearer "+ getTokenFromCookies();
  const headers = { Authorization: token };

  const handleDelete =async (account)=>{
   await axios.delete(`${DefaultURL}/user/admin/deleteById/${account.id}`,
   {headers})
    doSignal();

  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {accounts &&
          accounts.map((account, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{account.firstName + " " + account.lastName}</td>
              <td>{account.email}</td>
              <td>{account.role}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(account);
                  }}
                  type="button"
                  className="btn btn-primary btn-sm mx-5"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}