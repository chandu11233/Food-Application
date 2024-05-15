package com.foodServices.foodServices.repository;

import com.foodServices.foodServices.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {
    Customer findByEmail(String email);
}
