package com.example.backend.controller;

import com.example.backend.model.Classroom;
import com.example.backend.service.ClassroomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/classroom")
public class ClassroomController {
    private final ClassroomService classroomService;


    @PostMapping("/admin/post")
    public void add(@RequestBody Classroom classroom) {
        classroomService.addClassroom(classroom);
    }

    @GetMapping("/all/getAll")
    public List<Classroom> getAll() {
        return classroomService.getAllClassroom();
    }

    @PutMapping("/admin/updateById/{id}")
    public void updateById(@PathVariable("id") Long id, @RequestBody Classroom classroom) {
        classroomService.updateClassroomById(id, classroom);
    }

    @DeleteMapping("/admin/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        classroomService.deleteClassroomById(id);
    }
}
