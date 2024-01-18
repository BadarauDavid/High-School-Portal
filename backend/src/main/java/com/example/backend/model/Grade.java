package com.example.backend.model;

import com.example.backend.enums.SubjectType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "grades")
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated
    private SubjectType subject;

    private int grade;


    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
}
