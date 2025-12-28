package com.example.mscours.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Exam> exams;

    // Constructeur vide (OBLIGATOIRE pour JPA)
    public Course() {}

    public Course(String title, String description) {
        this.title = title;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Exam> getExams() {
        return exams;
    }

    public void setExams(List<Exam> exams) {
        this.exams = exams;
    }
}
