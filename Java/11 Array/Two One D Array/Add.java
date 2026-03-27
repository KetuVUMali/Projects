import java.util.Arrays;

public class Add {
    public static void main(String[] args) {
        int x[]={1, 2, 3, 4, 5};
        int y[]={6, 7, 8, 9, 0};

        if(x.length != y.length)
        {
            System.out.println(" Arrays must be of the same size ...!");
        }

        // store addition in new array
        int result[] = new int[x.length];

        // 
        for(int i=0; i<x.length; i++)
        {
            result[i] = x[i] + y[i];
        }
        System.out.println(" Addition  : " + result);
        System.out.println(" Addition  : " + Arrays.toString(result));

    }
}
