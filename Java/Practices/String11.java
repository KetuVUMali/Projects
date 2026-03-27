public class String11 {
    
    public static void main(String[] args) {
        int n=11;
        //int k=6;
        for(int i=0; i<n; i++)
         {
            for(int j=0; j<n; j++)
             {
                if(i==j || i+j==n-1 || i+j==5 ||  i-j==5  ||  i+j==15 || j-i==5)
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
    // i        0   1   2   3   4   5  6   7   8    9  10  
    //                                                  
    //     0    *                                       * 
    //     1        *                               *    
    //     2            *                       *       
    //     3                *              *           
    //     4                    *      *               
    //     5                        *                    
    //     6                     *      *                                                     
    //     7                *              *
    //     8            *                      *                                                  
    //     9        *                              *                                        
    //     10   *                                     *                                  
    //                                                
        


