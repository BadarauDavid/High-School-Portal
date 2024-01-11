package com.example.backend.model;

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

    @OneToMany(mappedBy="teacher")
    private List<Grade> grade;
}
