package com.example.backend.service;

import com.example.backend.model.HighSchool;
import com.example.backend.repository.HighSchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.plaf.LabelUI;
import java.util.List;

@Service
public class HighSchoolService {
    public final HighSchoolRepository highSchoolRepository;
    @Autowired
    public HighSchoolService(HighSchoolRepository highSchoolRepository){
        this.highSchoolRepository = highSchoolRepository;
    }

    private void addHighSchool(HighSchool highSchool){
        highSchoolRepository.save(highSchool);
    }

    public List<HighSchool> getAllHighSchool (){
        return highSchoolRepository.findAll();
    }

    public void updateHighSchoolById(Long id, HighSchool updatedHighSchool){
        HighSchool highSchoolFromDB = highSchoolRepository.getReferenceById(id);

        highSchoolFromDB.setName(updatedHighSchool.getName());
        highSchoolFromDB.setClassroom(updatedHighSchool.getClassroom());

        highSchoolRepository.save(highSchoolFromDB);
    }


    public void deleteHighSchoolById(Long id){
        highSchoolRepository.deleteById(id);
    }

}
