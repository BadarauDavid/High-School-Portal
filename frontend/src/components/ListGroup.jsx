import { useState } from "react"
import axios from "axios";
export default function ListGroup({firstTitle,secondTitle,thirdTitle,studentGradeList,isTeacher,teacherForClass,doSignal}){
   
    const[gradeToSend,setGradeToSend]=useState(null);
 
const handleSubmit = (student) =>{
    postNewAd(student);
}
   
const postNewAd = async (student) => {
   
       

         await axios.post(
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
        <table class="table">

<thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">{firstTitle}</th>
      <th scope="col">{secondTitle}</th>
      <th scope="col">{thirdTitle}</th>
    </tr>
  </thead>

{studentGradeList && studentGradeList.map((grade,index)=>(
      <tbody>
    <tr>
    <th scope="row">{index+1}</th>
              {isTeacher ?(
   <td key={grade.user.firstName} >{grade.user.firstName+" "+grade.user.lastName}</td>
      ):(<td key={grade.subject} >{grade.subject}</td>)}
      
    
      {isTeacher ?(
          <td key={grade.grade} >{grade.grade.filter(grade => grade.teacher.id === teacherForClass.id).map(grade => grade.grade).join('; ')}</td>
      ):(  <td key={grade.grade} >{grade.grade}</td>)}
      
      {isTeacher ?(
              <td key={index} >
              <input onChange={(e)=>setGradeToSend(e.target.value)} type="number"   min="1" max="10" />
              <button onClick={()=>{doSignal();handleSubmit(grade)}} disabled={(gradeToSend<0 || gradeToSend >11)} type="button" className="btn btn-primary btn-sm mx-5">Send</button>
              </td>
      ):(<td key={grade.teacher.user.firstName} >{grade.teacher.user.firstName+" "+grade.teacher.user.lastName}</td>)}
      
      </tr>
 </tbody>
))}
       </table>
    )
 
}