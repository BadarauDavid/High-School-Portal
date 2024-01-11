package com.example.backend.repository;

import com.example.backend.model.HighSchool;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HighSchoolRepository extends JpaRepository<HighSchool, Long> {
}
