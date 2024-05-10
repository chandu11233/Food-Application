package org.example;

public class Team {
    public Team(int jersy, String name, int age, int cent) {
        this.jersy = jersy;
        this.name = name;
        this.age = age;
        this.cent = cent;
    }

    public int getJersy() {
        return jersy;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public int getCent() {
        return cent;
    }

    int jersy;
    String name;
    int age;
    int cent;


}
