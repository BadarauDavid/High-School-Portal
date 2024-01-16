import './App.css';
import NavBar from "./components/NavBar"
import { RequireAuth } from "react-auth-kit"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';
import Classbook from './pages/Classbook';
import StudentCard from './pages/StudentCard';
import LoginPage from './pages/LoginPage';
import ClassBooksList from './pages/ClassBooksList';

function App() {
  return (
    <div className="App">
     <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />

          <Route path="/adminPanel" element={
                 <RequireAuth loginPath="/login">
                <AdminPanel/>
               </RequireAuth>
          }/>

<Route path="/classbook" element={
                //  <RequireAuth loginPath="/login">
                <ClassBooksList/>
              //  </RequireAuth>
          }/>

             <Route path="/classbook/:id" element={
                //  <RequireAuth loginPath="/login">
                <Classbook/>
              //  </RequireAuth>
          }/>

<Route path="/studentCard" element={
                //  <RequireAuth loginPath="/login">
                <StudentCard/>
              //  </RequireAuth>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
