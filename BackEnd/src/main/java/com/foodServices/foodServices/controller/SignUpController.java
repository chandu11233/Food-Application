package com.foodServices.foodServices.controller;

import com.foodServices.foodServices.entity.Customer;
import com.foodServices.foodServices.service.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpController {
    @Autowired
    private SignUpService signUpService;

    @CrossOrigin(value = "http://localhost:3000")
    @PostMapping("/signup")
    public String requestSign(@RequestBody Customer cus){
        try {
            Customer savedCus = signUpService.saveDetails(cus);
            return "{\"status\":\"200\"}";
        } catch (IllegalArgumentException e) {
            return "{\"status\":\"203\"}";
        }
    }
}
