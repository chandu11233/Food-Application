package org.example;

public class Hello {
    public  void  hi()
    {
        System.out.println("hello");
    }

    public Hello(int n) {
        System.out.println(n);
    }

    public static void main(String[] args) {
        Hello k=new Hello(3);
        k.hi();

    }
}
