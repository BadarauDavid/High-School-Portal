package com.example.backend.service;

import com.example.backend.model.Classroom;
import com.example.backend.model.Teacher;
import com.example.backend.repository.ClassroomRepository;
import com.example.backend.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TeacherService {
    private final TeacherRepository teacherRepository;
    private final ClassroomRepository classroomRepository;

    public void addTeacher(Teacher teacher) {
        teacherRepository.save(teacher);
    }

    public List<Teacher> getAllTeacher() {
        return teacherRepository.findAll();
    }

    public void updateTeacherById(Long id, Teacher updatedTeacher) {
        Teacher teacherFromDb = teacherRepository.getReferenceById(id);

        teacherFromDb.setClassroom(updatedTeacher.getClassroom());
        teacherFromDb.setGrade(updatedTeacher.getGrade());
        teacherFromDb.setUserDetails(updatedTeacher.getUserDetails());

        teacherRepository.save(teacherFromDb);
    }

    public void addClassroom(Long classroomId, Long teacherId){
        Teacher teacherFromDb = teacherRepository.getReferenceById(teacherId);
        Classroom classroomFromDb = classroomRepository.getReferenceById(classroomId);



        List<Classroom> listTeacherClassroomsFromDb = teacherFromDb.getClassroom();
        listTeacherClassroomsFromDb.add(classroomFromDb);
        teacherFromDb.setClassroom(listTeacherClassroomsFromDb);

        teacherRepository.save(teacherFromDb);

    }


    public void deleteTeacherById(Long id) {
        teacherRepository.deleteById(id);
    }

}
