package com.foodServices.foodServices;

import com.foodServices.foodServices.entity.Customer;
import com.foodServices.foodServices.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FoodServicesApplication {
	@Autowired
//	private CustomerRepo cus;
	public static void main(String[] args) {
		SpringApplication.run(FoodServicesApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//		Customer cu = new Customer("charan", "charan@gmail.com", "1234", "12");
//		cus.save(cu);
//	}
}
