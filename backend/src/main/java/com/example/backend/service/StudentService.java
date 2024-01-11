package com.example.backend.service;

import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    @Autowired
    private StudentService(StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }

    public void addStudent(Student student){
        studentRepository.save(student);
    }

    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    public void updateStudentById(Long id, Student updatedStudent){
        Student studentFromDb = studentRepository.getReferenceById(id);

        studentFromDb.setClassroom(updatedStudent.getClassroom());
        studentFromDb.setGrade(updatedStudent.getGrade());
        studentFromDb.setUserDetails(updatedStudent.getUserDetails());

        studentRepository.save(studentFromDb);
    }

    public void deleteStudentById(Long id){
        studentRepository.deleteById(id);
    }
}
