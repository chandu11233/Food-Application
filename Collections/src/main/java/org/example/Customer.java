package org.example;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class Customer implements Comparable<Customer> {
    private int n;
    private String name;

    public Customer(int n, String name) {
        this.n = n;
        this.name = name;
    }

    public Customer() {}

    public int getN() {
        return n;
    }

    public void setN(int n) {
        this.n = n;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public int compareTo(Customer o) {
        if(this.n<o.getN()){
            return 1;
        }
        else if(this.n>o.getN())
        {
            return -1;
        }
        else{
            return 0;
        }
    }

    public static void main(String[] args) {
        List<Integer> l1 = new LinkedList<>();
        l1.add(99);
        Customer c1 = new Customer(1, "chandu");
        Customer c2 = new Customer();
        c2.setN(2);
        c2.setName("charan");
        Customer c3 = new Customer(3, "virat");
        List<Customer> l2 = new LinkedList<>();

        l2.add(c1);
        l2.add(c2);
        l2.add(c3);
        Collections.sort(l2);
        for(Customer customer : l2) {
            System.out.println(customer.getN() + ": " + customer.getName());
        }
    }
}
