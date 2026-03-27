public class Logical {
    public static void main(String[] args) {
        int a=10,b=20;

        boolean res;

        res= a>5 && b>5;
        System.out.println(res);    // T   T  =>  T

        res= a<5 && b>5;
        System.out.println(res);    // F   F  =>   F

        res= a!=10;
        System.out.println(res);    // Reverse
    }
}
