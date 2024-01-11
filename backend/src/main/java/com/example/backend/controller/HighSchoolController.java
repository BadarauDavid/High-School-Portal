package com.example.backend.controller;

import com.example.backend.model.HighSchool;
import com.example.backend.service.HighSchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/highSchool")
public class HighSchoolController {
    private final HighSchoolService highSchoolService;


    @PostMapping("/admin/post")
    public void add(@RequestBody HighSchool highSchool) {
        highSchoolService.addHighSchool(highSchool);
    }

    @GetMapping("/all/getAll")
    public List<HighSchool> getAll() {
        return highSchoolService.getAllHighSchool();
    }

    @PutMapping("/admin/updateById/{id}")
    public void updateById(@PathVariable("id") Long id, @RequestBody HighSchool highSchool) {
        highSchoolService.updateHighSchoolById(id, highSchool);
    }

    @DeleteMapping("/admin/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        highSchoolService.deleteHighSchoolById(id);
    }
}
