import DefaultURL from "../utils/GlobalVar";
import axios from "axios";
import { useParams } from "react-router-dom"
import headers from "../utils/GlobalToken";
import { useEffect, useState } from "react";
import ClassList from "../components/ClassList";

export default function EditClassroomForTeacher(){
    const[teacher,setTeacher] = useState(null);
    const[classrooms,setClassrooms] = useState(null);
    const[signal,setSignal]=useState(true);

    const {id} = useParams();

      const getSignal = () =>{
        setSignal(!signal);
      }

    useEffect(() => {
     
        const fetchTeacher = async () => {
            try {
              const response = await axios.get(
                `${DefaultURL}/teacher/admin/findTeacherByUserId/${id}`,
                {headers}
              );
      
              const data = response.data;
      
              setTeacher(data);
             
            } catch (err) {
              console.log(err);
            }
          };

          const fetchClassrooms = async () => {
            try {
              const response = await axios.get(
                `${DefaultURL}/classroom/admin/getAll`,
                {headers}
              );
      
              const data = response.data;
      
              setClassrooms(data);
             
            } catch (err) {
              console.log(err);
            }
          };
    
    
          fetchTeacher(); 
          fetchClassrooms(); 
  
    
      }, [teacher]);

    return(
        <div className="container-xl " >
            <h1>
                Edit classroom for {teacher?.user.firstName+" "+teacher?.user.lastName}
            </h1>

<div className="row">
            
            <ClassList 
            listOfClass={classrooms?.filter(element => !teacher?.classroom.some(e => e.id === element.id))}
            contentButton={"Add"}
            title={"Free Class"}
            headers={headers}
            teacherId={teacher?.id}
            doSignal={getSignal}
            />


            <ClassList 
            listOfClass={teacher?.classroom}
            contentButton={"Delete"}
            title={`Class for ${teacher?.user.firstName} ${teacher?.user.lastName}`}
            teacherId={teacher?.id}
            doSignal={getSignal}
            />
            </div>
        </div>

    )
}