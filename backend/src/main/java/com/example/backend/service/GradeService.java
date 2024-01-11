package com.example.backend.service;

import com.example.backend.model.Grade;
import com.example.backend.repository.GradeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class GradeService {
    private final GradeRepository gradeRepository;


    public void addGrade(Grade grade) {
        gradeRepository.save(grade);
    }

    public List<Grade> getAllGrade() {
        return gradeRepository.findAll();
    }

    public void updatedById(Long id, Grade updatedGrade) {
        Grade gradeFromDb = gradeRepository.getReferenceById(id);

        gradeFromDb.setGrade(updatedGrade.getGrade());
        gradeFromDb.setStudent(updatedGrade.getStudent());
        gradeFromDb.setTeacher(updatedGrade.getTeacher());
        gradeFromDb.setSubject(updatedGrade.getSubject());

        gradeRepository.save(gradeFromDb);
    }

    public void deleteGradeById(Long id) {
        gradeRepository.deleteById(id);
    }
}
