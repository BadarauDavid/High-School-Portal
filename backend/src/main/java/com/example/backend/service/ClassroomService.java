package com.example.backend.service;

import com.example.backend.model.Classroom;
import com.example.backend.repository.ClassroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassroomService {

private final ClassroomRepository classroomRepository;

     @Autowired
    public ClassroomService(ClassroomRepository classroomRepository) {
        this.classroomRepository = classroomRepository;
    }



    public void addClassroom(Classroom classroom){
         classroomRepository.save(classroom);
    }

    public List<Classroom> getAllClassroom(){
         return classroomRepository.findAll();
    }

    public void updateClassroomById(Long id, Classroom classroomUpdated){
         Classroom classroomFromDb = classroomRepository.getReferenceById(id);

         classroomFromDb.setHighSchool(classroomUpdated.getHighSchool());
         classroomFromDb.setName(classroomUpdated.getName());
         classroomFromDb.setTeachers(classroomUpdated.getTeachers());
         classroomFromDb.setStudents(classroomUpdated.getStudents());

         classroomRepository.save(classroomFromDb);
    }

    public void deleteClassroomById(Long id){
         classroomRepository.deleteById(id);
    }

}
