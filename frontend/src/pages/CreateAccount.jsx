import { useNavigate } from "react-router-dom";
import axios from "axios";
import DefaultURL from "../utils/GlobalVar";
      import Cookies from 'js-cookie';
export default function CreateAccount(){
    const navigate = useNavigate();

    
             const getTokenFromCookies = () => {
                const tokenCookie = Cookies.get("_auth`");
                return tokenCookie;
              };
        
              const token ="Bearer "+ getTokenFromCookies();
              const headers = { Authorization: token };
  
    const onSubmit = async (values) => {

  
      try {
      const response =  await axios.post(
          `${DefaultURL}/auth/admin/register`,
          values,
          {headers}
        );
        if(response.status === 200){
           navigate("/adminPanel");
        }
       
      } catch (err) {
        console.log(err);
      }
    };
  
    const onSave = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const highSchoolInfo = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role")
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
                  <h1 className="mb-3">Create Account</h1>
  
                  <div className="form-outline mb-4">
                    <input
                    required
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="FirstName"
                    />
                  </div>
  
                  <div className="form-outline mb-4">
                    <input
                    required
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="LastName"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                    required
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                    required
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
  
                  <div className="form-outline mb-4">
                    <select defaultValue="Select Role" className="form-select form-select-lg mb-3" name="role" aria-label="Large select example">
  <option   disabled >Select Role</option>

 <option  value="ROLE_STUDENT">Student</option>
 <option value="ROLE_TEACHER">Teacher</option>

 

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