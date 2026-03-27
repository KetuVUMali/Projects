
public class NonStaticBlock {
    int x=10;
    static int y=20;

    {
        System.out.println("Non Static Block 1");
        System.out.println(x);                      //  Access NS V 
        System.out.println(y);                      //  Access S V
    }

    NonStaticBlock(){           // constructor
        System.out.println("This Constructor");
    }

    {
        System.out.println("Non Static Block 2");
    }

    public static void main(String[] args) {
        System.out.println("I AM Main Method");
        NonStaticBlock obj = new NonStaticBlock();
    }
}
