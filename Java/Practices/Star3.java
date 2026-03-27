public class Star3 {
    public static void main(String[] args) {
        int n=5;
        for(int i=0; i<n; i++)
         {
            for(int j=0; j<n; j++)
             {
                if(i==2 || j==0 || j==4)
                 {
                    System.out.print("* ");
                 }
                else
                 {
                    System.out.print("  ");
                 }
             }
             System.out.println(" ");
         }
         System.out.println(" ");
         System.out.println(" ");
         for(int i=0; i<n; i++)
         {
            for(int j=0; j<n; j++)
             {
                if(j==2 || i==0 || i==4)
                 {
                    System.out.print("* ");
                 }
                else
                 {
                    System.out.print("  ");
                 }
             }
             System.out.println(" ");
         }
    }
    
}



    //     j 0 1 2 3 4
    //  i
    //  0    *       * 
    //  1    *       * 
    //  2    * * * * *
    //  3    *       * 
    //  4    *       *

    //     j 0 1 2 3 4
    //  i
    //  0    * * * * * 
    //  1        * 
    //  2        *
    //  3        * 
    //  4    * * * * * 
    
//               (n-1)/2  => j  For It Is Middle Point Of All Star Pattern.