export default function ListGroup({firstTitle,secondTitle,thirdTitle,studentGradeList,isTeacher}){
   
 

   
   
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
          <li key={grade.grade} className="list-group-item container-xl">7</li>
      ):(  <li key={grade.grade} className="list-group-item container-xl">{grade.grade}</li>)}
      
      {isTeacher ?(
              <li key={index} className="list-group-item container-xl">
              <input type="number"   min="1" max="10" />
              <button type="button" className="btn btn-primary btn-sm mx-5">Send</button>
              </li>
      ):(<li key={grade.teacher.user.firstName} className=" list-group-item container-xl">{grade.teacher.user.firstName+" "+grade.teacher.user.lastName}</li>)}
      
 </ul>
))}
        </div>
    )
 
}