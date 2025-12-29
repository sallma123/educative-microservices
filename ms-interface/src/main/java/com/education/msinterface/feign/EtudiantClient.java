package com.education.msinterface.feign;

import com.education.msinterface.dto.EtudiantDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-etudiants")
public interface EtudiantClient {

    @GetMapping("/etudiants/{id}")
    EtudiantDTO getEtudiant(@PathVariable Long id);
}