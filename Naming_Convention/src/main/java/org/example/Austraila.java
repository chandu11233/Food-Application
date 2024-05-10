package org.example;

public class Austraila {
    public void perform() {
        Team t1=new Team(12,"smith",33,89);
        Team t2=new Team(13,"maxii",34,66);
        Team t3=new Team(14,"pat cum",30,12);
        System.out.println(t1.getName()+" "+t1.getAge()+" "+t1.getCent()+" "+t1.getJersy());
        System.out.println(t2.getName()+" "+t2.getAge()+" "+t2.getCent()+" "+t2.getJersy());
        System.out.println(t3.getName()+" "+t3.getAge()+" "+t3.getCent()+" "+t3.getJersy());
    }
}
