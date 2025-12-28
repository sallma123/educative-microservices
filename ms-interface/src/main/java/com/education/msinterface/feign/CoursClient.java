package com.education.msinterface.feign;

import com.education.msinterface.dto.CoursDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "ms-cours", url = "http://localhost:8082")
public interface CoursClient {

    @GetMapping("/cours/etudiant/{id}")
    List<CoursDTO> getCoursByEtudiant(@PathVariable Long id);
}
