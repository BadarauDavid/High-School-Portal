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
import CreateHighSchool from './pages/CreateHighSchool';
import CreateClassroom from './pages/CreateClassroom';
import CreateAccount from './pages/CreateAccount';
import AddSubjectTeacher from './pages/AddSubjectTeacher';

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

<Route path="/adminPanel/createHighSchool" element={
                 <RequireAuth loginPath="/login">
                <CreateHighSchool/>
               </RequireAuth>
          }/>

<Route path="/adminPanel/createClassroom" element={
                 <RequireAuth loginPath="/login">
                <CreateClassroom/>
               </RequireAuth>
          }/>

<Route path="/adminPanel/register" element={
                 <RequireAuth loginPath="/login">
                <CreateAccount/>
               </RequireAuth>
          }/>

<Route path="/adminPanel/addSubjectTeacher" element={
                 <RequireAuth loginPath="/login">
                <AddSubjectTeacher/>
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
