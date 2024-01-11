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
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private UserDetails userDetails;


    @ManyToOne
    @JoinColumn(name = "classroom_id", nullable = false)
    private Classroom classroom;

    @OneToMany(mappedBy = "student")
    private List<Grade> grade;
}
