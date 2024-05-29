package com.foodServices.foodServices.controller;

import com.foodServices.foodServices.entity.Customer;
import com.foodServices.foodServices.service.SignInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LoginController {
    @Autowired
    private SignInService signInService;

    @CrossOrigin(value = "http://40.76.111.161:3000")
//    @CrossOrigin(value = "https://food-application-g15z.onrender.com")
    @PostMapping("/signin")
    public String requestSign(@RequestBody Customer cus){
        try {
            Customer savedCus = signInService.checkCredentials(cus);
            if(savedCus.getPassword().equals(cus.getPassword()))  return "{\"email\":\""+savedCus.getEmail()+"\"}";
            else return "{\"message\":\"Invalid Credentials\"}";
        } catch (NullPointerException e) {
            return "{\"message\":\"User doesn't exist\"}";
        }
    }
}
