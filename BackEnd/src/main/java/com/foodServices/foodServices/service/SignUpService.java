package com.foodServices.foodServices.service;

import com.foodServices.foodServices.entity.Customer;
import com.foodServices.foodServices.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class SignUpService {
    @Autowired
    private CustomerRepo customerRepo;

    public Customer saveDetails(Customer login){
        try {
            return customerRepo.save(login);
        } catch (DataIntegrityViolationException e) {
            throw new IllegalArgumentException("Email already exists");
        }
    }
}
