package com.foodServices.foodServices.controller;

import com.foodServices.foodServices.entity.Customer;
import com.foodServices.foodServices.service.SignInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @Autowired
    private SignInService signInService;

    @CrossOrigin(value = "http://localhost:3000")
    @PostMapping("/signin")
    public String requestSign(@RequestBody Customer cus){
        try {
            Customer savedCus = signInService.checkCredentials(cus);
            if(savedCus.getPassword().equals(cus.getPassword()))  return "{\"status\":\"200\"}";
            else return "{\"message\":\"Invalid Credentials\"}";
        } catch (NullPointerException e) {
            return "{\"message\":\"User doesn't exist\"}";
        }
    }
}
