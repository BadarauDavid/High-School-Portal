import { useState } from "react"
import axios from "axios";
import DefaultURL from "../utils/GlobalVar";
import headers from "../utils/GlobalToken";
export default function ListGroup({firstTitle,secondTitle,thirdTitle,studentGradeList,isTeacher,teacherForClass,doSignal}){
   
    const[gradeToSend,setGradeToSend]=useState(null);
 
const handleSubmit = (student) =>{
    postGrade(student);
}
   

const postGrade = async (student) => {
   
       

         await axios.post(
          `${DefaultURL}/grade/teacher/post`,
          {
            "subject":teacherForClass.subjectType,
            "grade":gradeToSend,
            "teacher":{"id":teacherForClass.id},
            "student":{"id":student.id}
          },
          {headers}
        );   
        doSignal();
}

    return(
        <table className="table">

<thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">{firstTitle}</th>
      <th scope="col">{secondTitle}</th>
      <th scope="col">{thirdTitle}</th>
    </tr>
  </thead>

{studentGradeList && studentGradeList.map((grade,index)=>(
      <tbody key={index}>
    <tr key={index}>
    <th scope="row">{index+1}</th>
              {isTeacher ?(
   <td  >{grade.user.firstName+" "+grade.user.lastName}</td>
      ):(<td  >{grade.subject}</td>)}
      
    
      {isTeacher ?(
          <td  >{grade.grade.filter(grade => grade.teacher.id === teacherForClass.id).map(grade => grade.grade).join('; ')}</td>
      ):(  <td  >{grade.grade}</td>)}
      
      {isTeacher ?(
              <td  >
              <input onChange={(e)=>setGradeToSend(e.target.value)} type="number"   min="1" max="10" />
              <button onClick={()=>{handleSubmit(grade)}} disabled={(gradeToSend<0 || gradeToSend >11)} type="button" className="btn btn-primary btn-sm mx-5">Send</button>
              </td>
      ):(<td  >{grade.teacher.user.firstName+" "+grade.teacher.user.lastName}</td>)}
      
      </tr>
 </tbody>
))}
       </table>
    )
 
}