package com.foodServices.foodServices.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "Customer")
public class Customer {
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "id")
//    private int id;

    @Column(name="name")
    private  String name;

    @Id
    @Column(name = "email")
    private String email;

    @Column(name = "mobile_number")
    private String mobile;

    @Column(name = "password")
    private String password;
}
