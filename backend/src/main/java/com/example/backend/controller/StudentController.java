package com.example.backend.controller;

import com.example.backend.model.Student;
import com.example.backend.model.User;
import com.example.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/student")
public class StudentController {
    private final StudentService studentService;


    @PostMapping("/admin/post")
    public void add(@RequestBody Student student) {
        studentService.addStudent(student);
    }

    @GetMapping("/all/getAll")
    public List<Student> getAll() {
        return studentService.getAllStudents();
    }

    @GetMapping("/all/getStudentByEmail/{email}")
    public Optional<Student > findStudentByEmail(@PathVariable("email") String email){
        return studentService.findUserByEmail(email);
    }

    @GetMapping("/all/getAllByClassroomId/{id}")
    public List<Student> findAllByClassroomId(@PathVariable("id") Long id){
        return studentService.findAllByClassroomId(id);
    }

    @PutMapping("/admin/updateById/{id}")
    public void updateById(@PathVariable("id") Long id, @RequestBody Student student) {
        studentService.updateStudentById(id, student);
    }

    @DeleteMapping("/admin/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        studentService.deleteStudentById(id);
    }
}
