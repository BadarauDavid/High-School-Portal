import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";

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
          `http://localhost:8080/api/teacher/teacher/getTeacherByEmail/${email}`
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
        <h1>
            Classbook List  for {teacher?.user.firstName +" "+teacher?.user.lastName }
        </h1>

        <ul class="list-group">

            {teacher?.classroom.map((classRoom,index)=>(
                <li key={index} className="list-group-item"><a href={`/classbook/${classRoom?.id}`}> {classRoom?.name}</a></li>
            ))}


</ul>
        </div>
    )
}