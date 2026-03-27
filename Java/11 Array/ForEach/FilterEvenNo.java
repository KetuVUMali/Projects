
public class FilterEvenNo {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        System.out.println("Even numbers in the array:");
        for (int number : numbers) {
            if (number % 2 == 0) {  // Check if the number is even
                System.out.println(number);
            }
        }
    }
}
