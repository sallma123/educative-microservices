package com.educative.etudiants;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class MsEtudiantsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsEtudiantsApplication.class, args);
	}

}
