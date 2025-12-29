package com.education.msinterface.feign;

import com.education.msinterface.dto.CoursDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "ms-cours")
public interface CoursClient {

    @GetMapping("/courses") // ✅ URL EXISTANTE
    List<CoursDTO> getAllCourses();
}
