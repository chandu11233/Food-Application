package org.example;
import java.util.*;

public class ArrayP {
    public static void main(String[] args) {
        ArrayP p1 = new ArrayP(1, "chandu", 21);
        ArrayP p2 = new ArrayP(2, "charan", 21);
        ArrayP[] emp = new ArrayP[2];
        emp[0] = p1;
        emp[1] = p2;
        System.out.println(Arrays.toString(emp));
    }

    private int id;
    private String name;
    private int age;

    public ArrayP(int id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "ArrayP{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
