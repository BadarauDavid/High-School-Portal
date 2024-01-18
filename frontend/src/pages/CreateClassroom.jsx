import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState , useEffect} from "react";
import DefaultURL from "../utils/GlobalVar";
export default function CreateClassroom(){
    const navigate = useNavigate();
    const[highSchools,setHighSchools]=useState([]);
    useEffect(() => {
     
        const fetchHighSchools = async () => {
            try {
              const response = await axios.get(
                `${DefaultURL}/highSchool/all/getAll`
              );
      
              const data = response.data;
      
              setHighSchools(data);
             
            } catch (err) {
              console.log(err);
            }
          };
    
          fetchHighSchools();  
  
    
      }, []);
   
   
    const onSubmit = async (values) => {

  console.log(values.name);
      try {
        await axios.post(
          `${DefaultURL}/classroom/admin/post`,
          {
            "name":values.name,
            "highSchool":{"id":values.highSchool}
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
      const classbookInfo = {
        name: formData.get("name"),
        highSchool: formData.get("highSchool")
        
      };
      onSubmit(classbookInfo);
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
                    <input
                    required   
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
  
                    <div className="form-outline mb-4">
                    <select class="form-select form-select-lg mb-3" name="highSchool" aria-label="Large select example">
  <option  selected disabled >Select HighSchool</option>
  {highSchools && highSchools.map((highSchool,index)=>(
 <option key={index} value={highSchool.id}>{highSchool.name}</option>
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