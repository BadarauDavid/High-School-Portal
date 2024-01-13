package com.example.backend.controller;

import com.example.backend.model.Teacher;
import com.example.backend.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/teacher")
public class TeacherController {
    private final TeacherService teacherService;


    @PostMapping("/admin/post")
    public void add(@RequestBody Teacher teacher) {
        teacherService.addTeacher(teacher);
    }

    @GetMapping("/all/getAll")
    public List<Teacher> getAll() {
        return teacherService.getAllTeacher();
    }

    @PutMapping("/admin/updateById/{id}")
    public void updateById(@PathVariable("id") Long id, @RequestBody Teacher teacher) {
        teacherService.updateTeacherById(id, teacher);
    }

    @PutMapping("/admin/addClassroomToTeacher/{classroomId}/{teacherId}")
    public void addClassroomToTeacher(@PathVariable("classroomId")Long classroomId, @PathVariable("teacherId")Long teacherId){
        teacherService.addClassroom(classroomId,teacherId);
    }

    @DeleteMapping("/admin/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        teacherService.deleteTeacherById(id);
    }
}
