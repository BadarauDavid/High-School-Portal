package com.example.backend.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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


    @JsonManagedReference
    @OneToMany(mappedBy = "student")
    private List<Grade> grade = new ArrayList<>();
}
