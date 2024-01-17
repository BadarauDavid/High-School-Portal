package com.example.backend.service;

import com.example.backend.model.Classroom;
import com.example.backend.model.Student;
import com.example.backend.model.User;
import com.example.backend.repository.ClassroomRepository;
import com.example.backend.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class StudentService {
    private final StudentRepository studentRepository;
    private final ClassroomRepository classroomRepository;


    public void addStudent(Student student) {
        studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> findUserByEmail(String email){
      return   studentRepository.findStudentByUser_Email(email);
    }

    public List<Student> findAllByClassroomId(Long id){
        return studentRepository.findAllByClassroom_Id(id);
    }
    public void updateStudentById(Long id, Student updatedStudent) {
        Student studentFromDb = studentRepository.getReferenceById(id);

        studentFromDb.setClassroom(updatedStudent.getClassroom());
        studentFromDb.setGrade(updatedStudent.getGrade());

        studentRepository.save(studentFromDb);
    }


    public void addClassroom(Long studentId, Long classroomId){
        Student studentFromDb = studentRepository.getReferenceById(studentId);
        Classroom classroomFromDb = classroomRepository.getReferenceById(classroomId);

        studentFromDb.setClassroom(classroomFromDb);

        studentRepository.save(studentFromDb);
    }
    public List<Student> findAllWithClassroomNull(){
      return   studentRepository.findAllByClassroomIsNull();
    }

    public void deleteStudentById(Long id) {
        studentRepository.deleteById(id);
    }
}
