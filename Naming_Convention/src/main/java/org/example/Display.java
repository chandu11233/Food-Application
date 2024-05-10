package org.example;

import java.util.Scanner;

public class Display {
    public static void main(String[] args) {
        Details d[]=new Details[3];
        Scanner sc=new Scanner(System.in);
        for(int i=0;i<3;i++)
        {
            int n=sc.nextInt();
            sc.nextLine();
            String s=sc.nextLine();
            int age=sc.nextInt();
            sc.nextLine();

            Details d1=new Details(n,s,age);
            d[i]=d1;
        }
        for(Details i:d)
        {
            i.hii();
        }
    }
}
