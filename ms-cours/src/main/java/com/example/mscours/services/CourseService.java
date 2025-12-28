package com.example.mscours.services;

import com.example.mscours.entities.Course;
import com.example.mscours.repositories.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    // Créer un cours
    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    // Lister tous les cours
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    // Récupérer un cours par ID
    public Course getCourseById(Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }
}
