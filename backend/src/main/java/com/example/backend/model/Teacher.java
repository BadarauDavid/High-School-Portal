package com.example.backend.model;

import com.example.backend.enums.SubjectType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "teachers")
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @OneToOne
    private User user;

    private SubjectType subjectType;

   @ManyToMany
    @JoinTable(
            name = "teacher_classrooms",
            joinColumns = @JoinColumn(name = "teacher_id"),
            inverseJoinColumns = @JoinColumn(name = "classroom_id"))
//    @JsonManagedReference
    private List<Classroom> classroom;


    @JsonIgnore
    @OneToMany(mappedBy = "teacher")
    private List<Grade> grade;
}
