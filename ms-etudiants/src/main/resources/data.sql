-- TABLE PROFIL
INSERT INTO PROFIL (niveau, filiere, telephone) VALUES
                                                    ('1ère année', 'Génie Informatique', '0611111111'),
                                                    ('2ème année', 'Génie Logiciel', '0622222222'),
                                                    ('3ème année', 'Systèmes & Réseaux', '0633333333');

-- TABLE ETUDIANT
INSERT INTO ETUDIANT (nom, prenom, email, profil_id) VALUES
                                                         ('El Amrani', 'Sara', 'sara.elamrani@gmail.com', 1),
                                                         ('Ben Ali', 'Youssef', 'youssef.benali@gmail.com', 2),
                                                         ('Haddad', 'Imane', 'imane.haddad@gmail.com', 3);
