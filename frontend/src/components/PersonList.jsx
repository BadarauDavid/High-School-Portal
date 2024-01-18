import axios from "axios"
import DefaultURL from "../utils/GlobalVar";
import headers from "../utils/GlobalToken";
 import { useNavigate } from "react-router-dom";
export default function PersonList({accounts,doSignal}){
  const nav = useNavigate();

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
          <th scope="col">EditClassroom</th>
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
              {account?.role === "ROLE_TEACHER" ?(
 <td>
 <button
   onClick={() => {
     nav(`/adminPanel/editClassroomTeacher/${account.id}`)
   }}
   type="button"
   className="btn btn-primary btn-sm mx-5"
 >
   Edit
 </button>
</td>
              ):(null)}
             
            </tr>
          ))}
      </tbody>
    </table>
  );
}