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
import AddClassroomStudents from './pages/AddClassroomToStudent';
import AccountList from './pages/AccountListPage';
import EditClassroomForTeacher from './pages/EditClassroomForTeacher';
import HighSchoolListPage from './pages/HighSchoolListPage';
import ClassroomListPage from './pages/ClassroomListPage';

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

<Route path="/adminPanel/addClassroomStudents" element={
                 <RequireAuth loginPath="/login">
                <AddClassroomStudents/>
               </RequireAuth>
          }/>

<Route path="/adminPanel/editClassroomTeacher/:id" element={
                 <RequireAuth loginPath="/login">
                <EditClassroomForTeacher/>
               </RequireAuth>
          }/>

<Route path="/adminPanel/accountList" element={
                 <RequireAuth loginPath="/login">
                <AccountList/>
               </RequireAuth>
          }/>

<Route path="/adminPanel/highSchoolList" element={
                 <RequireAuth loginPath="/login">
                <HighSchoolListPage/>
               </RequireAuth>
          }/>

<Route path="/adminPanel/classroomList" element={
                 <RequireAuth loginPath="/login">
                <ClassroomListPage/>
               </RequireAuth>
          }/>

<Route path="/classbook" element={
                 <RequireAuth loginPath="/login">
                <ClassBooksList/>
               </RequireAuth>
          }/>

             <Route path="/classbook/:id" element={
                 <RequireAuth loginPath="/login">
                <Classbook/>
                </RequireAuth>
          }/>

<Route path="/studentCard" element={
                 <RequireAuth loginPath="/login">
                <StudentCard/>
                </RequireAuth>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
