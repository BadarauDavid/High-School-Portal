package com.example.backend.controller;

import com.example.backend.enums.SubjectType;
import com.example.backend.model.Grade;
import com.example.backend.service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/grade")
public class GradeController {
    private final GradeService gradeService;

    @PostMapping("/admin/post")
    public void add(@RequestBody Grade grade) {
        gradeService.addGrade(grade);
    }

    @GetMapping("/all/getAll")
    public List<Grade> getAll() {
        return gradeService.getAllGrade();
    }

    @GetMapping("/getAllByStudentId/{id}")
    public List<Grade> getAllByStudentId(@PathVariable("id") Long id){
        return gradeService.findAllByStudentId(id);
    }


    @GetMapping("/getAllByStudentIdAndSubject/{id}")
    public List<Grade> getAllByStudentIdAndSubject(@PathVariable("id") Long id, @RequestParam(name = "subject") String subjectType){
        return gradeService.findAllByStudentIdAndSubject(id,subjectType);
    }
    @PutMapping("/admin/updateById/{id}")
    public void updateById(@PathVariable("id") Long id, @RequestBody Grade grade) {
        gradeService.updatedById(id, grade);
    }

    @DeleteMapping("/admin/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        gradeService.deleteGradeById(id);
    }
}
