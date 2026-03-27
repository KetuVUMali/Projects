

public class BothBlock {
    int a =10;
    static int b=20;

    {
        System.out.println("Non Static Block");
    }

    static{
        System.out.println("Static Block");
    }

    BothBlock()
    {
        System.out.println(" Constructor Bolck");
    }

    public static void main(String[] args) {
        System.out.println("I Am Main Method ");
        BothBlock object = new BothBlock();
    }



}
