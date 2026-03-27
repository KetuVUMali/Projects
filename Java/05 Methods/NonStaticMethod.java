

public class NonStaticMethod {
    static int x = 20;
    int y =30;
    
    void m1()
    {
        int a = 10;
        System.out.println(a);  // Acces Local Var
        System.out.println(x);  // Access Static Var
        System.out.println(y);  // Access Non Static Var
    }

    int m2()
    {   
        System.out.println("m2()");
        return 1000;
    }
    // Method With Parameters
    void m3(int a,int b)
    {
        System.out.println("m3()");
        System.out.println(a+b);
    }

    public static void main(String[] args) {
        NonStaticMethod ketu = new NonStaticMethod();
        ketu.m1();
        ketu.m2();
        ketu.m3(10,20);
    }
}
