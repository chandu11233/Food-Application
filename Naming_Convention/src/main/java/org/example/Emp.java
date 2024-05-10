package org.example;

public class Emp {
    int n;
String name;

    public Emp(int n,String name) {
        this.n = n;
        this.name=name;
    }
    public  void  hello()
    {
        System.out.println(this.name+" "+this.n);
    }
}
