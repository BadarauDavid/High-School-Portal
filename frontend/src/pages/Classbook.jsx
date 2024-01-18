import ListGroup from "../components/ListGroup";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import email from "../utils/GlobalLoginEmail";
import DefaultURL from "../utils/GlobalVar";
import headers from "../utils/GlobalToken";

export default function Classbook(){
    const[teacher,setTeacher]=useState(null);
    const[students,setStudents]=useState(null);
    const { id } = useParams();
    const [signal,setSignal]=useState(true);

    const getSignal = () =>{
      setSignal(!signal);
    }

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `${DefaultURL}/student/teacher/getAllByClassroomId/${id}`,
          {headers}
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