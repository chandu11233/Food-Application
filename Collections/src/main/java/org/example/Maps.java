package org.example;

import java.util.HashMap;
import java.util.Map;

public class Maps {
    public static void main(String[] args) {
        HashMap<String,Integer>h1=new HashMap<>();
        h1.put("chandu",1);
        h1.put("charan",2);
        h1.putIfAbsent("charan",2);
        for(Map.Entry<String, Integer> i:h1.entrySet())
        {
            if(h1.containsKey("chandu"))
            {
                System.out.println("yes");
            }
        }


    }
}
