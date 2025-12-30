package com.example.mscours.controllers;

import com.example.mscours.entities.Exam;
import com.example.mscours.services.ExamService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/courses/{courseId}/exams")
public class ExamController {

    private final ExamService examService;

    public ExamController(ExamService examService) {
        this.examService = examService;
    }

    // ✅ Ajouter un examen à un cours (JSON depuis React)
    @PostMapping
    public Exam addExam(@PathVariable Long courseId,
                        @RequestBody Map<String, String> payload) {

        String title = payload.get("title");
        LocalDate examDate = LocalDate.parse(payload.get("examDate"));

        return examService.addExamToCourse(courseId, title, examDate);
    }

    // ✅ Lister les examens d’un cours
    @GetMapping
    public List<Exam> getExamsByCourse(@PathVariable Long courseId) {
        return examService.getExamsByCourse(courseId);
    }
}
