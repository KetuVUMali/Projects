
public class Max {
    public static void main(String[] args) 
    {
        int[] numbers = {7, 3, 19, 12, 5};
        int max = numbers[0];  // Assume first element is the max initially

        // Using forEach loop to find the maximum value
        for (int number : numbers) {
            if (number > max) {
                max = number;
            }
        }

        System.out.println("Maximum value: " + max);
    }
}
