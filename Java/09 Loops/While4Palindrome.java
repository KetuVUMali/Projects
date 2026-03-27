import java.util.*;
public class While4Palindrome {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter The No : ");
        int no=input.nextInt();
        int rev=0,rem=0,org;
        org=no;
        while (no>0) {
            rem=no%10;
            rev=rev*10+rem;
            no=no/10;
        }
        if(org==rev)
         {
            System.out.println("No. Is Palindrome : "+rev);
         }
        else
         {
            System.out.println("No. Is Not Palindrome : "+rev);
         }
         input.close();
    }
}
