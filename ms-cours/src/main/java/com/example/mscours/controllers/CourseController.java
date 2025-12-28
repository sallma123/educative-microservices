package com.example.mscours.controllers;

import com.example.mscours.entities.Course;
import com.example.mscours.services.CourseService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    private final CourseService courseService;

    // CONFIG SERVER TEST
    @Value("${mes-config-ms.cours-last:10}")
    private int lastCourses;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    // Créer un cours
    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseService.createCourse(course);
    }

    // Lister tous les cours
    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    // Récupérer un cours par ID
    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Long id) {
        return courseService.getCourseById(id);
    }

    // CONFIG SERVER TEST
    @GetMapping("/config/last")
    public int getLastCoursesConfig() {
        return lastCourses;
    }
}
