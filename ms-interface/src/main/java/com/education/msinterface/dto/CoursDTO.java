package com.education.msinterface.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CoursDTO {

    private Long id;

    // mapping explicite depuis ms-cours
    @JsonProperty("title")
    private String titre;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }
}
