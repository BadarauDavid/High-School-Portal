export default function AdminPanel(){
    return(
        <div className="container-xl">
 <h1>
            This is Admin Panel
        </h1>

        <ul class="list-group">
        <li class="list-group-item list-group-item-success"><a href="/adminPanel/createHighSchool">Create HighSchool</a></li>
        <li class="list-group-item list-group-item-success"><a href="/adminPanel/createClassroom">Create Classroom</a></li>
        <li class="list-group-item list-group-item-success"><a href="/adminPanel/register">Create Account</a></li>
        <li class="list-group-item list-group-item-warning"><a href="/adminPanel/addSubjectTeacher">Add Subject to Teacher</a></li>
        <li class="list-group-item list-group-item-warning"><a href="/adminPanel/addClassroomTeacher">Add Classroom to Teacher</a></li>
        <li class="list-group-item list-group-item-warning"><a href="/adminPanel/addClassroomStudents">Add Classroom to Student</a></li>
        <li class="list-group-item list-group-item-info"><a href="/adminPanel/accountList">Account List</a></li>


</ul>

        </div>
       

        
    )
}