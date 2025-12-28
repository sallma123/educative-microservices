package com.example.mscours.entities;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private LocalDate examDate;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    // Constructeur vide (OBLIGATOIRE pour JPA)
    public Exam() {}

    public Exam(String title, LocalDate examDate, Course course) {
        this.title = title;
        this.examDate = examDate;
        this.course = course;
    }

    // Getters & Setters
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getExamDate() {
        return examDate;
    }

    public void setExamDate(LocalDate examDate) {
        this.examDate = examDate;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
