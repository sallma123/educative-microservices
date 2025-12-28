package com.educative.etudiants;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.educative.etudiants.repository")
public class MsEtudiantsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsEtudiantsApplication.class, args);
	}
}
