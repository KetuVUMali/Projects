public class String10 {
    public static void main(String[] args) {
        int n=7;
        //int k=6;
        for(int i=0; i<n; i++)
         {
            for(int j=0; j<n; j++)
             {
                if(i==j || i+j==n-1 ||  i-j==2 || i+j==4 || j==0  || i==0   || j==6   || i==6)
                //if(i==j || j==k ||  i+j==n-3)
                 {
                    System.out.print("* ");
                    
                 }
                else
                 {
                    System.out.print("  ");
                    
                 }
             }
            System.out.println();
            // k--;
         }
        
    }
}



    // Digonal       
    //     j  
    // i        0   1   2   3   4   5   6 
    //                                                 j  i    Sum       j  i    sub
    //     0    *  *   *   *    *   *   *              0  6  => 6        0  2 => 2
    //     1    *  *                *   *              1  5  => 6        1  3 => 2      i-j==2 
    //     2    *      *        *       *              2  4  => 6        2  4 => 2
    //     3    *  *       *            *              3  3  => 6
    //     4    *      *       *        *              2  4  => 6
    //     5    *  *        *        *   *              1  5  => 6                                        
    //     6    *  *   *    *   *    *   *              6  0  => 6
    //                                                i + j => 6    =====>i + j => n-1  
        





