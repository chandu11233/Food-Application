package org.example;

import java.util.Comparator;

public class NameComparator implements Comparator<Customer1> {
    @Override
    public int compare(Customer1 c1, Customer1 c2) {
        return c1.getName().compareTo(c2.getName());
    }
}
