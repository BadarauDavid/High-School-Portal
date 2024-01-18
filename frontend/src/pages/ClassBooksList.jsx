import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import DefaultURL from "../utils/GlobalVar";
import headers from "../utils/GlobalToken";
export default function ClassBooksList(){

    const[teacher,setTeacher]=useState(null);

    const getEmailFromCookies = () => {
        const emailCookie = Cookies.get("_auth`_state");
        const extractedEmail = emailCookie ? JSON.parse(emailCookie).email : null;
        return extractedEmail;
      };


  const  email = getEmailFromCookies();

  
    
  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(
          `${DefaultURL}/teacher/teacher/getTeacherByEmail/${email}`,
          {headers}
        );

        const data = response.data;

        setTeacher(data);
       
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeacher();

  }, []);
    return(
        <div className="container xl">

{teacher?.user.role === "ROLE_TEACHER" ? (
  <div>
        <h1>
            Classbook List  for {teacher?.user.firstName +" "+teacher?.user.lastName }
        </h1>

        <ul className="list-group">

            {teacher?.classroom.map((classRoom,index)=>(
                <li key={index} className="list-group-item"><a href={`/classbook/${classRoom?.id}`}> {classRoom?.name}</a></li>
            ))}


</ul>
        </div>
    ): (
      <h1>
        You need to be Teacher
      </h1>
      )}

      </div>)
}