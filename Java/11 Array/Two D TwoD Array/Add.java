

public class Add {

    public static void main(String[] args) 
    {
        int x[][] = {
                        {1,2,3},
                        {4,5,6},
                        {7,8,9}
                    };

        int y[][] = {
                        {1,2,3},
                        {4,5,6},
                        {7,8,9}
                    };
       
        if( x.length != y.length )
        {
            System.out.println("Not Similar Size Of Array ...!");
        } 

        int result[][] = new int[x.length][x.length];

        for(int i=0; i<x.length; i++)
        {
            for(int j=0; j<x.length; j++)
            {
                System.out.print(result[i][j] = x[i][j] + y[i][j] );
                System.out.print(" ");
            }
            System.out.println(" ");
        }
        
        System.out.println( " \n");
        
        for(int i=0; i<result.length; i++)
        {
            for(int j=0; j<result.length; j++)
            {
                System.out.print(result[i][j] + " ");
            }
            System.out.println(" ");
        }
        
    }
}
