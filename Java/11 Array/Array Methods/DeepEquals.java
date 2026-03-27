import java.util.Arrays;

public class DeepEquals {
    public static void main(String[] args) {
        int[][] array1 = {{1, 2}, {3, 4}};
        int[][] array2 = {{1, 2}, {3, 4}};
        System.out.println("Arrays equal: " + Arrays.deepEquals(array1, array2));
    }
}
