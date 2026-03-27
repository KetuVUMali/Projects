import java.util.*;

public class While3ReverseNo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter The No. : ");
        int no= input.nextInt();

        int rev=0, rem=0;
        while (no>0) {
            rem=no%10;
            rev=rev*10+rem;
            no=no/10;
        }
        System.out.println("Reverse No. : "+rev);
        input.close();;
    }
}
