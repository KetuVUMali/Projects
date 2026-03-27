//package 12 String;

public class ReverseString {
    public static void main(String[] args) {
        String str = "Hello World";
        String reversed = "";

        // Loop through the string in reverse order
        for (int i = str.length() - 1; i >= 0; i--) 
        {
            reversed += str.charAt(i);  // Append characters from the end to start
        }
        
        System.out.println("Reversed String: " + reversed);
    }
}
