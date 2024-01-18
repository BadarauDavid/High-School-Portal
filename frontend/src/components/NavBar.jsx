import logo from "../img/logo.png"
import { useIsAuthenticated, useSignOut } from "react-auth-kit"

export default function NavBar(){
    const isAuthenticated = useIsAuthenticated();
    const signOut = useSignOut();

    const handleLogOut = () => {
          signOut();
    
      };
    return(
        <div className="">
       <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid container-xxl">
    <a className="navbar-brand" href="/">
        <img 
        src={logo}
        style={{ maxWidth: 40 }}/>
    </a>
    <button 
    className="navbar-toggler" 
    type="button"
     data-bs-toggle="collapse" 
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/adminPanel">Admin Panel</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/classbook">Classbook</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/studentCard">Student Card</a>
        </li>
      </ul>
      {isAuthenticated()?(<a onClick={handleLogOut} className="nav-link align-content-end " href="/">Log Out</a>):(<a className="nav-link align-content-end" href="/login">Log In</a>)}
      
    </div>
  </div>
</nav>
      </div>
  )
}