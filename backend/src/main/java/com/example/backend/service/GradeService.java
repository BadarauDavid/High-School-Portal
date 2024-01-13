package com.example.backend.service;

import com.example.backend.model.Grade;
import com.example.backend.model.Student;
import com.example.backend.repository.GradeRepository;
import com.example.backend.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class GradeService {
    private final GradeRepository gradeRepository;
//    private final StudentRepository studentRepository;

    public void addGrade(Grade grade) {
        gradeRepository.save(grade);

//        Student studentFromDb = grade.getStudent();
//        List<Grade> grades = studentFromDb.getGrade();
//
//        grades.add(grade);
//        studentFromDb.setGrade(grades);
//
//        studentRepository.save(studentFromDb);

    }

    public List<Grade> getAllGrade() {
        return gradeRepository.findAll();
    }

    public void updatedById(Long id, Grade updatedGrade) {
        Grade gradeFromDb = gradeRepository.getReferenceById(id);

        gradeFromDb.setGrade(updatedGrade.getGrade());
        gradeFromDb.setStudent(updatedGrade.getStudent());
        gradeFromDb.setSubject(updatedGrade.getSubject());

        gradeRepository.save(gradeFromDb);
    }

    public void deleteGradeById(Long id) {
        gradeRepository.deleteById(id);
    }
}
