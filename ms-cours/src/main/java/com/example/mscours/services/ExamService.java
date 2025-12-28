package com.example.mscours.services;

import com.example.mscours.entities.Course;
import com.example.mscours.entities.Exam;
import com.example.mscours.repositories.CourseRepository;
import com.example.mscours.repositories.ExamRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ExamService {

    private final ExamRepository examRepository;
    private final CourseRepository courseRepository;

    public ExamService(ExamRepository examRepository,
                       CourseRepository courseRepository) {
        this.examRepository = examRepository;
        this.courseRepository = courseRepository;
    }

    // Ajouter un examen à un cours
    public Exam addExamToCourse(Long courseId, String title, LocalDate date) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Exam exam = new Exam(title, date, course);
        return examRepository.save(exam);
    }

    // Lister les examens d’un cours
    public List<Exam> getExamsByCourse(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        return examRepository.findByCourse(course);
    }
}
