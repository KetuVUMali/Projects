//package 09 Loops;
import java.util.Scanner;

public class While2Factoial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print(" Enter A No. : ");
        int no = sc.nextInt();
        
        int fact = 1;
        while (no>0) {
            fact=no*fact;
            no--;
        }
        System.err.println(fact);
        sc.close();
        
    }
}
