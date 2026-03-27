
public class MultiA {
    
    public static void main(String[] args) {
        int x[][] = {  {1,2,3} , {1,2,3} , {1,2,3}  };
        int mult = 1;
        for(int r=0; r<x.length; r++)
        {
            for(int c=0; c<x.length; c++)
            {
                System.out.print(x[c][r] + " ");
                mult=mult* x[c][r];
            }
            System.out.println("");
        }
        System.out.println(" ");
        System.out.println("Multiplication  :  " + mult);
    }
}
