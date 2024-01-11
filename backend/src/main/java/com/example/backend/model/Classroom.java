package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "classrooms")
public class Classroom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="highSchool_id", nullable=false)
    private HighSchool highSchool;

    @JsonIgnore
    @OneToMany(mappedBy = "classroom")
    List<Student> students;


    @ManyToMany
    @JoinTable(
            name = "teachers_classrooms",
            joinColumns = @JoinColumn(name = "classroom_id"),
            inverseJoinColumns = @JoinColumn(name = "teacher_id"))
    List<Teacher> teachers = new ArrayList<>();




}
