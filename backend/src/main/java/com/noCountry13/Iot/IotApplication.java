package com.noCountry13.Iot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class IotApplication {

	public static void main(String[] args) {

		SpringApplication.run(IotApplication.class, args);

		try {


			Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
		} catch (Exception ex) {

		}
	}

}
