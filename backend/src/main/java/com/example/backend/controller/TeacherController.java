package com.example.backend.controller;

import com.example.backend.enums.SubjectType;
import com.example.backend.model.Teacher;
import com.example.backend.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/teacher/getTeacherByEmail/{email}")
    public Optional<Teacher> findByEmail(@PathVariable("email") String email) {
        return teacherService.getTeacherByEmail(email);
    }

    @GetMapping("/admin/getAllTeacherWithSubjectEmpty")
    public List<Teacher> getAllTeacherWithSubjectEmpty() {
        return teacherService.getAllTeacherWithSubjectEmpty();
    }

    @GetMapping("/admin/findTeacherByUserId/{id}")
    public Optional<Teacher> findTeacherByUserId(@PathVariable Long id) {
        return teacherService.findTeacherByUserId(id);
    }


    @PutMapping("/admin/updateById/{id}")
    public void updateById(@PathVariable("id") Long id, @RequestBody Teacher teacher) {
        teacherService.updateTeacherById(id, teacher);
    }

    @PutMapping("/admin/addOrDeleteClassroomToTeacher/{typeOfAction}/{classroomId}/{teacherId}")
    public void addClassroomToTeacher(@PathVariable("classroomId") Long classroomId, @PathVariable("teacherId") Long teacherId, @PathVariable String typeOfAction) {
        teacherService.addOrDeleteClassroom(classroomId, teacherId,typeOfAction);
    }

    @PutMapping("/admin/addSubjectType/{id}")
    public void addSubjectType(@RequestBody SubjectType subjectType, @PathVariable Long id) {
        teacherService.addSubjectType(subjectType, id);
    }

    @DeleteMapping("/admin/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        teacherService.deleteTeacherById(id);
    }
}
