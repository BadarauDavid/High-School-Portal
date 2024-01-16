package com.example.backend.initDB;

import com.example.backend.auth.AuthenticationService;
import com.example.backend.auth.RegisterRequest;
import com.example.backend.enums.Role;
import com.example.backend.enums.SubjectType;
import com.example.backend.model.*;
import com.example.backend.repository.*;
import com.example.backend.service.HighSchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InitDB {
    private final HighSchoolRepository highSchoolRepository;
    private final ClassroomRepository classroomRepository;
    private final AuthenticationService authenticationService;
    private final TeacherRepository teacherRepository;
    private final StudentRepository studentRepository;
    private final GradeRepository gradeRepository;
    private void seedHighSchool(){
        HighSchool highSchool = new HighSchool();
        highSchool.setName("Mihai Eminescu");

        highSchoolRepository.save(highSchool);
    }

    private void seedClassrooms(){
        Classroom classroom9A = new Classroom();
        Classroom classroom9B = new Classroom();
        Classroom classroom9C = new Classroom();
        HighSchool highSchool = highSchoolRepository.getReferenceById((long)1);

        classroom9A.setName("9A");
        classroom9B.setName("9B");
        classroom9C.setName("9C");

        classroom9A.setHighSchool(highSchool);
        classroom9B.setHighSchool(highSchool);
        classroom9C.setHighSchool(highSchool);

        classroomRepository.saveAll(List.of(classroom9A,classroom9B,classroom9C));
    }

    private void seedUsers(){
        RegisterRequest admin = new RegisterRequest();

        RegisterRequest teacher1 = new RegisterRequest();
        RegisterRequest teacher2 = new RegisterRequest();
        RegisterRequest teacher3 = new RegisterRequest();
        RegisterRequest teacher4 = new RegisterRequest();
        RegisterRequest teacher5 = new RegisterRequest();

        RegisterRequest student1 = new RegisterRequest();
        RegisterRequest student2 = new RegisterRequest();
        RegisterRequest student3 = new RegisterRequest();
        RegisterRequest student4 = new RegisterRequest();
        RegisterRequest student5 = new RegisterRequest();

       populateRegisterRequest(admin,"admin","admin","admin@admin.ro","admin",Role.ROLE_ADMIN);

       populateRegisterRequest(teacher1, "teacher" ,"1", "teacher1@teacher.ro","teacher",Role.ROLE_TEACHER);
       populateRegisterRequest(teacher2, "teacher" ,"2", "teacher2@teacher.ro","teacher",Role.ROLE_TEACHER);
       populateRegisterRequest(teacher3, "teacher" ,"3", "teacher3@teacher.ro","teacher",Role.ROLE_TEACHER);
       populateRegisterRequest(teacher4, "teacher" ,"4", "teacher4@teacher.ro","teacher",Role.ROLE_TEACHER);
       populateRegisterRequest(teacher5, "teacher" ,"5", "teacher5@teacher.ro","teacher",Role.ROLE_TEACHER);

       populateRegisterRequest(student1, "student" ,"1", "student1@student.ro","student",Role.ROLE_STUDENT);
       populateRegisterRequest(student2, "student" ,"2", "student2@student.ro","student",Role.ROLE_STUDENT);
       populateRegisterRequest(student3, "student" ,"3", "student3@student.ro","student",Role.ROLE_STUDENT);
       populateRegisterRequest(student4, "student" ,"4", "student4@student.ro","student",Role.ROLE_STUDENT);
       populateRegisterRequest(student5, "student" ,"5", "student5@student.ro","student",Role.ROLE_STUDENT);

       List<RegisterRequest> allUsers = List.of(admin,teacher1,teacher2,teacher3,teacher4,teacher5,student1,student2,student3,student4,student5);

        for(RegisterRequest user : allUsers){
            authenticationService.register(user);
        }
    }

    private void addSubjectAndClassToTeacher(){
        List<Teacher> teachers = teacherRepository.findAll();
        List<SubjectType> subjectTypes = List.of(SubjectType.HISTORY,SubjectType.ENGLISH,SubjectType.INFORMATICS,SubjectType.MATH,SubjectType.ROMANIAN);

        for(int i=0;i<5;i++){
            teachers.get(i).setSubjectType(subjectTypes.get(i));
        }

        Classroom classroom9A = classroomRepository.getReferenceById((long)1);
        Classroom classroom9B = classroomRepository.getReferenceById((long)2);
        Classroom classroom9C = classroomRepository.getReferenceById((long)3);


        teachers.get(0).setClassroom(List.of(classroom9A));
        teachers.get(1).setClassroom(List.of(classroom9A));
        teachers.get(2).setClassroom(List.of(classroom9B));
        teachers.get(3).setClassroom(List.of(classroom9B));
        teachers.get(4).setClassroom(List.of(classroom9C));

        teacherRepository.saveAll(teachers);

    }

    private void addClassroomForStudent(){
        List<Student> students = studentRepository.findAll();

        Classroom classroom9A = classroomRepository.getReferenceById((long)1);
        Classroom classroom9B = classroomRepository.getReferenceById((long)2);
        Classroom classroom9C = classroomRepository.getReferenceById((long)3);

        students.get(0).setClassroom(classroom9A);
        students.get(1).setClassroom(classroom9A);
        students.get(2).setClassroom(classroom9B);
        students.get(3).setClassroom(classroom9C);
        students.get(4).setClassroom(classroom9A);

        studentRepository.saveAll(students);
    }

    private void addGrades(){
        List<Student> students = studentRepository.findAll();
        List<Teacher> teachers = teacherRepository.findAll();

        Grade grade1 = new Grade();
        Grade grade2 = new Grade();
        Grade grade3 = new Grade();
        Grade grade4 = new Grade();
        Grade grade5 = new Grade();

        populateGrade(grade1,teachers.get(0).getSubjectType(),7,teachers.get(0),students.get(0));
        populateGrade(grade2,teachers.get(0).getSubjectType(),9,teachers.get(0),students.get(0));
        populateGrade(grade3,teachers.get(1).getSubjectType(),7,teachers.get(1),students.get(0));
        populateGrade(grade4,teachers.get(0).getSubjectType(),7,teachers.get(0),students.get(1));
        populateGrade(grade5,teachers.get(0).getSubjectType(),9,teachers.get(0),students.get(1));

        gradeRepository.saveAll(List.of(grade1,grade2,grade3,grade4,grade5));
    }

    public void seedDB(){
        seedHighSchool();
        seedClassrooms();
        seedUsers();
        addSubjectAndClassToTeacher();
        addClassroomForStudent();
        addGrades();
    }
    private void populateGrade(Grade gradeToModify ,SubjectType subjectType, int grade, Teacher teacher, Student student){
        gradeToModify.setSubject(subjectType);
        gradeToModify.setGrade(grade);
        gradeToModify.setTeacher(teacher);
        gradeToModify.setStudent(student);
    }
    private void populateRegisterRequest(RegisterRequest request, String firstName, String lastName,String email, String password, Role role){
        request.setFirstName(firstName);
        request.setLastName(lastName);
        request.setEmail(email);
        request.setPassword(password);
        request.setRole(role);
    }
}
