import PersonList from "../components/PersonList";
import { useEffect, useState } from "react";
import axios from "axios";
import DefaultURL from "../utils/GlobalVar";
import headers from "../utils/GlobalToken";
import { useNavigate } from "react-router-dom";

export default function AccountList(){
const[allUsers,setAllusers]=useState([]);
const[signal,setSignal] = useState(true);
const navigate = useNavigate();

const getSignal = () =>{
    setSignal(!signal);
  }

useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
              `${DefaultURL}/user/admin/getAll`,
              {headers}
            );
    
            const data = response.data;
    
            setAllusers(data);
           
          } catch (err) {
            console.log(err);
          }
        };
        fetchUsers();

    }, [signal]);

    return(
        <div className="container-xl">
        <h1>Account List</h1>
        <PersonList
        accounts={allUsers}
        doSignal = {getSignal}
        />
                <div class="d-grid gap-2">
  <button onClick={()=>navigate("/adminPanel/register")} class="btn btn-primary" type="button">Create Account</button>
  <button onClick={()=>navigate("/adminPanel/addSubjectTeacher")} class="btn btn-primary" type="button">Add Subject to Teacher</button>
  <button onClick={()=>navigate("/adminPanel/addClassroomStudents")} class="btn btn-primary" type="button">Add Classroom to Student</button>


</div>
        </div>
    )
}