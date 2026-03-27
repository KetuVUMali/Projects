import java.util.Arrays;

public class Equals {
    public static void main(String[] args) {
        int[] array1 = {1, 2, 3};
        int[] array2 = {1, 2, 3};
        int[] array3 = {3, 2, 1};
        int[] array4 = {1, 2, 3, 4};
        System.out.println("Arrays equal: " + Arrays.equals(array1, array2));
        System.out.println("Arrays equal: " + Arrays.equals(array1, array3));
        System.out.println("Arrays equal: " + Arrays.equals(array1, array4));

    }
}
