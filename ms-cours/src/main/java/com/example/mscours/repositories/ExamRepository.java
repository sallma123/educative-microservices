package com.example.mscours.repositories;

import com.example.mscours.entities.Exam;
import com.example.mscours.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExamRepository extends JpaRepository<Exam, Long> {

    // Trouver tous les examens d’un cours
    List<Exam> findByCourse(Course course);
}
