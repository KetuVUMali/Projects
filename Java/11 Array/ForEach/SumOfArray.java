
public class SumOfArray {
    public static void main(String[] args) {
        int[] numbers = {4, 8, 12, 16, 20};
        int sum = 0;

        // Using forEach loop to calculate the sum
        for (int number : numbers) {
            sum += number;  // Add each number to sum
        }

        System.out.println("Sum of numbers: " + sum);

        
    }
}
