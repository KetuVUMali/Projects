import java.util.*;


public class AddA {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Row Size : ");
        int a = sc.nextInt();

        System.out.print("Enter Column Size : ");
        int b = sc.nextInt();

        int x[][] = new int[a][b];

        System.out.println("Enter Ele Of Array : ");
        for(int r=0; r<x.length; r++)
        {
            for(int c=0; c<x.length; c++)
            {
                System.out.print(" a " + r + "  b " + c + "  : ");
                x[r][c]=sc.nextInt();
            }
        }

        int sum=0;
        for(int r=0; r<x.length; r++)
        {
            for(int c=0; c<x.length; c++)
            {
                System.out.print(x[r][c] + " ");
                sum=sum+x[r][c];
            }
            System.out.println(" ");
        }
        System.out.println("Sum Of Array  : " +sum);

        sc.close();
    }
}
