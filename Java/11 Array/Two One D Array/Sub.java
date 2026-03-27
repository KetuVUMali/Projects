import java.util.Arrays;

public class Sub {
    public static void main(String[] args) {
        int x[]={1,2,3,4,5,6};
        int y[]={7,8,9,6,5,4};

        int result[] = new int[x.length];

        if(x.length != y.length)
        {
            System.out.println(" Arrays must be of the same size ...!");
        }

        for(int i=0; i<x.length; i++)
        {
            result[i] = x[i] - y[i];
        }
        System.out.println(" Subtraction : "+ result);
        System.out.println("Subtraction : " + Arrays.toString(result));
    }

}
