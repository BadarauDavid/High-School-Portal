import { useState, useEffect } from "react";
import DefaultURL from "../utils/GlobalVar";
import headers from "../utils/GlobalToken";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HighSchoolListPage(){
const [allHighschool, setAllHighSchool] = useState(null);
const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
              `${DefaultURL}/highSchool/admin/getAll`,
              {headers}
            );
    
            const data = response.data;
    
            setAllHighSchool(data);
           
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
            </tr>
          </thead>
          <tbody>
            {allHighschool &&
              allHighschool.map((highSchool, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{highSchool.name}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div class="d-grid gap-2">
  <button onClick={()=>navigate("/adminPanel/createHighSchool")} class="btn btn-primary" type="button">Add HighSchool</button>
</div>
        </div>
      );

}