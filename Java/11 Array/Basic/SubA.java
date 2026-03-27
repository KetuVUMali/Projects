
public class SubA {
    public static void main(String[] args) {
        // int x[][] = {
        //                 {10,2,30},
        //                 {1,20,3},
        //                 {10,2,30}
        //             };
        // int sub=0;
        // for(int r=0; r<x.length; r++)
        // {
        //     for(int c=0; c<x.length; c++)
        //     {
        //         System.out.print(x[r][c] + " ");
        //         sub = sub - x[r][c];
        //     }
        //     System.out.println(" ");
        // }
        // System.out.println("Subtraction : " + sub);







        int x[][] = {
            {10, 2, 30},
            {1, 20, 3},
            {10, 2, 30}
        };

        // Initialize 'sub' to the first element to start the subtraction from
        int sub = x[0][0];

            // Loop through the array elements
            for (int r = 0; r < x.length; r++) 
            {
                for (int c = 0; c < x[r].length; c++) 
                {
                    // Skip the first element since it's already assigned to 'sub'
                    if (!(r == 0 && c == 0)) 
                    {
                        sub = sub - x[r][c];
                    }
                    System.out.print(x[r][c] + " ");
                }
                System.out.println();
            }

            System.out.println("Subtraction : " + sub);




    }
}
