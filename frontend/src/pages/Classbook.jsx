import ListGroup from "../components/ListGroup";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import DefaultURL from "../utils/GlobalVar";
export default function Classbook(){
    const[teacher,setTeacher]=useState(null);
    const[students,setStudents]=useState(null);
    const { id } = useParams();
    const [signal,setSignal]=useState(true);

    const getSignal = () =>{
      setSignal(!signal);
    }

    const getEmailFromCookies = () => {
        const emailCookie = Cookies.get("_auth`_state");
        const extractedEmail = emailCookie ? JSON.parse(emailCookie).email : null;
        return extractedEmail;
      };

      const  email = getEmailFromCookies();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `${DefaultURL}/student/teacher/getAllByClassroomId/${id}`
        );

        const data = response.data;

        setStudents(data);
       
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTeacher = async () => {
        try {
          const response = await axios.get(
            `${DefaultURL}/teacher/teacher/getTeacherByEmail/${email}`
          );
  
          const data = response.data;
  
          setTeacher(data);
         
        } catch (err) {
          console.log(err);
        }
      };

    fetchTeacher();  
    fetchStudents();

  }, [signal]);


return(
    <div className="container xl">
    <h1>
        Classbook for "{students && students[0].classroom.name}"
    </h1>



        <ListGroup 
        firstTitle={"Name"}
        secondTitle={"Grades"}
        thirdTitle={"Add newGrade"}
        studentGradeList={students}
        isTeacher={true}
        teacherForClass={teacher}
        doSignal = {getSignal}
        />
    </div>
)
}