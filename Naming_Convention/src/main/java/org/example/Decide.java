package org.example;

import java.util.Scanner;

public class Decide {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a country:");
        String s = sc.nextLine();

        if (s.equalsIgnoreCase("India")) {
            India india = new India();
            india.perform();

        } else if(s.equalsIgnoreCase("Australia")){
            Austraila a1=new Austraila();
            a1.perform();
        }
    }
}
