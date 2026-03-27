//package 12 String.String Builder;

public class StringB {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");

        // 1. append()
        sb.append(" World!");
        System.out.println("append(): " + sb);

        // 2. insert()
        sb.insert(5, " Java");
        System.out.println("insert(): " + sb);

        // 3. replace()
        sb.replace(5, 9, "Programming");
        System.out.println("replace(): " + sb);

        // 4. delete()
        sb.delete(5, 16);
        System.out.println("delete(): " + sb);

        // 5. deleteCharAt()
        sb.deleteCharAt(5);
        System.out.println("deleteCharAt(): " + sb);

        // 6. reverse()
        sb.reverse();
        System.out.println("reverse(): " + sb);

        // 7. capacity()
        System.out.println("capacity(): " + sb.capacity());

        // 8. length()
        System.out.println("length(): " + sb.length());

        // 9. ensureCapacity()
        sb.ensureCapacity(50);
        System.out.println("ensureCapacity(): " + sb.capacity());

        // 10. setLength()
        sb.setLength(5);
        System.out.println("setLength(): " + sb);

        // 11. substring()
        String substring = sb.substring(1, 4);
        System.out.println("substring(): " + substring);

        // 12. charAt()
        char charAt = sb.charAt(2);
        System.out.println("charAt(): " + charAt);

        // 13. indexOf()
        int index = sb.indexOf("e");
        System.out.println("indexOf(): " + index);

        // 14. lastIndexOf()
        int lastIndex = sb.lastIndexOf("e");
        System.out.println("lastIndexOf(): " + lastIndex);

        // 15. toString()
        String str = sb.toString();
        System.out.println("toString(): " + str);

        // 16. appendCodePoint()
        sb.appendCodePoint(65); // Unicode code point for 'A'
        System.out.println("appendCodePoint(): " + sb);
    }
}
