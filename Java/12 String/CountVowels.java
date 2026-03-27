//package 12 String;

public class CountVowels {
    public static void main(String[] args) {
        String str = "Hello World";
        int vowelCount = 0;

        // Convert the string to lowercase to handle both lowercase and uppercase vowels
        str = str.toLowerCase();

        // Loop through the string and check for vowels
        for (int i = 0; i < str.length(); i++) 
        {
            char ch = str.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') 
                {
                    vowelCount++;  // Increment the vowel count
                }
        }

        // Print the number of vowels
        System.out.println("Number of vowels in the string: " + vowelCount);
    }

}
