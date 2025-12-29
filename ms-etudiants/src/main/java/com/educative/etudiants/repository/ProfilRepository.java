package com.educative.etudiants.repository;

import com.educative.etudiants.entity.Profil;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfilRepository extends JpaRepository<Profil, Long> {
}
