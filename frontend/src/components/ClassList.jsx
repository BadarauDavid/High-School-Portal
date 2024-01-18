import DefaultURL from "../utils/GlobalVar";
import axios from "axios";
import headers from "../utils/GlobalToken";

export default function ClassList({listOfClass,contentButton,title,teacherId,doSignal}){

    const handleSubmit = async(classroom) =>{
        await axios.put(
            `${DefaultURL}/teacher/admin/addOrDeleteClassroomToTeacher/${contentButton}/${classroom.id}/${teacherId}`,
            null,
           {headers}
          );   
          doSignal();

    } 

    return(
        <div className="col-6">
            <h5>{title}</h5>
        <table className="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ClassName</th>
      <th scope="col">HighSchool</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
{listOfClass && listOfClass.map((classroom, index)=>(
   <tr key={index}>
   <th scope="row">{index+1}</th>
   <td>{classroom.name}</td>
   <td>{classroom.highSchool.name}</td>
   <td>
   <button
                  onClick={() => {
                    handleSubmit(classroom)
                  }}
                  type="button"
                  className="btn btn-primary btn-sm mx-5"
                >
                  {contentButton}
                </button>
   </td>
 </tr>
))}
 
  </tbody>
</table>
</div>
    )
}