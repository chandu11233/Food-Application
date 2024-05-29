package com.foodServices.foodServices.controller;

import com.foodServices.foodServices.entity.Order;
import com.foodServices.foodServices.service.SendEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    @Autowired
    private SendEmailService sendEmailService;

//    @CrossOrigin(value = "https://food-application-g15z.onrender.com")
    @PostMapping("/confirmOrder")
    @CrossOrigin(value = "http://40.76.111.161:3000")
    public String sendConfirmationEmail(@RequestBody Order order){
        String body = "Your order has been placed successfully. Billing address is "+order.getBillingName()+", "+order.getBillingPn()+", "+order.getBillingAddress()+". "+"Total amount is "+order.getTotalAmount()+". Transaction is done via card with card number "+order.getCardNumber();
        sendEmailService.sendEmail(order.getEmail(), body, "Order placed successfully");
        return "sent successfully";
    }
}
