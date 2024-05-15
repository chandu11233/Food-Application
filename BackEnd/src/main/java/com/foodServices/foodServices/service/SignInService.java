package com.foodServices.foodServices.service;

import com.foodServices.foodServices.entity.Customer;
import com.foodServices.foodServices.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignInService {
    @Autowired
    private CustomerRepo customerRepo;

    public Customer checkCredentials(Customer cus){
        return customerRepo.findByEmail(cus.getEmail());
    }
}
