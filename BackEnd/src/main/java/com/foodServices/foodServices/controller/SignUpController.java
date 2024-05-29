package com.foodServices.foodServices.controller;

import com.foodServices.foodServices.entity.Customer;
import com.foodServices.foodServices.service.SendEmailService;
import com.foodServices.foodServices.service.SignUpService;
import org.apache.naming.factory.SendMailFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class SignUpController {
    @Autowired
    private SignUpService signUpService;

    @Autowired
    private SendEmailService sendEmailService;

    @CrossOrigin(value = "http://40.76.111.161:3000")
    @PostMapping("/signup")
    public String requestSign(@RequestBody Customer cus){
        try {
            Customer savedCus = signUpService.saveDetails(cus);
            sendEmailService.sendEmail(savedCus.getEmail(), "You have been registered for Express Delivery.", "Successful registration");
            return "{\"status\":\"200\"}";
        } catch (IllegalArgumentException e) {
            return "{\"status\":\"203\"}";
        }
    }
}
