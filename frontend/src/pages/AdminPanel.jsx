import { useEffect, useState } from "react";
import email from "../utils/GlobalLoginEmail";
import axios from "axios";
import DefaultURL from "../utils/GlobalVar";
import headers from "../utils/GlobalToken";

export default function AdminPanel(){
const [admin,setAdmin]=useState(null);

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
        <li className="list-group-item list-group-item-info"><a href="/adminPanel/accountList">Account List</a></li>
        <li className="list-group-item list-group-item-info"><a href="/adminPanel/highSchoolList">HighSchool List</a></li>
        <li className="list-group-item list-group-item-info"><a href="/adminPanel/classroomList">Classroom List</a></li>
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