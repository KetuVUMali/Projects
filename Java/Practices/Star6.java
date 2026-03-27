public class Star6 {
    public static void main(String[] args) {
        int n=7;
        for(int i=0; i<n; i++)
         {
            for(int j=0; j<n; j++)
             {
                if(i==j)
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
    // i        0   1   2   3   4   5   6 
    //
    //     0    *
    //     1       *                            
    //     2           *                   
    //     3               *               
    //     4                   *           
    //     5                       *                                                           
    //     6                           *   
        