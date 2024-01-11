package com.example.backend.service;

import com.example.backend.model.Classroom;
import com.example.backend.model.HighSchool;
import com.example.backend.repository.HighSchoolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class HighSchoolService {
    public final HighSchoolRepository highSchoolRepository;


    public void addHighSchool(HighSchool highSchool) {
        highSchoolRepository.save(highSchool);
    }

    public List<HighSchool> getAllHighSchool() {
        return highSchoolRepository.findAll();
    }

    public void updateHighSchoolById(Long id, HighSchool updatedHighSchool) {
        HighSchool highSchoolFromDB = highSchoolRepository.getReferenceById(id);

        highSchoolFromDB.setName(updatedHighSchool.getName());
        highSchoolFromDB.setClassroom(updatedHighSchool.getClassroom());

        highSchoolRepository.save(highSchoolFromDB);
    }


    public void deleteHighSchoolById(Long id) {
        highSchoolRepository.deleteById(id);
    }

    public void addClassroom(HighSchool highSchool, Classroom classroom) {
        List<Classroom> classroomsFromDb = highSchool.getClassroom();

        classroomsFromDb.add(classroom);
        highSchool.setClassroom(classroomsFromDb);

        highSchoolRepository.save(highSchool);
    }

}
