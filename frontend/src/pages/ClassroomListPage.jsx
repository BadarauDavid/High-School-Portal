import { useState, useEffect } from "react";
import DefaultURL from "../utils/GlobalVar";
import headers from "../utils/GlobalToken";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ClassroomListPage(){
const [allClassroom, setAllClassroom] = useState(null);
const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
              `${DefaultURL}/classroom/admin/getAll`,
              {headers}
            );
    
            const data = response.data;
    
            setAllClassroom(data);
           
          } catch (err) {
            console.log(err);
          }
        };
        fetchUsers();

    }, []);

    return (
        <div className="container-xl">

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">HighSchool</th>
            </tr>
          </thead>
          <tbody>
            {allClassroom &&
              allClassroom.map((classroom, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{classroom.name}</td>
                  <td>{classroom.highSchool.name}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div class="d-grid gap-2">
  <button onClick={()=>navigate("/adminPanel/createClassroom")} class="btn btn-primary" type="button">Add Classroom</button>
</div>
        </div>
      );

}