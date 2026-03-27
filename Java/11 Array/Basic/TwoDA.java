import java.util.*;

public class TwoDA {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter Row Size : ");
        int a = input.nextInt();

        System.out.print("Enter Coloum Size : ");
        int b = input.nextInt();

        int x[][] = new int[a][b];

        System.out.println("Enter Array Ele");
        for(int r=0; r<x.length; r++ )
        {
            for(int c=0; c<x.length; c++)
            {   
                System.out.print("a " + r + "  b " + c + "  : ");
                x[r][c]=input.nextInt();
            }
        }

        System.out.println("Array Ele Are : ");
        for(int r=0; r<x.length; r++ )
        {
            for(int c=0; c<x.length; c++)
            {
                System.out.print(x[r][c] + " ");
            }
            System.out.println("");
        }


        input.close();
    }


}
