package com.educative.etudiants.controller;

import com.educative.etudiants.entity.Etudiant;
import com.educative.etudiants.entity.Profil;
import com.educative.etudiants.repository.EtudiantRepository;
import com.educative.etudiants.repository.ProfilRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profils")
public class ProfilController {

    private final ProfilRepository profilRepository;
    private final EtudiantRepository etudiantRepository;

    public ProfilController(ProfilRepository profilRepository,
                            EtudiantRepository etudiantRepository) {
        this.profilRepository = profilRepository;
        this.etudiantRepository = etudiantRepository;
    }

    // ✅ GET /profils
    // Récupérer la liste de tous les profils
    @GetMapping
    public List<Profil> getAllProfils() {
        return profilRepository.findAll();
    }

    // ✅ GET /profils/{id}
    // Récupérer un profil par son id
    @GetMapping("/{id}")
    public Profil getProfilById(@PathVariable Long id) {
        return profilRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Profil introuvable"));
    }

    // ✅ POST /profils/etudiant/{etudiantId}
    // Ajouter ou remplacer le profil d’un étudiant existant
    @PostMapping("/etudiant/{etudiantId}")
    public Profil addProfilToEtudiant(
            @PathVariable Long etudiantId,
            @RequestBody Profil profil) {

        Etudiant etudiant = etudiantRepository.findById(etudiantId)
                .orElseThrow(() -> new RuntimeException("Etudiant introuvable"));

        etudiant.setProfil(profil);
        etudiantRepository.save(etudiant);

        return profil;
    }

    // ✅ PUT /profils/{id}
    // Mettre à jour un profil
    @PutMapping("/{id}")
    public Profil updateProfil(@PathVariable Long id,
                               @RequestBody Profil p) {

        Profil profil = profilRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Profil introuvable"));

        profil.setNiveau(p.getNiveau());
        profil.setFiliere(p.getFiliere());
        profil.setTelephone(p.getTelephone());

        return profilRepository.save(profil);
    }

    // ✅ DELETE /profils/{id}
    // Supprimer un profil
    @DeleteMapping("/{id}")
    public void deleteProfil(@PathVariable Long id) {
        profilRepository.deleteById(id);
    }
}
