//package 16 This;

public class ThisConstructor {
    public ThisConstructor()
    {
        System.out.println("This is default constructor");
    }

    public ThisConstructor(int i)
    {
        this();
        System.out.println("Parametrized Constructor");
    }

    public static void main(String[] args) {
        ThisConstructor obj = new ThisConstructor(10);
    }
}
