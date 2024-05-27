package com.foodServices.foodServices.entity;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    private String email;
    private String cardNumber;
    private float totalAmount;
    private String billingName;
    private String billingAddress;
    private String billingPn;
}
