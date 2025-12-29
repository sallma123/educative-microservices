-- TABLE PROFIL
INSERT INTO PROFIL (id, niveau, filiere, telephone) VALUES
                                                        (1, '1ère année', 'Génie Informatique', '0611111111'),
                                                        (2, '2ème année', 'Génie Logiciel', '0622222222'),
                                                        (3, '3ème année', 'Systèmes & Réseaux', '0633333333');

-- TABLE ETUDIANT
INSERT INTO ETUDIANT (id, nom, prenom, email, profil_id) VALUES
                                                             (1, 'El Amrani', 'Sara', 'sara.elamrani@gmail.com', 1),
                                                             (2, 'Ben Ali', 'Youssef', 'youssef.benali@gmail.com', 2),
                                                             (3, 'Haddad', 'Imane', 'imane.haddad@gmail.com', 3);
