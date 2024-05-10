package org.example;

import java.util.Scanner;

public class Empar {

    public static void main(String[] args) {
        Emp[] a = new Emp[2];
        Scanner sc = new Scanner(System.in); // Instantiate Scanner to read from standard input

        for (int i = 0; i < 2; i++) {
            int n = sc.nextInt();
            sc.nextLine();
            String s = sc.nextLine();
            Emp e1 = new Emp(n, s);
            a[i] = e1;
        }
     for(Emp i:a){
         i.hello();

        }
        // You might want to do something with the array of Emp objects here
    }
}
