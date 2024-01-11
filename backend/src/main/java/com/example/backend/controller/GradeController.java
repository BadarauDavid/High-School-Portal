package com.example.backend.controller;

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

    @PutMapping("/admin/updateById/{id}")
    public void updateById(@PathVariable("id") Long id, @RequestBody Grade grade) {
        gradeService.updatedById(id, grade);
    }

    @DeleteMapping("/admin/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        gradeService.deleteGradeById(id);
    }
}
