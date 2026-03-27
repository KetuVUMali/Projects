public class Start2 {
    public static void main(String[] args) {
        int n=5;
        for(int i=0; i<n; i++)
        {
            for(int j=0; j<n; j++)
                {
                    //if(i==0 || j==0 || i==2 || j==4)
                    if(i==0 || j==0 || i==(n-1)/2 || j==4)
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


    //     j 01 2 3 4      
    //  i
    //  0    * * * * *      
    //  1    *       * 
    //  2    * * * * *      (n-1) / 2       For It Is Middle Point Of All Star Pattern.
    //  3    *       *
    //  4    *       *