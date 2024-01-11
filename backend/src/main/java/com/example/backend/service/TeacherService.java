package com.example.backend.service;

import com.example.backend.model.Teacher;
import com.example.backend.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {
    private final TeacherRepository teacherRepository;
    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    private void addTeacher(Teacher teacher){
        teacherRepository.save(teacher);
    }

    private List<Teacher> getAllTeacher(){
       return teacherRepository.findAll();
    }

    private void updateTeacherById(Long id, Teacher updatedTeacher){
        Teacher teacherFromDb = teacherRepository.getReferenceById(id);

        teacherFromDb.setClassroom(updatedTeacher.getClassroom());
        teacherFromDb.setGrade(updatedTeacher.getGrade());
        teacherFromDb.setUserDetails(updatedTeacher.getUserDetails());

        teacherRepository.save(teacherFromDb);
    }

    private void deleteTeacherById(Long id){
        teacherRepository.deleteById(id);
    }

}
