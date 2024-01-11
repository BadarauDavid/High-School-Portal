package com.example.backend.model;

import com.example.backend.enums.SubjectType;
import jakarta.persistence.*;
import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

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

    private SubjectType subject;

    private int grade;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="teacher_id", nullable=false)
    private Teacher teacher;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="student_id", nullable=false)
    private Student student;
}
