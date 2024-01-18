import { useEffect, useState } from "react";
import ListGroup from "../components/ListGroup";
import Cookies from 'js-cookie';
import axios from "axios";
import DefaultURL from "../utils/GlobalVar";

export default function AdminPanel(){
const [admin,setAdmin]=useState(null);
    const getTokenFromCookies = () => {
        const tokenCookie = Cookies.get("_auth`");
        return tokenCookie;
      };
  
      const token ="Bearer "+ getTokenFromCookies();
      const headers = { Authorization: token };

    const getEmailFromCookies = () => {
        const emailCookie = Cookies.get("_auth`_state");
        const extractedEmail = emailCookie ? JSON.parse(emailCookie).email : null;
        return extractedEmail;
      };


  const  email = getEmailFromCookies();

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await axios.get(
          `${DefaultURL}/user/admin/findUserByEmail/${email}`,
          {headers}
        );

        const data = response.data;

        setAdmin(data);
       
      } catch (err) {
        console.log(err);
      }
    };
    fetchAccount();

  }, []);

    return(

<div className="container-xl">
        {admin?.role === "ROLE_ADMIN" ? (

        <div>
 <h1>
            This is Admin Panel
        </h1>

        <ul className="list-group">
        <li className="list-group-item list-group-item-success"><a href="/adminPanel/createHighSchool">Create HighSchool</a></li>
        <li className="list-group-item list-group-item-success"><a href="/adminPanel/createClassroom">Create Classroom</a></li>
        <li className="list-group-item list-group-item-success"><a href="/adminPanel/register">Create Account</a></li>
        <li className="list-group-item list-group-item-warning"><a href="/adminPanel/addSubjectTeacher">Add Subject to Teacher</a></li>
        <li className="list-group-item list-group-item-warning"><a href="/adminPanel/addClassroomTeacher">Add Classroom to Teacher</a></li>
        <li className="list-group-item list-group-item-warning"><a href="/adminPanel/addClassroomStudents">Add Classroom to Student</a></li>
        <li className="list-group-item list-group-item-info"><a href="/adminPanel/accountList">Account List</a></li>


</ul>

    </div>
        ):(
          <h1>
          You need to be admin
          </h1>  
        )}

     </div>
    )
}