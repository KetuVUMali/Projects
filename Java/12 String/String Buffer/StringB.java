
public class StringB {
    public static void main(String[] args) {
        // Create a StringBuffer object
        StringBuffer sb = new StringBuffer("Hello");

        // 1. append()
        sb.append(" World!");  // Adds text to the end
        System.out.println("append(): " + sb);  // Output: append(): Hello World!

        // 2. insert()
        sb.insert(5, " Java");  // Inserts text at the specified index
        System.out.println("insert(): " + sb);  // Output: insert(): Hello Java World!

        // 3. replace()
        sb.replace(5, 9, "Programming");  // Replaces a portion of the string
        System.out.println("replace(): " + sb);  // Output: replace(): Hello Programming World!

        // 4. delete()
        sb.delete(5, 16);  // Deletes characters from the specified range
        System.out.println("delete(): " + sb);  // Output: delete(): Hello World!

        // 5. deleteCharAt()
        sb.deleteCharAt(5);  // Deletes a single character at the specified index
        System.out.println("deleteCharAt(): " + sb);  // Output: deleteCharAt(): HelloWrld!

        // 6. reverse()
        sb.reverse();  // Reverses the entire string
        System.out.println("reverse(): " + sb);  // Output: reverse(): !dlrWoH

        // 7. capacity()
        System.out.println("capacity(): " + sb.capacity());  // Output: capacity(): 32

        // 8. length()
        System.out.println("length(): " + sb.length());  // Output: length(): 7

        // 9. ensureCapacity()
        sb.ensureCapacity(50);  // Ensures the capacity is at least the specified value
        System.out.println("ensureCapacity(): " + sb.capacity());  // Output: ensureCapacity(): 50

        // 10. setLength()
        sb.setLength(5);  // Sets the length of the StringBuffer
        System.out.println("setLength(): " + sb);  // Output: setLength(): !dlr

        // 11. substring()
        String substring = sb.substring(1, 4);  // Returns a substring of the StringBuffer
        System.out.println("substring(): " + substring);  // Output: substring(): dlr

        // 12. charAt()
        char charAt = sb.charAt(2);  // Returns the character at the specified index
        System.out.println("charAt(): " + charAt);  // Output: charAt(): r

        // 13. indexOf()
        int index = sb.indexOf("e");  // Returns the index of the first occurrence of a specified character
        System.out.println("indexOf(): " + index);  // Output: indexOf(): 1

        // 14. lastIndexOf()
        int lastIndex = sb.lastIndexOf("e");  // Returns the index of the last occurrence of a specified character
        System.out.println("lastIndexOf(): " + lastIndex);  // Output: lastIndexOf(): 1

        // 15. toString()
        String str = sb.toString();  // Converts the StringBuffer to a String
        System.out.println("toString(): " + str);  // Output: toString(): !dlr

        // 16. appendCodePoint()
        sb.appendCodePoint(65);  // Appends a character (given by its Unicode code point)
        System.out.println("appendCodePoint(): " + sb);  // Output: appendCodePoint(): !dlrA
    }
}
