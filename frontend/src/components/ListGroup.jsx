import { input } from "@material-tailwind/react";
import { useState } from "react"
import axios from "axios";
export default function ListGroup({firstTitle,secondTitle,thirdTitle,studentGradeList,isTeacher,teacherForClass}){
   
    const[gradeToSend,setGradeToSend]=useState(null);
 
const handleSubmit = (student) =>{
    postNewAd(student);
}
   
const postNewAd = async (student) => {
   
       

        const response = await axios.post(
          `http://localhost:8080/api/grade/admin/post`,
          {
            "subject":teacherForClass.subjectType,
            "grade":gradeToSend,
            "teacher":{"id":teacherForClass.id},
            "student":{"id":student.id}
          }
        );   
}

    return(
        <div>
                    <ul className="list-group list-group-horizontal ">
  <li className="list-group-item container-xl ">{firstTitle}</li>
  <li className="list-group-item container-xl">{secondTitle}</li>
  <li className="list-group-item container-xl">{thirdTitle}</li>

</ul>
{studentGradeList && studentGradeList.map((grade,index)=>(
    <ul key={index} className="list-group list-group-horizontal ">
              {isTeacher ?(
   <li key={grade.user.firstName} className="list-group-item container-xl">{grade.user.firstName+" "+grade.user.lastName}</li>
      ):(<li key={grade.subject} className="list-group-item container-xl">{grade.subject}</li>)}
      
    
      {isTeacher ?(
          <li key={grade.grade} className="list-group-item container-xl">{grade.grade.filter(grade => grade.teacher.id === teacherForClass.id).map(grade => grade.grade).join(', ')}</li>
      ):(  <li key={grade.grade} className="list-group-item container-xl">{grade.grade}</li>)}
      
      {isTeacher ?(
              <li key={index} className="list-group-item container-xl">
              <input onChange={(e)=>setGradeToSend(e.target.value)} type="number"   min="1" max="10" />
              <button onClick={()=>handleSubmit(grade)} disabled={(gradeToSend<0 || gradeToSend >11)} type="button" className="btn btn-primary btn-sm mx-5">Send</button>
              </li>
      ):(<li key={grade.teacher.user.firstName} className=" list-group-item container-xl">{grade.teacher.user.firstName+" "+grade.teacher.user.lastName}</li>)}
      
 </ul>
))}
        </div>
    )
 
}