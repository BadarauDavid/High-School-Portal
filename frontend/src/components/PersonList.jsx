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
    return(
        <table class="table">

        <thead>
            <tr>
            <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {accounts && accounts.map((acount,index)=>(
                  <tbody>
                  <tr>
                  <th scope="row">{index+1}</th>
                  <td key={acount.username} >{acount.firstName+" "+acount.lastName}</td>
                  <td key={acount.email} >{acount.email}</td>
                  <td key={2*index} >{acount.role}</td>
                  <td key={index} ><button onClick={()=>{handleDelete(acount)}} type="button" className="btn btn-primary btn-sm mx-5">Delete</button></td>
                 </tr>
                  </tbody>))}
          </table>
    )
}