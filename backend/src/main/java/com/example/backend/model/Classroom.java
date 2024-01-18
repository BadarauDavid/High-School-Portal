package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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


    @ManyToOne
    @JoinColumn(name = "highSchool_id")
    private HighSchool highSchool;

    @JsonIgnore
    @OneToMany(mappedBy = "classroom")
    @OnDelete(action = OnDeleteAction.CASCADE)
    List<Student> students;


    @JsonIgnore
    @ManyToMany(mappedBy = "classroom")
//    @JsonBackReference
    @OnDelete(action = OnDeleteAction.CASCADE)
    List<Teacher> teachers;


}
