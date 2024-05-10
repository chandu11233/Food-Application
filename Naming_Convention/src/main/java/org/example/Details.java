package org.example;

public class Details {
    int num;
    String name;
    int age;

    public Details(int num, String name, int age) {
        this.num = num;
        this.name = name;
        this.age = age;
    }
    public void hii()
    {
        System.out.println(this.num+this.name+this.age);
    }
}
