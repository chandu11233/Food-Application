package org.example;


import java.util.Comparator;

public class CustomerIdComparator implements Comparator<Customer1> {
    public int compare(Customer1 c1, Customer1 c2) {
        if (c1.getNum() > c2.getNum()) {
            return 1;
        } else if (c1.getNum() < c2.getNum()) {
            return -1;
        } else {
            return 0;
        }
    }
}
