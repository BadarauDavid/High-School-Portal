import { useEffect, useState } from "react";
import ListGroup from "../components/ListGroup";
import email from "../utils/GlobalLoginEmail";
import axios from "axios";
import DefaultURL from "../utils/GlobalVar";
import headers from "../utils/GlobalToken";

export default function StudentCard(){
    const[student,setStudent]=useState(null);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await axios.get(
          `${DefaultURL}/student/all/getStudentByEmail/${email}`,
          {headers}
        );

        const data = response.data;

        setStudent(data);
       
      } catch (err) {
        console.log(err);
      }
    };
    fetchAccount();

  }, []);

   
    return(
        <div className="container xl">
          {student?.user.role === "ROLE_STUDENT" ? (
            <div>
                     <h1>
            {student?.user.firstName+" "+student?.user.lastName} student card
        </h1>
        <ListGroup 
        firstTitle={"Subject"}
        secondTitle={"Grade"}
        thirdTitle={"Teacher"}
        studentGradeList={student?.grade}
        isTeacher={null}
        />
              </div>
          ):(
            <h1>
              You need to be student
            </h1>

          )}

 
    </div>
    )


}