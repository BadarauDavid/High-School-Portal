import ListGroup from "../components/ListGroup";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export default function Classbook(){

    const[students,setStudents]=useState(null);
    const { id } = useParams();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/student/all/getAllByClassroomId/${id}`
        );

        const data = response.data;

        setStudents(data);
       
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudents();

  }, []);


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
        />
    </div>
)
}