package com.example.backend.service;

import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class StudentService {
    private final StudentRepository studentRepository;


    public void addStudent(Student student) {
        studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public void updateStudentById(Long id, Student updatedStudent) {
        Student studentFromDb = studentRepository.getReferenceById(id);

        studentFromDb.setClassroom(updatedStudent.getClassroom());
        studentFromDb.setGrade(updatedStudent.getGrade());
        studentFromDb.setUserDetails(updatedStudent.getUserDetails());

        studentRepository.save(studentFromDb);
    }

    public void deleteStudentById(Long id) {
        studentRepository.deleteById(id);
    }
}
