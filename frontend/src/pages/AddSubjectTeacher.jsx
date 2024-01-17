import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddSubjectTeacher(){
    const navigate = useNavigate();
    const[teachers,setTeachers]=useState([]);
    useEffect(() => {
     
        const fetchTeacher = async () => {
            try {
              const response = await axios.get(
                `http://localhost:8080/api/teacher/admin/getAllTeacherWithSubjectEmpty`
              );
      
              const data = response.data;
      
              setTeachers(data);
             
            } catch (err) {
              console.log(err);
            }
          };
    
          fetchTeacher();  
  
    
      }, []);
   
   
    const onSubmit = async (values) => {

  console.log(values.teacher);
  console.log(values.subject);
      try {
        await axios.put(
          `http://localhost:8080/api/teacher/admin/addSubjectType/${values.teacher}`,
         values.subject,  {
            headers: {
              'Content-Type': 'application/json',
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
        teacher: formData.get("teacher"),
        subject: formData.get("subject")
        
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
                  <h1 className="mb-3">Create Classroom</h1>
  
                  <div className="form-outline mb-4">
                    <select class="form-select form-select-lg mb-3" name="subject" aria-label="Large select example">
  <option  selected disabled >Select Subject</option>

 <option  value="ENGLISH">English</option>
 <option value="ROMANIAN">Romanian</option>
 <option value="MATH">Math</option>
 <option value="INFORMATICS">Informatics</option>
 <option value="HISTORY">History</option>

 

</select>
                    </div>
  
                    <div className="form-outline mb-4">
                    <select class="form-select form-select-lg mb-3" name="teacher" aria-label="Large select example">
  <option  selected disabled >Select Teacher</option>
  {teachers && teachers.map((teacher,index)=>(
 <option key={index} value={teacher.id}>{teacher.user.firstName+" "+teacher.user.lastName}</option>
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