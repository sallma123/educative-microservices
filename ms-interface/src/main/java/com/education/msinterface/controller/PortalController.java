package com.education.msinterface.controller;

import com.education.msinterface.dto.CoursDTO;
import com.education.msinterface.dto.EtudiantDTO;
import com.education.msinterface.feign.CoursClient;
import com.education.msinterface.feign.EtudiantClient;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/portal")
public class PortalController {

    private final EtudiantClient etudiantClient;
    private final CoursClient coursClient;

    public PortalController(EtudiantClient etudiantClient, CoursClient coursClient) {
        this.etudiantClient = etudiantClient;
        this.coursClient = coursClient;
    }

    @GetMapping("/etudiant/{id}")
    public Map<String, Object> getStudentPortal(@PathVariable Long id) {

        EtudiantDTO etudiant = etudiantClient.getEtudiant(id);
        List<CoursDTO> cours = coursClient.getAllCourses(); // temporaire

        Map<String, Object> response = new HashMap<>();
        response.put("etudiant", etudiant);
        response.put("cours", cours);

        return response;
    }

}
