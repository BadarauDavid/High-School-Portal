package com.example.backend.service;

import com.example.backend.model.Classroom;
import com.example.backend.repository.ClassroomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ClassroomService {

    private final ClassroomRepository classroomRepository;


    public void addClassroom(Classroom classroom) {
        classroomRepository.save(classroom);
    }

    public List<Classroom> getAllClassroom() {
        return classroomRepository.findAll();
    }

    public void updateClassroomById(Long id, Classroom classroomUpdated) {
        Classroom classroomFromDb = classroomRepository.getReferenceById(id);

        classroomFromDb.setHighSchool(classroomUpdated.getHighSchool());
        classroomFromDb.setName(classroomUpdated.getName());
        classroomFromDb.setStudents(classroomUpdated.getStudents());

        classroomRepository.save(classroomFromDb);
    }


    public void deleteClassroomById(Long id) {
        classroomRepository.deleteById(id);
    }

}
