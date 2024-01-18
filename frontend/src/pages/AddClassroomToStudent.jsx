import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultURL from "../utils/GlobalVar";
  import Cookies from 'js-cookie';
export default function AddClassroomStudents(){
    const navigate = useNavigate();
    const[students,setStudents]=useState([]);
    const[classrooms,setClassrooms]=useState([]);


        const getTokenFromCookies = () => {
          const tokenCookie = Cookies.get("_auth`");
          return tokenCookie;
        };
  
        const token ="Bearer "+ getTokenFromCookies();
        const headers = { Authorization: token };
  

    useEffect(() => {
     
        const fetchStudents = async () => {
            try {
              const response = await axios.get(
                `${DefaultURL}/student/admin/findAllWithClassroomEmpty`,
                {headers}
              );
      
              const data = response.data;
      
              setStudents(data);
             
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
    
          fetchClassrooms();  
          fetchStudents();
  
    
      }, []);
   
   
    const onSubmit = async (values) => {


      try {
        await axios.put(
          `${DefaultURL}/student/admin/addClassroom/${values.student}/${values.classroom}`,
          null,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
            },
            }
        );
        
        navigate("/adminPanel");
      } catch (err) {
        console.log(err);
      }
    };
  
    const onSave = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const teacherInfo = {
        student: formData.get("student"),
        classroom: formData.get("classroom")
        
      };
      onSubmit(teacherInfo);
    };
  
    return (
      <form onSubmit={onSave} style={{ marginTop: 175 }}>
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h1 className="mb-3">Add Classroom For Student</h1>
  

                  <div className="form-outline mb-4">
                    <select class="form-select form-select-lg mb-3" name="student" aria-label="Large select example">
  <option  selected disabled >Select Student</option>
  {students && students.map((student,index)=>(
 <option key={index} value={student.id}>{student.user.firstName+" "+student.user.lastName}</option>
  ))}
 

</select>
                    </div>
  
                    <div className="form-outline mb-4">
                    <select class="form-select form-select-lg mb-3" name="classroom" aria-label="Large select example">
  <option  selected disabled >Select Classroom</option>
  {classrooms && classrooms.map((classroom,index)=>(
 <option key={index} value={classroom.id}>{classroom.name+" ("+classroom.highSchool.name+")"}</option>
  ))}
 

</select>
                    </div>
  
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Create
                  </button>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
}