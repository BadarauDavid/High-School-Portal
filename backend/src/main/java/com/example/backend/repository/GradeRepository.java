package com.example.backend.repository;

import com.example.backend.enums.SubjectType;
import com.example.backend.model.Grade;
import com.example.backend.model.Student;
import lombok.extern.java.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
    List<Grade> findAllByStudentId(Long id);

    List<Grade> findAllByStudentIdAndAndSubject(Long id, SubjectType subjectType);
}
