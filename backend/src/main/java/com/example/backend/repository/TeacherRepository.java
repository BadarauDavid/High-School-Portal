package com.example.backend.repository;

import com.example.backend.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    Optional<Teacher> findTeacherByUser_Email(String email);

    List<Teacher> findAllBySubjectTypeIsNull();

    Optional<Teacher> findTeacherByUser_Id(Long id);
}
