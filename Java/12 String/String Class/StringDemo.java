
public class StringDemo {
    public static void main(String[] args) {
        // 1. String creation
        String str = "Hello, World!";
        String str2 = "hello, world!";

        // 2. Length of the string
        System.out.println("Length of str: " + str.length()); // Output: 13

        // 3. Concatenation
        String concatStr = str.concat(" Welcome to Java.");
        System.out.println("Concatenated String: " + concatStr); // Output: Hello, World! Welcome to Java.

        // 4. CharAt
        System.out.println("Character at index 4: " + str.charAt(4)); // Output: o

        // 5. Substring
        System.out.println("Substring from index 7: " + str.substring(7)); // Output: World!
        System.out.println("Substring from index 0 to 5: " + str.substring(0, 5)); // Output: Hello

        // 6. IndexOf
        System.out.println("Index of 'World': " + str.indexOf("World")); // Output: 7

        // 7. Replace
        String replacedStr = str.replace("World", "Java");
        System.out.println("Replaced String: " + replacedStr); // Output: Hello, Java!

        // 8. Equals (Case-sensitive comparison)
        System.out.println("str equals str2: " + str.equals(str2)); // Output: false

        // 9. EqualsIgnoreCase (Case-insensitive comparison)
        System.out.println("str equalsIgnoreCase str2: " + str.equalsIgnoreCase(str2)); // Output: true

        // 10. toUpperCase and toLowerCase
        System.out.println("Uppercase: " + str.toUpperCase()); // Output: HELLO, WORLD!
        System.out.println("Lowercase: " + str.toLowerCase()); // Output: hello, world!

        // 11. Trim (removes leading and trailing spaces)
        String strWithSpaces = "   Hello   ";
        System.out.println("Trimmed String: '" + strWithSpaces.trim() + "'"); // Output: 'Hello'

        // 12. Contains
        System.out.println("Contains 'World': " + str.contains("World")); // Output: true

        // 13. StartsWith and EndsWith
        System.out.println("Starts with 'Hello': " + str.startsWith("Hello")); // Output: true
        System.out.println("Ends with '!': " + str.endsWith("!")); // Output: true

        // 14. Split
        String fruits = "apple,banana,cherry";
        String[] fruitArray = fruits.split(",");
        System.out.println("Fruits: ");
        for (String fruit : fruitArray) {
            System.out.println(fruit);
        }
        // Output:
        // apple
        // banana
        // cherry

        // 15. String formatting
        String name = "John";
        int age = 25;
        String formattedString = String.format("My name is %s and I am %d years old.", name, age);
        System.out.println(formattedString); // Output: My name is John and I am 25 years old.

        // 16. Matches (using regular expression)
        String regexStr = "Hello123";
        System.out.println("Matches 'Hello\\d+': " + regexStr.matches("Hello\\d+")); // Output: true

        // 17. String.valueOf (Convert other data types to String)
        int number = 100;
        String numStr = String.valueOf(number);
        System.out.println("String representation of number: " + numStr); // Output: 100

        // 18. intern (Checks string pool)
        String internStr = new String("Hello");
        System.out.println("Are both strings the same (using intern): " + (internStr.intern() == str)); // Output: false

        // 19. CompareTo (lexicographical comparison)
        System.out.println("Compare 'Hello' and 'World': " + "Hello".compareTo("World")); // Output: -15
        System.out.println("Compare 'World' and 'Hello': " + "World".compareTo("Hello")); // Output: 15
    }
}
