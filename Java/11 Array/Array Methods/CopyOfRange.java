import java.util.Arrays;

public class CopyOfRange {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        int[] subArray = Arrays.copyOfRange(numbers, 1, 4); // from index 1 to 4 (exclusive)
        System.out.println(numbers);
        System.out.println(subArray);
        System.out.println("Original Array: " + Arrays.toString(numbers));
        System.out.println("SubArray: " + Arrays.toString(subArray));
    }
}
