import PersonList from "../components/PersonList";
import { useEffect, useState } from "react";
import axios from "axios";
import DefaultURL from "../utils/GlobalVar";

import headers from "../utils/GlobalToken";
export default function AccountList(){
const[allUsers,setAllusers]=useState([]);
const[signal,setSignal] = useState(true);




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
        </div>
    )
}