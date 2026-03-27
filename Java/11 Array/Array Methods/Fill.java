import java.util.Arrays;

public class Fill {
    public static void main(String[] args) {
        int[] numbers = new int[5];
        Arrays.fill(numbers, 1);
        System.out.println(numbers);
        System.out.println("Filled Array: " + Arrays.toString(numbers));
    }
}
