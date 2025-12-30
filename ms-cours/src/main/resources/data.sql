-- Insertion des cours
INSERT INTO course (title, description) VALUES
                                            ('Spring Boot', 'Microservices avec Spring Boot'),
                                            ('Java Avancé', 'Programmation Java orientée objet');

-- Insertion des examens
INSERT INTO exam (title, exam_date, course_id) VALUES
                                                   ('Examen Final Spring', '2025-01-15', 1),
                                                   ('Examen Java OOP', '2025-02-10', 2);
