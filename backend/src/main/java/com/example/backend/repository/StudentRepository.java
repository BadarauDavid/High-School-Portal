package com.example.backend.repository;

import com.example.backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findStudentByUser_Email(String email);
    List<Student> findAllByClassroom_Id(Long id);

    List<Student> findAllByClassroomIsNull();
}
