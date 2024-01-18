package com.example.backend.service;

import com.example.backend.enums.SubjectType;
import com.example.backend.model.Classroom;
import com.example.backend.model.Teacher;
import com.example.backend.repository.ClassroomRepository;
import com.example.backend.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Teacher> getTeacherByEmail(String email) {
        return teacherRepository.findTeacherByUser_Email(email);
    }

    public List<Teacher> getAllTeacherWithSubjectEmpty() {
        return teacherRepository.findAllBySubjectTypeIsNull();
    }

    public void updateTeacherById(Long id, Teacher updatedTeacher) {
        Teacher teacherFromDb = teacherRepository.getReferenceById(id);

        teacherFromDb.setClassroom(updatedTeacher.getClassroom());
        teacherFromDb.setGrade(updatedTeacher.getGrade());
        teacherFromDb.setUser(updatedTeacher.getUser());

        teacherRepository.save(teacherFromDb);
    }

    public void addOrDeleteClassroom(Long classroomId, Long teacherId,String typeOfAction) {
        Teacher teacherFromDb = teacherRepository.getReferenceById(teacherId);
        Classroom classroomFromDb = classroomRepository.getReferenceById(classroomId);

        List<Classroom> listTeacherClassroomsFromDb = teacherFromDb.getClassroom();

        switch (typeOfAction.toLowerCase()){
            case "add" -> { listTeacherClassroomsFromDb.add(classroomFromDb);}
            case "delete" -> {listTeacherClassroomsFromDb.remove(classroomFromDb);}
        }


        teacherFromDb.setClassroom(listTeacherClassroomsFromDb);

        teacherRepository.save(teacherFromDb);

    }

    public void addSubjectType(SubjectType subjectType, Long id) {
        Teacher teacherFromDb = teacherRepository.getReferenceById(id);

        teacherFromDb.setSubjectType(subjectType);

        teacherRepository.save(teacherFromDb);
    }

    public Optional<Teacher> findTeacherByUserId(Long id){
      return   teacherRepository.findTeacherByUser_Id(id);
    }


    public void deleteTeacherById(Long id) {
        teacherRepository.deleteById(id);
    }

}
