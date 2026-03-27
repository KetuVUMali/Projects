import java.util.Arrays;

public class CopyOf {
    public static void main(String[] args) {
        int[] original = {1, 2, 3};
        int[] copy = Arrays.copyOf(original, 5);
        System.out.println(original);
        System.out.println(copy);
        System.out.println(Arrays.toString(copy));
        System.out.println(Arrays.toString(original));
    }
}
