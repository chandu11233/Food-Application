public class Overloadride {
    public int add(int a,int b)
    {
        return a+b;
    }
    public  void add()
    {
       int a=9;
       int b=9;
        System.out.println(a+b);
    }
    public int add(int a,int b,int c)
    {
        return a+b+c;
    }

    public static void main(String[] args) {
        Overloadride o1=new Overloadride();
        System.out.println(o1.add(6,6));
        o1.add();
        System.out.println(o1.add(8,8,8));
    }
}
