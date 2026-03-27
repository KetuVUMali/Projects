class Star4 {
    public static void main(String[] args) {
        int n=9;
        for(int i=0; i<6; i++)
         {
            for(int j=0; j<n; j++)
             {
                if(i==0 && j>0 && j<(n-1)/2  ||  j==0 && i>0  ||  j==4 && i>0   ||  i==3 && j<=(n-1)/2 ) 
                //  n=6   if(i==0 && j>0 && j<4 ||  j==0 && i>0  || j==4 && i>0 || i==3 && j<5)
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

        int n1=6;
        for(int i=0; i<n1; i++)
         {
            for(int j=0; j<n1; j++)
             {
                
                if(i==0 && j>0 && j<4 ||  j==0 && i>0  || j==4 && i>0 || i==3 && j<5)
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


    //     j 0 1 2 3 4 5 6 7 8          j4 => (n-1)/2      
    //  i
    //  0      * * *        i==0 && j>0 && j<(n-1)/2                                             
    //  1    *       *       j==0 && i>0                                    
    //  2    *       *       j==4 && i>0
    //  3    * * * * *      i==3 && j<=(n-1)/2
    //  4    *       *
    //  5    *       *



    //     j 0 1 2 3 4 5         
    //  i
    //  0      * * *          i==0 && j>0 && j<4                                      
    //  1    *       *         j==0 && i>0                                 
    //  2    *       *         j==4 && i>0
    //  3    * * * * *        i==3 && j<5 
    //  4    *       *
    //  5    *       *