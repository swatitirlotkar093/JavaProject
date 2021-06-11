package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootAndAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootAndAngularApplication.class, args);
	}
	
	
	/*
	 * @Bean public CorsFilter corsFilter() { final UrlBasedCorsConfigurationSource
	 * source = new UrlBasedCorsConfigurationSource();
	 * 
	 * final CorsConfiguration config = new CorsConfiguration();
	 * config.setAllowCredentials(true);
	 * config.setAllowedOrigins(Collections.singletonList("*"));
	 * config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept"));
	 * config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE",
	 * "OPTIONS"));
	 * 
	 * source.registerCorsConfiguration("/**", config); return new
	 * CorsFilter(source); }
	 */

}


