package org.example;

import java.util.Comparator;
import java.util.TreeSet;

public class Customer1 {
    public int num;
    public  String name;

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Customer1(int num, String name) {
        this.num = num;
        this.name = name;
    }

    public Customer1() {}

//    public int compareTo(Customer1 o1) {
//        return Integer.compare(this.num, o1.num);
//    }

    public static void main(String[] args) {
        TreeSet<Customer1> t1 = new TreeSet<>((new CustomerIdComparator()));
        TreeSet<Customer1> t2 = new TreeSet<>((new NameComparator()));
        Customer1 c1 = new Customer1(1, "chandu");
        Customer1 c2 = new Customer1();
        c2.setName("chandu");
        c2.setNum(2);
        Customer1 c3 = new Customer1(3, "vishnu");
        t1.add(c1);
        t1.add(c2);
        t1.add(c3);
        t2.add(c1);
        t2.add(c2);
        t2.add(c3);
        for (Customer1 t : t1) {
            System.out.println(t.getNum() + "  " + t.getName());
        }
        for (Customer1 t : t2) {
            System.out.println(t.getNum() + "  " + t.getName());
        }
    }
}
