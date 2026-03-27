import java.util.Scanner;

public class ScannerClass {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("\t*****Enter Details*****");
        
        System.out.print("Enter Full Name : ");
        String name = sc.nextLine();
        
        System.out.print("Enter Age : ");
        int age=sc.nextInt();

        System.out.print("Enter 12th Percentge : ");
        float per=sc.nextFloat();

        sc.close();                     // use to close Input Class

        System.out.println("\nStudent Name : "+name);
        System.out.println("Studen Age : "+ age);
        System.out.println("Student Per : "+per);
        
    }
}
