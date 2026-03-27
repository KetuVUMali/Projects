import java.util.Scanner;


public class OneDA {
    public static void main(String[] args) {
        int a[] = new int[5];
        a[0] = 1;
        a[1] = 2;
        a[2] = 3;
        a[3] = 4;
        a[4] = 5;
        for(int i=0; i<a.length;i++)
        {
            System.out.println(a[i]);
        }


        Scanner input = new Scanner(System.in);
        System.out.print("Enter Size Of Array : ");
        int b=input.nextInt();
        int c[] = new int[b];
        System.out.println("Enter Array Elements");
        for(int i=0;i<c.length;i++)
        {
            System.out.print("Enter "+i+" Element : ");
            c[i]=input.nextInt();
        }

        System.out.println("Array Ele Are :");
        for(int i=0; i<c.length;i++)
        {
            System.out.print("Index "+i+" Element : ");
            System.out.println(c[i]);
        }

        input.close();

    }
}
