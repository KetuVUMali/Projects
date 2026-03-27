
public class StaticBlock {
    int x=10;
    static int y = 20;

    static{
         System.out.println("Static Block 1");
         System.out.println(y);
         System.out.println(StaticBlock.y);
        // System.out.println(x);      // error: <identifier> expected
    }

    static{
        System.out.println("Static Block 2");
    }

    public static void main(String[] args) {
        System.out.println(" I Am Main Method");
    }

}
