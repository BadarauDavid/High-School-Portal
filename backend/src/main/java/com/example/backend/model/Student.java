package com.example.backend.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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

    @OneToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;


    @ManyToOne
    @JoinColumn(name = "classroom_id")
    private Classroom classroom;


    @JsonManagedReference
    @OneToMany(mappedBy = "student")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<Grade> grade = new ArrayList<>();
}
