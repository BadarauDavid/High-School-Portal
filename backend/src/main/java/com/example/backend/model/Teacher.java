package com.example.backend.model;

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


    @Embedded
    private UserDetails userDetails;

    @ManyToMany(mappedBy = "teachers")
    private List<Classroom> classroom;

    @JsonIgnore
    @OneToMany(mappedBy = "teacher")
    private List<Grade> grade;
}
