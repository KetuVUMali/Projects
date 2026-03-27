public class Star12 {
    
    public static void main(String[] args) {
        int n=11;
        for(int i=0; i<n; i++)
         {
            for(int j=0; j<n; j++)
             {
                if( i+j==5 || i+j==15  || j-i==5  || i-j==5  || i==0 || j==0 || i==10 || j==10 )
                 {
                    System.out.print("* ");
                    
                 }
                else
                 {
                    System.out.print("  ");
                    
                 }
             }
            System.out.println();
         }
        
    }
}



    // Digonal       
    //     j  
    // i        0   1   2   3   4   5  6   7   8    9  10  
    //                                                  
    //     0    *   *   *   *   *   *                     
    //     1    *   *   *   *   *      *                  
    //     2    *   *   *   *               *                        
    //     3    *   *   *                      *       
    //     4    *   *                              *   
    //     5    *                                      *      
    //     6        *                              *                                         
    //     7            *                      *
    //     8                *              *                                                    
    //     9                    *      *                                                   
    //     10                       *                                                   
    //                                                
        



