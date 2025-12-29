-- Insertion des cours
INSERT INTO course (id, title, description) VALUES
                                                (1, 'Spring Boot', 'Microservices avec Spring Boot'),
                                                (2, 'Java Avancé', 'Programmation Java orientée objet');

-- Insertion des examens
INSERT INTO exam (id, title, exam_date, course_id) VALUES
                                                       (1, 'Examen Final Spring', '2025-01-15', 1),
                                                       (2, 'Examen Java OOP', '2025-02-10', 2);
