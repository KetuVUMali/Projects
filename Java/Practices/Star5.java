public class Star5 {
    public static void main(String[] args) {
        int n1=6;
        for(int i=0; i<n1; i++)
         {
            for(int j=0; j<n1; j++)
             {
                
                if(i==0 && j<4 ||  j==0  || i==5 && j<4 || j==4 && i>0 && i<5 )
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

    // D
    //     j 0 1 2 3 4 5         
    //  i
    //  0    * * * *          i==0 && j<4                                      
    //  1    *       *         j==0                               
    //  2    *       *        i==5 && j<4
    //  3    *       *        j==4 && i>0 && i<5 
    //  4    *       *
    //  5    * * * *