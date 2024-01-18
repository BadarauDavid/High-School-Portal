import { useNavigate } from "react-router-dom";
import axios from "axios";
import DefaultURL from "../utils/GlobalVar";
import Cookies from 'js-cookie';

export default function CreateHighSchool(){


    
    const getTokenFromCookies = () => {
        const tokenCookie = Cookies.get("_auth`");
        return tokenCookie;
      };
    
    const token ="Bearer "+ getTokenFromCookies();
    const headers = { Authorization: token };

    const navigate = useNavigate();

  
    const onSubmit = async (values) => {

  
      try {
        await axios.post(
          `${DefaultURL}/highSchool/admin/post`,
          values,
          {headers}
        );
        
        navigate("/adminPanel");
      } catch (err) {
        console.log(err);
      }
    };
  
    const onSave = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const highSchoolInfo = {
        name: formData.get("name"),
      };
      onSubmit(highSchoolInfo);
    };
  
    return (

      <form onSubmit={onSave} style={{ marginTop: 175 }}>
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h1 className="mb-3">Create HighSchool</h1>
  
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
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