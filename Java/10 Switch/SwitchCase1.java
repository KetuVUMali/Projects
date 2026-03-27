import java.util.*;

public class SwitchCase1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter Day No. : ");
        int no=input.nextInt();
        switch (no) {
            case 0: System.out.println("Sunday");
                   break;
            case 1: System.out.println("Monday");
                   break;
            case 2: System.out.println("Tueday");
                   break;
            case 3: System.out.println("Wednesday");
                   break;
            case 4: System.out.println("Tuesday");
                   break;
            case 5: System.out.println("Friday");
                   break;
            case 6: System.out.println("Saterday");
                   break;    

            default: System.out.println("No. Is Invalid");
                   break;
        }
        input.close();
    }
}
