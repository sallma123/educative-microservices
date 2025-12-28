package com.example.mscours.controllers;

import com.example.mscours.entities.Exam;
import com.example.mscours.services.ExamService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/courses/{courseId}/exams")
public class ExamController {

    private final ExamService examService;

    public ExamController(ExamService examService) {
        this.examService = examService;
    }

    // Ajouter un examen à un cours
    @PostMapping
    public Exam addExam(@PathVariable Long courseId,
                        @RequestParam String title,
                        @RequestParam LocalDate date) {
        return examService.addExamToCourse(courseId, title, date);
    }

    // Lister les examens d’un cours
    @GetMapping
    public List<Exam> getExamsByCourse(@PathVariable Long courseId) {
        return examService.getExamsByCourse(courseId);
    }
}
